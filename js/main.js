document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // TRANSLATIONS (i18n)
    // ==========================================
    const translations = {
        de: {
            "preloader-subtitle": "Cinematic Visuals & Digital Branding",
            "nav-services": "Leistungen",
            "nav-portfolio": "Portfolio",
            "nav-about": "Über mich",
            "nav-contact": "Kontakt",
            "hero-title-1": "Ihre Vision.",
            "hero-title-2": "Filmisch",
            "hero-title-3": "Vollendet.",
            "hero-subtitle": "Definieren Sie die Geschichte Ihrer Marke durch erstklassige Videoproduktion, Branding und visionäre digitale Lösungen neu.",
            "hero-cta": "Angebot einholen",
            "services-title": "Leistungen",
            "service-title-1": "Videoproduktion & Schnitt",
            "service-title-2": "Drohnenaufnahmen",
            "service-title-3": "Markenbildung (Branding)",
            "service-title-4": "Landingpage-Erstellung",
            "service-title-5": "QR-Code-Design",
            "service-title-6": "Webdesign",
            "service-desc-1": "Premium-Videoinhalte, die die visuelle Seele Ihrer Marke mit High-End-Equipment und filmischen Schnitttechniken einfangen. Wir erzählen Ihre Geschichte mit atemberaubender Visualität.",
            "service-desc-2": "Wechseln Sie die Perspektive. Verleihen Sie Ihren Projekten filmische Größe und makellose Pracht mit 4K-Luftaufnahmen. Luxuriöse Details aus der Luft für Architektur- und Unternehmenspräsentationen.",
            "service-desc-3": "Indem wir Ihre Corporate Identity neu erfinden, bauen wir ein einprägsames Premium-Markenimage auf, das sich von Ihren Mitbewerbern abhebt. Eine ganzheitliche Vision von Ihrem Logo bis zur Farbpalette.",
            "service-desc-4": "Ästhetisch reine, konversionsstarke Landingpages, die extrem schnell laden und Ihre Zielgruppe direkt zum Handeln anregen. Eine digitale Waffe für Ihre Kampagnen.",
            "service-desc-5": "Speziell für Ihre Marke entwickelte Premium-QR-Code-Lösungen und Menüs, die die physische mit der digitalen Welt auf eleganteste Weise verbinden. Verwandelt gewöhnliche Quadrate in luxuriöse Interaktionen.",
            "service-desc-6": "Makellos funktionierende digitale Schaufenster, die mit feinen Details verwoben sind und all Ihre Dienstleistungen und Ihre Vision präsentieren. Der Punkt, an dem User Experience (UX) auf luxuriöses Design trifft.",
            "portfolio-title": "Portfolio",
            "portfolio-item-1-title": "Fine Dining & Kulinarik",
            "portfolio-item-1-desc": "Exklusive Restaurant-Präsentation",
            "portfolio-item-2-title": "Luftaufnahmen & Drone Shots",
            "portfolio-item-2-desc": "Filmische Perspektiven mit Dynamik",
            "portfolio-item-3-title": "Orient-Küche & Digitales Menü",
            "portfolio-item-3-desc": "Tradition trifft auf moderne Ästhetik",
            "portfolio-item-4-title": "Event-Locations & Atmosphäre",
            "portfolio-item-4-desc": "Unvergessliche Augenblicke festgehalten",
            "about-title": "Über mich",
            "about-text-1": "Es ist nicht wichtig, wie hochwertig Ihr Produkt ist, wenn Sie es nicht der richtigen Zielgruppe auf die richtige Art und Weise präsentieren. Wahre Kunst liegt in der Sichtbarkeit. Ein Meisterwerk, das im Verborgenen bleibt, erreicht niemals die Massen. Mein Hauptfokus liegt darauf, die Qualität Ihrer Arbeit mit der Ästhetik, der Seele und der Leidenschaft Ihrer Marke so filmisch wie möglich in der digitalen Welt zu vereinen.",
            "about-text-2": "Von auffälligen Video- und Drohnenproduktionen bis hin zu konversionsstarken Landingpages und ganzheitlichen Branding-Lösungen; ich entwerfe und konzipiere Ihre Projekte, um sie so zu verpacken, dass sie bei Ihrem Publikum einen unvergesslichen Premium-Eindruck hinterlassen. Lassen Sie uns Ihre Vision in eine makellose Präsentation verwandeln und Ihre Reichweite maximieren.",
            "contact-title": "Kostenlose Erstberatung",
            "contact-subtitle": "Jede Marke ist einzigartig. Erzählen Sie uns von Ihrer Vision, und wir entwickeln ein maßgeschneidertes digitales Konzept, das Ihr Unternehmen auf das nächste Premium-Level hebt.",
            "form-label-name": "Ihr Name / Unternehmen",
            "form-placeholder-name": "Geben Sie Ihren Namen ein",
            "form-label-email": "Ihre E-Mail-Adresse",
            "form-placeholder-email": "beispiel@email.com",
            "form-label-challenge": "Ihre größte aktuelle digitale Herausforderung",
            "form-option-default": "Bitte wählen",
            "form-option-1": "Markenbekanntheit steigern",
            "form-option-2": "Mehr Buchungen / Anfragen generieren",
            "form-option-3": "Ein neues, luxuriöses Markenimage (Rebranding)",
            "form-option-4": "Premium Video & Content Erstellung",
            "form-option-5": "Individuelle Strategie benötigt",
            "form-label-message": "Erzählen Sie uns mehr über Ihre Ziele (Optional)",
            "form-placeholder-message": "Z.B.: 'Wir möchten in den nächsten 6 Monaten unsere Reservierungen im Fine-Dining Bereich um 20% steigern...'",
            "form-submit": "Potenzialanalyse anfragen",
            "form-privacy-1": "Ich habe die",
            "form-privacy-link": "Datenschutzerklärung",
            "form-privacy-2": "gelesen und akzeptiere die Speicherung meiner Daten.",
            "footer-impressum": "Impressum",
            "footer-datenschutz": "Datenschutz",
            "footer-rights": "© 2026 Envisio. Alle Rechte vorbehalten.",
            "footer-cookie-settings": "Cookie-Einstellungen",
            "cookie-text": "Diese Website bindet Inhalte von Vimeo, Unsplash und lottie.host ein. Dabei wird Ihre IP-Adresse an diese Anbieter übertragen. Diese Inhalte werden erst nach Ihrer Einwilligung geladen.",
            "cookie-more": "Mehr erfahren",
            "cookie-accept": "Akzeptieren",
            "cookie-decline": "Ablehnen",
            "form-sending": "Wird gesendet...",
            "form-success": "Nachricht erhalten!",
            "wa-contact-label": "WhatsApp Kontakt",
            "portfolio-play": "Projekt ansehen"
        },
        tr: {
            "preloader-subtitle": "Sinematik Görseller & Dijital Markalama",
            "nav-services": "Hizmetler",
            "nav-portfolio": "Portfolyo",
            "nav-about": "Hakkımda",
            "nav-contact": "İletişim",
            "hero-title-1": "Vizyonunuz.",
            "hero-title-2": "Sinematik",
            "hero-title-3": "Kusursuzluk.",
            "hero-subtitle": "Birinci sınıf video prodüksiyonu, markalaşma ve vizyoner dijital çözümlerle markanızın hikayesini yeniden tanımlayın.",
            "hero-cta": "Teklif Al",
            "services-title": "Hizmetler",
            "service-title-1": "Video Prodüksiyon & Kurgu",
            "service-title-2": "Drone Çekimleri",
            "service-title-3": "Markalaşma (Branding)",
            "service-title-4": "Landing Page Tasarımı",
            "service-title-5": "QR Kod Tasarımı",
            "service-title-6": "Web Tasarımı",
            "service-desc-1": "Üst düzey ekipman ve sinematik kurgu teknikleriyle markanızın görsel ruhunu yakalayan premium video içerikleri. Hikayenizi çarpıcı bir görsellikle anlatıyoruz.",
            "service-desc-2": "Perspektifinizi değiştirin. 4K hava çekimleriyle projelerinize sinematik bir boyut ve kusursuz bir ihtişam katın. Mimari ve kurumsal sunumlar için havadan lüks detaylar.",
            "service-desc-3": "Kurumsal kimliğinizi yeniden icat ederek, rakiplerinizden ayrılan unutulmaz bir premium marka imajı inşa ediyoruz. Logodan renk paletine kadar bütünsel bir vizyon.",
            "service-desc-4": "Son derece hızlı yüklenen ve hedef kitlenizi doğrudan harekete geçiren, estetik açıdan saf ve dönüşüm odaklı açılış sayfaları. Kampanyalarınız için dijital bir güç.",
            "service-desc-5": "Fiziksel dünyayı dijital dünyayla en zarif şekilde birleştiren, markanıza özel geliştirilmiş premium QR kod çözümleri ve menüler. Sıradan kareleri lüks etkileşimlere dönüştürür.",
            "service-desc-6": "İnce detaylarla örülmüş, tüm hizmetlerinizi ve vizyonunuzu sergileyen kusursuz çalışan dijital vitrinler. Kullanıcı deneyiminin (UX) lüks tasarımla buluştuğu nokta.",
            "portfolio-title": "Portfolyo",
            "portfolio-item-1-title": "Fine Dining & Mutfak Sanatı",
            "portfolio-item-1-desc": "Özel Restoran Sunumu",
            "portfolio-item-2-title": "Hava Çekimleri & Drone",
            "portfolio-item-2-desc": "Dinamik Sinematik Perspektifler",
            "portfolio-item-3-title": "Doğu Mutfağı & Dijital Menü",
            "portfolio-item-3-desc": "Gelenek Modern Estetikle Buluşuyor",
            "portfolio-item-4-title": "Etkinlik Mekanları & Atmosfer",
            "portfolio-item-4-desc": "Unutulmaz Anlar Kaydedildi",
            "about-title": "Hakkımda",
            "about-text-1": "Ürününüzün ne kadar kaliteli olduğu, onu doğru hedef kitleye doğru şekilde sunmadığınız sürece önemli değildir. Gerçek sanat görünürlükte yatar. Gizli kalan bir şaheser asla kitlelere ulaşamaz. Temel odak noktam, işinizin kalitesini markanızın estetiği, ruhu ve tutkusuyla birleştirerek dijital dünyada mümkün olduğunca sinematik bir şekilde sunmaktır.",
            "about-text-2": "Dikkat çekici video ve drone prodüksiyonlarından dönüşüm odaklı landing pagelere ve bütünsel markalaşma çözümlerine kadar; projelerinizi hedef kitlenizde unutulmaz bir premium izlenim bırakacak şekilde tasarlıyor ve kurguluyorum. Vizyonunuzu kusursuz bir sunuma dönüştürelim ve erişiminizi maksimize edelim.",
            "contact-title": "Ücretsiz İlk Danışmanlık",
            "contact-subtitle": "Her marka benzersizdir. Vizyonunuzu bize anlatın, işletmenizi bir sonraki premium seviyeye taşıyacak size özel bir dijital konsept geliştirelim.",
            "form-label-name": "Adınız / Şirketiniz",
            "form-placeholder-name": "Adınızı giriniz",
            "form-label-email": "E-posta Adresiniz",
            "form-placeholder-email": "ornek@eposta.com",
            "form-label-challenge": "Güncel Dijital Zorluğunuz",
            "form-option-default": "Lütfen seçiniz",
            "form-option-1": "Marka Bilinirliğini Artırmak",
            "form-option-2": "Daha Fazla Rezervasyon / Talep Almak",
            "form-option-3": "Yeni, Lüks Bir Marka İmajı (Yeniden Markalaşma)",
            "form-option-4": "Premium Video & İçerik Üretimi",
            "form-option-5": "Özel Strateji Gerekiyor",
            "form-label-message": "Hedefleriniz Hakkında Daha Fazla Bilgi Verin (Opsiyonel)",
            "form-placeholder-message": "Örn: 'Önümüzdeki 6 ay içinde fine-dining rezervasyonlarımızı %20 artırmak istiyoruz...'",
            "form-submit": "Potansiyel Analizi Talep Et",
            "form-privacy-1": "Okudum ve",
            "form-privacy-link": "Gizlilik Politikasını",
            "form-privacy-2": "verilerimin işlenmesini kabul ediyorum.",
            "footer-impressum": "Künye",
            "footer-datenschutz": "Gizlilik",
            "footer-rights": "© 2026 Envisio. Tüm hakları saklıdır.",
            "footer-cookie-settings": "Çerez Ayarları",
            "cookie-text": "Bu web sitesi Vimeo, Unsplash ve lottie.host içeriklerini kullanır. Bu sırada IP adresiniz ilgili sağlayıcılara aktarılır. Bu içerikler yalnızca onayınızdan sonra yüklenir.",
            "cookie-more": "Daha fazla bilgi",
            "cookie-accept": "Kabul Et",
            "cookie-decline": "Reddet",
            "form-sending": "Gönderiliyor...",
            "form-success": "Mesajınız Alındı!",
            "wa-contact-label": "Bizimle Yazışın",
            "portfolio-play": "Projeyi İzle"
        }
    };

    function updateContent(lang) {
        // Update attributes based on data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update data-text for nav links (premium effect)
        document.querySelectorAll('.nav-link[data-text]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('data-text', translations[lang][key]);
            }
        });

        // Update active class on buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Save preference
        localStorage.setItem('preferredLang', lang);
    }

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateContent(lang);
        });
    });

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLang') || 'de';
    updateContent(savedLang);


    // ==========================================
    // PREMIUM TYPOGRAPHY PRELOADER
    // ==========================================
    const preloader = document.getElementById('preloader');

    if (preloader) {
        // Sequentially add classes for staggered animation
        setTimeout(() => preloader.classList.add('show-i'), 150);
        setTimeout(() => preloader.classList.add('show-rest'), 400);
        setTimeout(() => preloader.classList.add('show-subtitle'), 650);

        // Only ever show the preloader once per session.
        const seen = sessionStorage.getItem('preloaderSeen') === '1';
        const MIN_STAY = seen ? 0 : 800;
        // Hard ceiling: the preloader must disappear even if `load` never
        // fires, which happens whenever a third party hangs instead of failing.
        const MAX_STAY = seen ? 0 : 2500;

        const startTime = Date.now();
        let dismissed = false;

        const revealSite = () => {
            if (dismissed) return;
            dismissed = true;
            sessionStorage.setItem('preloaderSeen', '1');

            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.add('preloader-done');

                const hero = document.getElementById('hero');
                if (hero) hero.classList.add('is-loaded');

                startHeroVideo();
            }, 500);
        };

        const dismissAfterMinimum = () => {
            setTimeout(revealSite, Math.max(0, MIN_STAY - (Date.now() - startTime)));
        };

        if (document.readyState === 'complete') {
            dismissAfterMinimum();
        } else {
            window.addEventListener('load', dismissAfterMinimum);
        }
        setTimeout(revealSite, MAX_STAY); // fail-safe, independent of `load`
    }

    // The hero video is 36 MB, so it is never fetched on small screens - the
    // CSS poster/gradient stands in for it there.
    function startHeroVideo() {
        const heroVideo = document.getElementById('heroVideo');
        if (!heroVideo) return;

        const tooSmall = window.matchMedia('(max-width: 768px)').matches;
        const savesData = navigator.connection && navigator.connection.saveData;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (tooSmall || savesData || reduceMotion) {
            heroVideo.remove();
            document.body.classList.add('hero-video-skipped');
            return;
        }

        heroVideo.load(); // preload="none" means nothing has been fetched yet
        heroVideo.play().catch(err => {
            console.log('Hero video autoplay unavailable:', err);
        });
    }


    // ==========================================
    // UI EFFECTS & INTERACTION
    // ==========================================
    const header = document.getElementById('header');

    // Scroll Progress Bar
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update scroll progress bar
        if (scrollProgress) {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-element, .portfolio-item, .about-text, .bento-grid-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

    // ==========================================
    // CINEMATIC PORTFOLIO SLIDER
    // ==========================================
    const sliderTrack = document.getElementById('portfolioSliderTrack');
    const slides = document.querySelectorAll('.cinematic-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.getElementById('portfolioSliderDots');
    
    if (sliderTrack && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        const dots = document.querySelectorAll('.slider-dot');

        // Previously all four Vimeo players loaded at once with autoplay=1.
        // Now at most one player exists: the visible one, and only once the
        // visitor has consented to Vimeo embeds.
        function syncSlideVideos() {
            const allowed = window.EnvisioConsent && window.EnvisioConsent.granted();

            slides.forEach((slide, index) => {
                const iframe = slide.querySelector('iframe.lazy-vimeo');
                if (!iframe) return;

                if (!allowed) {
                    iframe.removeAttribute('src');
                    return;
                }

                if (index === currentSlide) {
                    const src = iframe.getAttribute('data-consent-src');
                    if (src && iframe.getAttribute('src') !== src) {
                        iframe.setAttribute('src', src.replace('autoplay=0', 'autoplay=1'));
                    }
                } else if (iframe.hasAttribute('src')) {
                    // Dropping src tears the player down, which is the only way
                    // to stop playback without pulling in the Vimeo Player SDK.
                    iframe.removeAttribute('src');
                }
            });
        }

        function updateSlider() {
            // Move track
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Update classes
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });

            syncSlideVideos();
        }

        if (window.EnvisioConsent) {
            window.EnvisioConsent.onChange(syncSlideVideos);
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            });
        }

        // Swipe support
        let touchStartX = 0;
        sliderTrack.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        sliderTrack.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                // Swipe left
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            } else if (touchEndX - touchStartX > 50) {
                // Swipe right
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            }
        }, {passive: true});
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Nav
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    }

    if (mobileLinks.length > 0) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            });
        });
    }

    // Services logic removed - using CSS-based Bento Grid now.



    // ==========================================
    // PREMIUM MICRO-INTERACTIONS
    // ==========================================

    // 1. Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorText = document.querySelector('.cursor-text');
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!document.body.classList.contains('cursor-active')) {
                document.body.classList.add('cursor-active');
            }
        });

        const renderCursor = () => {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        const hoverElements = document.querySelectorAll('a, button, input, textarea, select');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        const sliderItems = document.querySelectorAll('.cinematic-slide');
        sliderItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('play-hover');
                if (cursorText) cursorText.textContent = 'PLAY';
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('play-hover');
                if (cursorText) cursorText.textContent = '';
            });
        });
    }

    // 2. Magnetic Buttons
    const magneticElements = document.querySelectorAll('.btn, .cta-link');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            const text = el.querySelector('.cta-text');
            if(text) text.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            const text = el.querySelector('.cta-text');
            if(text) text.style.transform = '';
        });
    });

    // ==========================================
    // PARTICLES (Golden)
    // ==========================================
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 60;
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();
        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.life = Math.random() * 100 + 100;
            }
            update() {
                this.x += this.speedX; this.y += this.speedY; this.life--;
                if (this.life <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 168, 83, ${this.opacity})`;
                ctx.fill();
            }
        }
        function init() { for (let i = 0; i < particleCount; i++) particles.push(new Particle()); }

        // Exposed so the IntersectionObserver below can stop the loop once the
        // hero scrolls away, instead of burning a frame budget for the whole
        // length of the page.
        const state = {
            running: true,
            frame: null,
            resume() {
                if (state.frame === null && state.running) animate();
            }
        };
        window.envisioParticles = state;

        function animate() {
            if (!state.running) { state.frame = null; return; }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            state.frame = requestAnimationFrame(animate);
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            state.running = false;
            canvas.remove();
        } else {
            init();
            animate();
        }
    }

    // 6. Web3Forms AJAX Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            const currentLang = localStorage.getItem('preferredLang') || 'de';
            btn.disabled = true;
            btn.textContent = translations[currentLang]["form-sending"] || "Sending...";

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: json
                });
                const result = await response.json();

                if (response.status === 200) {
                    btn.textContent = translations[currentLang]["form-success"] || "Success!";
                    btn.style.backgroundColor = '#10b981';
                    contactForm.reset();
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 5000);
                } else {
                    console.log(result);
                    throw new Error(result.message);
                }
            } catch (error) {
                console.error("Email Error:", error);
                btn.textContent = "Error!";
                btn.style.backgroundColor = "#ef4444";
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }
        });
    }

    // 7. Interactive 3D Logo Tilt & Shimmer
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('shimmer');
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (y / (rect.height / 2)) * -15;
            const rotateY = (x / (rect.width / 2)) * 15;
            logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }

    // --- Particle System: stop the rAF loop while the hero is off-screen ---
    // (This previously drove window.pJSDom from particles.js, a library that is
    //  not loaded here, so it never did anything.)
    const particlesCanvas = document.getElementById('particles-canvas');
    if (particlesCanvas && typeof window.envisioParticles === 'object') {
        const particlesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                window.envisioParticles.running = entry.isIntersecting;
                if (entry.isIntersecting) window.envisioParticles.resume();
            });
        }, { threshold: 0 });
        particlesObserver.observe(particlesCanvas);
    }

    // ==========================================
    // FLOATING CTA - Delayed Appearance & Smart Scroll
    // ==========================================
    const floatingCta = document.getElementById('floatingCta');
    if (floatingCta) {
        let isInitialDelayOver = false;
        setTimeout(() => {
            isInitialDelayOver = true;
            floatingCta.style.opacity = '1';
            floatingCta.style.visibility = 'visible';
            floatingCta.style.transform = 'translateY(0) scale(1)';
        }, 4000); // Show after 4 seconds

        let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
        window.addEventListener('scroll', () => {
            if (!isInitialDelayOver) return;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 300) {
                // Scrolling down, hide it smoothly
                floatingCta.style.transform = 'translateY(100px) scale(0.8)';
                floatingCta.style.opacity = '0';
                floatingCta.style.visibility = 'hidden';
            } else if (scrollTop < lastScrollTop) {
                // Scrolling up, show it
                floatingCta.style.transform = 'translateY(0) scale(1)';
                floatingCta.style.opacity = '1';
                floatingCta.style.visibility = 'visible';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });
    }

    // ==========================================
    // PARALLAX SCROLL EFFECTS
    // ==========================================
    const parallaxSections = document.querySelectorAll('.parallax-section');

    if (parallaxSections.length > 0 && window.innerWidth > 768) {
        // Scroll-based parallax for section content
        let ticking = false;

        const updateParallax = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            parallaxSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + scrollY;
                const speed = parseFloat(section.dataset.parallaxSpeed) || 0.2;

                // Only apply when section is near viewport
                if (rect.bottom > 0 && rect.top < windowHeight) {
                    const offset = (scrollY - sectionTop + windowHeight) * speed;

                    // Apply subtle parallax to inner content
                    const content = section.querySelector('.container, .cinematic-slider-container');
                    if (content) {
                        content.style.transform = `translateY(${offset * 0.15}px)`;
                    }
                }
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    }

    // ==========================================
    // ENHANCED SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll('.fade-in-element, .section-title, .about-text, .testimonial-card, .bento-item');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered delay for grouped items
                    const delay = entry.target.classList.contains('bento-item')
                        ? parseInt(entry.target.dataset.index || 0) * 100
                        : 0;

                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);

                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('reveal-ready');
            revealObserver.observe(el);
        });
    }

    // ==========================================
    // PREMIUM: Scroll-Triggered Word Reveal
    // ==========================================
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const text = title.textContent.trim();
        if (!text) return;

        const words = text.split(/\s+/);
        title.innerHTML = '';
        title.classList.add('word-reveal');

        words.forEach((word, i) => {
            const span = document.createElement('span');
            span.classList.add('word');
            span.textContent = word;
            span.style.transitionDelay = `${i * 0.08}s`;
            title.appendChild(span);
            // Add space between words
            if (i < words.length - 1) {
                title.appendChild(document.createTextNode('\u00A0'));
            }
        });

        // Re-add the ::after pseudo-element separator line
        // (section-title originally had one)
    });

    const wordRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                wordRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.word-reveal').forEach(el => {
        wordRevealObserver.observe(el);
    });

    // ==========================================
    // PREMIUM: 3D Parallax Tilt Cards
    // ==========================================
    const tiltTargets = document.querySelectorAll('.testimonial-card, .cinematic-slide');

    tiltTargets.forEach(card => {
        // Only on desktop
        if (window.innerWidth < 768) return;

        card.classList.add('tilt-card');
        card.style.perspective = '800px';

        // Add shine overlay
        const shine = document.createElement('div');
        shine.classList.add('tilt-shine');
        card.appendChild(shine);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            // Update shine position
            const shineX = (x / rect.width) * 100;
            const shineY = (y / rect.height) * 100;
            shine.style.setProperty('--shine-x', shineX + '%');
            shine.style.setProperty('--shine-y', shineY + '%');
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ==========================================
    // PREMIUM: Smooth Page Transitions
    // ==========================================
    // Create overlay element
    const transOverlay = document.createElement('div');
    transOverlay.classList.add('page-transition-overlay');
    document.body.appendChild(transOverlay);

    // Intercept internal links (not anchors, not external)
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        // Skip anchors, external links, mailto, tel, javascript
        if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('javascript')) return;
        // Skip target="_blank" links
        if (link.getAttribute('target') === '_blank') return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            transOverlay.classList.add('active');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
