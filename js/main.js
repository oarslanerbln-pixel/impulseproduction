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
            "hero-title-1": "Ihre Geschichte",
            "hero-title-2": "Filmisch",
            "hero-title-3": "Erzählt",
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
            "footer-rights": "© 2026 Impulse Production. Alle Rechte vorbehalten.",
            "cookie-text": "Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.",
            "cookie-more": "Mehr erfahren",
            "cookie-accept": "Akzeptieren",
            "testimonials-title": "Was Kunden sagen",
            "testimonial-quote-1": "\"Impulse Production hat unsere Vision nicht nur verstanden, sondern auf ein Level gehoben, das wir uns nicht vorstellen konnten. Die filmische Qualität ist absolut Weltklasse.\"",
            "testimonial-author-1": "Marco Rossi",
            "testimonial-role-1": "Inhaber, Fine Dining Group",
            "testimonial-quote-2": "\"Die Zusammenarbeit war hochprofessionell. Unsere neue Landingpage in Kombination mit den Drohnenaufnahmen hat unsere Anfragen verdoppelt.\"",
            "testimonial-author-2": "Sarah Schmidt",
            "testimonial-role-2": "Marketing Direktorin, Luxury Estate",
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
            "hero-title-1": "Sizin Hikayeniz",
            "hero-title-2": "Sinematik",
            "hero-title-3": "Anlatım",
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
            "footer-rights": "© 2026 Impulse Production. Tüm hakları saklıdır.",
            "cookie-text": "Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanır. Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş sayılırsınız.",
            "cookie-more": "Daha fazla bilgi",
            "cookie-accept": "Kabul Et",
            "testimonials-title": "Müşterilerimiz Ne Diyor?",
            "testimonial-quote-1": "\"Impulse Production sadece vizyonumuzu anlamakla kalmadı, onu hayal bile edemeyeceğimiz bir seviyeye taşıdı. Sinematik kalite kesinlikle dünya standartlarında.\"",
            "testimonial-author-1": "Marco Rossi",
            "testimonial-role-1": "Sahibi, Fine Dining Group",
            "testimonial-quote-2": "\"İş birliğimiz son derece profesyoneldi. Yeni landing page'imiz ve drone çekimlerimiz sayesinde aldığımız talepler iki katına çıktı.\"",
            "testimonial-author-2": "Sarah Schmidt",
            "testimonial-role-2": "Pazarlama Direktörü, Luxury Estate",
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
        setTimeout(() => {
            preloader.classList.add('show-i');
        }, 400);

        setTimeout(() => {
            preloader.classList.add('show-rest');
        }, 1300);

        setTimeout(() => {
            preloader.classList.add('show-subtitle');
        }, 2100);

        // Transition to main content after everything is loaded
        window.addEventListener('load', () => {
            // Ensure minimum display time (3.5s) for the brand impact
            const minStayTime = 3500;
            const startTime = parseInt(sessionStorage.getItem('preloaderStartTime')) || Date.now();
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, minStayTime - elapsed);

            setTimeout(() => {
                preloader.classList.add('fade-out');
                
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.classList.add('preloader-done');
                    
                    // Trigger hero reveal
                    const hero = document.getElementById('hero');
                    if (hero) hero.classList.add('is-loaded');

                    // PLAY LOCAL HERO VIDEO
                    const heroVideo = document.getElementById('heroVideo');
                    if (heroVideo) {
                        heroVideo.play().catch(err => {
                            console.log("Autoplay blocked or video missing:", err);
                        });
                    }
                }, 1200);
            }, remaining);
        });

        // Track start time if not already tracked
        if (!sessionStorage.getItem('preloaderStartTime')) {
            sessionStorage.setItem('preloaderStartTime', Date.now());
        }
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

    const animatedElements = document.querySelectorAll('.fade-in-element, .portfolio-item, .about-text, .services-list, .services-display');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

    // Services Hover
    const serviceItems = document.querySelectorAll('.sc-item');
    const serviceContents = document.querySelectorAll('.sc-content');

    if (serviceItems.length > 0 && serviceContents.length > 0) {
        serviceItems[0].classList.add('active');
        serviceContents[0].classList.add('active');

        serviceItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                const targetIndex = item.getAttribute('data-index');
                serviceItems.forEach(i => i.classList.remove('active'));
                serviceContents.forEach(c => c.classList.remove('active'));
                item.classList.add('active');
                const targetContent = document.querySelector(`.sc-content[data-content="${targetIndex}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

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
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        init(); animate();
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

    // 8. Magnetic WhatsApp Button
    const waFloat = document.querySelector('.whatsapp-float');
    if (waFloat) {
        document.addEventListener('mousemove', (e) => {
            const rect = waFloat.getBoundingClientRect();
            const waX = rect.left + rect.width / 2;
            const waY = rect.top + rect.height / 2;
            
            const distX = e.clientX - waX;
            const distY = e.clientY - waY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            
            if (distance < 150) {
                const moveX = (e.clientX - waX) * 0.15;
                const moveY = (e.clientY - waY) * 0.15;
                waFloat.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            } else {
                waFloat.style.transform = 'translate(0, 0) scale(1)';
            }
        });
    }

    // --- Lazy Loading for Vimeo Iframes ---
    const vimeoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                const src = iframe.getAttribute('data-src');
                if (src) {
                    iframe.setAttribute('src', src);
                    iframe.removeAttribute('data-src');
                }
                vimeoObserver.unobserve(iframe);
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('.lazy-vimeo').forEach(iframe => {
        vimeoObserver.observe(iframe);
    });

    // --- Particle System Optimization ---
    const particlesCanvas = document.getElementById('particles-canvas');
    if (particlesCanvas) {
        const particlesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.pJSDom && window.pJSDom[0]) {
                    if (entry.isIntersecting) {
                        window.pJSDom[0].pJS.particles.move.enable = true;
                    } else {
                        window.pJSDom[0].pJS.particles.move.enable = false;
                    }
                }
            });
        }, { threshold: 0.1 });
        particlesObserver.observe(particlesCanvas);
    }

    // ==========================================
    // FLOATING CTA - Delayed Appearance
    // ==========================================
    const floatingCta = document.getElementById('floatingCta');
    if (floatingCta) {
        setTimeout(() => {
            floatingCta.classList.add('visible');
        }, 4000); // Show after 4 seconds
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
    const revealElements = document.querySelectorAll('.fade-in-element, .section-title, .about-text, .testimonial-card, .sc-item');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered delay for grouped items
                    const delay = entry.target.classList.contains('sc-item')
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
});
