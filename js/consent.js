/* ==========================================================================
   Consent manager (DSGVO / TDDDG section 25)

   Nothing that contacts a third party may load before the visitor has agreed.
   Every such element ships with data-consent-src instead of src and is only
   unlocked here.

   Covered: the Vimeo player iframes in the portfolio slider. That is the only
   third party the site still contacts - the services section was rebuilt
   without images or Lottie, so nothing else needs a gate.

   Withdrawal has to be as easy as giving consent, so the decision is
   re-openable at any time through the "Cookie-Einstellungen" footer link.
   ========================================================================== */
(function () {
    'use strict';

    var STORAGE_KEY = 'envisio_consent_v2';

    var listeners = [];

    function stored() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null; // private mode / storage disabled
        }
    }

    function persist(value) {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch (e) {
            /* decision simply is not remembered; asking again is the safe default */
        }
    }

    var api = {
        granted: function () {
            return stored() === 'granted';
        },
        decided: function () {
            var v = stored();
            return v === 'granted' || v === 'denied';
        },
        /* Called by main.js so the slider can pull in a Vimeo player on demand. */
        onChange: function (cb) {
            listeners.push(cb);
            if (api.decided()) cb(api.granted());
        }
    };
    window.EnvisioConsent = api;

    function notify(isGranted) {
        listeners.forEach(function (cb) {
            try {
                cb(isGranted);
            } catch (e) {
                console.error('consent listener failed:', e);
            }
        });
    }

    function apply(isGranted) {
        document.body.classList.toggle('consent-granted', isGranted);
        document.body.classList.toggle('consent-denied', !isGranted);
        notify(isGranted);
    }

    function decide(value) {
        persist(value);
        hideBanner();
        apply(value === 'granted');
    }

    /* ---------------------------------------------------------------- banner */
    var banner;

    function showBanner() {
        if (!banner) return;
        banner.hidden = false;
        // let the browser register hidden=false before transitioning
        requestAnimationFrame(function () {
            banner.classList.add('visible');
        });
    }

    function hideBanner() {
        if (!banner) return;
        banner.classList.remove('visible');
        setTimeout(function () {
            banner.hidden = true;
        }, 400);
    }

    document.addEventListener('DOMContentLoaded', function () {
        banner = document.getElementById('cookieBanner');

        var accept = document.getElementById('cookieAccept');
        var decline = document.getElementById('cookieDecline');
        var reopen = document.getElementById('cookieSettings');

        if (accept) accept.addEventListener('click', function () { decide('granted'); });
        if (decline) decline.addEventListener('click', function () { decide('denied'); });

        if (reopen) {
            reopen.addEventListener('click', function (e) {
                e.preventDefault();
                showBanner();
            });
        }

        if (api.decided()) {
            apply(api.granted());
        } else {
            apply(false);
            setTimeout(showBanner, 1200);
        }
    });
})();
