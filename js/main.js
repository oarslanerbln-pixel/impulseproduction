document.addEventListener('DOMContentLoaded', () => {

    // LENS PROLOADER STARTED

    // PRELOADER (Lens & Focus Reveal)
    document.body.classList.add('preloader-active');

    // Phase 1: Odaklanma (Focus pull)
    setTimeout(() => {
        document.body.classList.add('preloader-focusing');
    }, 100);

    // Phase 2: Kameranın İçinden Geçiş (Zoom through)
    setTimeout(() => {
        document.body.classList.add('preloader-zooming');
    }, 2800);

    // Phase 3: Tamamlanma ve Hero Tetikleme
    setTimeout(() => {
        document.body.classList.remove('preloader-active', 'preloader-focusing', 'preloader-zooming');
        document.body.classList.add('preloader-done');

        // Trigger Hero Animation
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.classList.add('is-loaded');
        }
    }, 4000);

    // Header Scroll Effect
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Placeholder logic)
    // For a simple single page, we might just hide nav on narrow screens via CSS,
    // but in a real project we'd add a hamburger menu here.

    // Intersection Observer for Fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has animated in
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in classes to elements we want to animate on scroll
    const animatedElements = document.querySelectorAll('.accordion-item, .portfolio-item, .about-text');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

    // Services Accordion Interaction
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // If it wasn't active, open it
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // Portfolio Cinematic Focus (Option 1)
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioItemsDOM = document.querySelectorAll('.portfolio-item');

    if (portfolioGrid && portfolioItemsDOM.length > 0) {
        const portfolioObserverOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px', // Trigger in the middle 40% of viewport
            threshold: 0
        };

        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const item = entry.target;
                const video = item.querySelector('.portfolio-hover-video');

                if (entry.isIntersecting) {
                    item.classList.add('is-focused');
                    if (video) video.play().catch(e => console.log("Auto-play prevented", e));
                } else {
                    item.classList.remove('is-focused');
                    if (video) video.pause();
                }
            });

            // Check if any item is focused to dim others
            const hasFocus = Array.from(portfolioItemsDOM).some(i => i.classList.contains('is-focused'));
            if (hasFocus) {
                portfolioGrid.classList.add('has-focus');
            } else {
                portfolioGrid.classList.remove('has-focus');
            }
        }, portfolioObserverOptions);

        portfolioItemsDOM.forEach(item => {
            portfolioObserver.observe(item);
        });
    }

    // Portfolio Hover Video Interaction (Fallback/Desktop enhancement)
    const hoverVideoItems = document.querySelectorAll('.hover-video-item');
    hoverVideoItems.forEach(item => {
        const video = item.querySelector('.portfolio-hover-video');
        if (video) {
            item.addEventListener('mouseenter', () => {
                item.classList.add('is-playing');
                video.play().catch(e => {
                    // Browser may block autoplay until user interacts with doc
                    console.log("Video play was prevented:", e);
                });
            });

            item.addEventListener('mouseleave', () => {
                item.classList.remove('is-playing');
                video.pause();
                // Optional: reset video to start
                // video.currentTime = 0;
            });
        }
    });

    // Smooth Scroll for anchor links (fallback for browsers without scroll-behavior: smooth)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for fixed header
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Navigation Toggle
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

    // Simple Form Submission Handler (Prevent default reload for demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = 'Wird gesendet...';
            btn.disabled = true;

            // Simulate API logic
            setTimeout(() => {
                btn.textContent = 'Nachricht erhalten!';
                btn.classList.remove('btn-primary');
                btn.style.backgroundColor = '#10b981'; // success green
                btn.style.color = '#fff';

                contactForm.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.add('btn-primary');
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

    // Golden Particles System
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
            constructor() {
                this.reset();
            }

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
                this.x += this.speedX;
                this.y += this.speedY;
                this.life--;

                if (this.life <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 168, 83, ${this.opacity})`; // Golden accent
                ctx.fill();

                if (this.size > 1.5) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(212, 168, 83, 0.5)';
                } else {
                    ctx.shadowBlur = 0;
                }
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        init();
        animate();
    }

    // ==========================================
    // PREMIUM MICRO-INTERACTIONS
    // ==========================================

    // 1. Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorText = document.querySelector('.cursor-text');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!document.body.classList.contains('cursor-active')) {
                document.body.classList.add('cursor-active');
            }
        });

        // Smooth cursor animation via requestAnimationFrame
        const renderCursor = () => {
            // Lerp
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Hover states for links and buttons
        const hoverElements = document.querySelectorAll('a, button, .accordion-header, input, textarea, select');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Specific hover state for portfolio
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
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
        el.classList.add('magnetic');
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Pull the element towards the cursor
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            
            // If the element has a text span, pull it a bit further (parallax inside button)
            const text = el.querySelector('.cta-text');
            if(text) text.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0px, 0px)';
            const text = el.querySelector('.cta-text');
            if(text) text.style.transform = 'translate(0px, 0px)';
        });
    });

    // 3. 3D Portfolio Tilt
    if (portfolioItemsDOM.length > 0) {
        portfolioItemsDOM.forEach(item => {
            const media = item.querySelector('.portfolio-media');
            
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                // Get mouse position relative to center of element (-1 to 1)
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                // Tilt element
                item.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
                
                // Parallax media inside
                if(media) {
                    media.style.transform = `translateX(${x * -10}px) translateY(${y * -10}px)`;
                }
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
                if(media) {
                    media.style.transform = `translateX(0) translateY(0)`;
                }
            });
        });
    }

    // ==========================================
    // PORTFOLIO VIDEO MODAL
    // ==========================================
    const videoModal = document.getElementById('videoModal');
    const videoModalOverlay = document.querySelector('.video-modal-overlay');
    const videoModalClose = document.querySelector('.video-modal-close');
    const videoModalContainer = document.querySelector('.video-modal-container');

    // Currently we will just clone the background video into the modal to play. 
    // Wait for the user to provide Vimeo links to replace this with an iframe later.
    if (portfolioItemsDOM.length > 0 && videoModal) {
        portfolioItemsDOM.forEach(item => {
            item.addEventListener('click', () => {
                const vimeoId = item.getAttribute('data-vimeo-id');
                if (vimeoId) {
                    
                    // Create an iframe to play in modal
                    const iframeElement = document.createElement('iframe');
                    // We add autoplay=1, portrait=0, title=0, byline=0
                    iframeElement.setAttribute('src', `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`);
                    iframeElement.setAttribute('frameborder', '0');
                    iframeElement.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
                    iframeElement.setAttribute('allowfullscreen', 'true');
                    iframeElement.style.width = '100%';
                    iframeElement.style.height = '100%';
                    
                    videoModalContainer.innerHTML = ''; // clear previous
                    videoModalContainer.appendChild(iframeElement);
                    
                    document.body.classList.add('modal-active');
                }
            });
        });
    }

    const closeModal = () => {
        document.body.classList.remove('modal-active');
        // Stop the video by clearing the container
        setTimeout(() => {
            videoModalContainer.innerHTML = '';
        }, 500); // wait for fade out transition
    };

    if (videoModalClose) videoModalClose.addEventListener('click', closeModal);
    if (videoModalOverlay) videoModalOverlay.addEventListener('click', closeModal);
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('modal-active')) {
            closeModal();
        }
    });

});
