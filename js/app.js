// =========================
// APP - Lógica principal
// =========================

const App = {
    // Estado de la app
    state: {
        currentSection: 'inicio',
        menuOpen: false,
        lastScrollY: 0
    },

    // Inicialización
    init() {
        this.setCurrentYear();
        this.hideLoader();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupContactForm();
        this.setupPWA();
    },

    // Establece el año actual en el footer
    setCurrentYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    },

    // Oculta el loader
    hideLoader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('hidden');
                }
            }, 500);
        });
    },

    // Configuración de navegación
    setupNavigation() {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle menú móvil
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                this.state.menuOpen = !this.state.menuOpen;
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Navegación suave
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Cerrar menú móvil
                    if (this.state.menuOpen) {
                        menuToggle.classList.remove('active');
                        navMenu.classList.remove('active');
                        this.state.menuOpen = false;
                    }

                    // Scroll suave
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Actualizar link activo
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    this.state.currentSection = targetId;
                }
            });
        });
    },

    // Efectos de scroll
    setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    // Ocultar/mostrar navbar al hacer scroll
                    if (currentScrollY > this.state.lastScrollY && currentScrollY > 100) {
                        navbar.classList.add('hidden');
                    } else {
                        navbar.classList.remove('hidden');
                    }

                    this.state.lastScrollY = currentScrollY;

                    // Actualizar sección activa
                    this.updateActiveSection();

                    ticking = false;
                });

                ticking = true;
            }
        });

        // Intersection Observer para animaciones
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    },

    // Actualiza la sección activa en el menú
    updateActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection !== this.state.currentSection) {
            this.state.currentSection = currentSection;
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === currentSection) {
                    link.classList.add('active');
                }
            });
        }
    },

    // Configuración del formulario de contacto
    // Configuración del formulario de contacto
    setupContactForm() {
        const sendButton = document.getElementById('send-message');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const successMessage = document.getElementById('form-success');
        const contactForm = document.getElementById('contact-form');

        if (sendButton) {
            sendButton.addEventListener('click', (e) => {
                e.preventDefault();

                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const message = messageInput.value.trim();

                // Validación
                if (!name || !email || !message) {
                    alert('Por favor completa todos los campos');
                    return;
                }

                if (!this.isValidEmail(email)) {
                    alert('Por favor ingresa un email válido');
                    return;
                }

                // Deshabilitar botón y mostrar estado de envío
                sendButton.disabled = true;
                sendButton.textContent = 'Enviando...';

                // Parámetros para EmailJS
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'zyntech.solutions.it@gmail.com'
                };

                // Enviar con EmailJS
                emailjs.send('service_x2bm01r', 'template_wlgna9x', templateParams)
                    .then((response) => {
                        console.log('Email enviado exitosamente!', response.status, response.text);
                        
                        // Limpiar formulario
                        nameInput.value = '';
                        emailInput.value = '';
                        messageInput.value = '';

                        // Mostrar mensaje de éxito
                        successMessage.classList.remove('hidden');
                        sendButton.disabled = false;
                        sendButton.textContent = 'Enviar Mensaje';

                        // Ocultar mensaje después de 5 segundos
                        setTimeout(() => {
                            successMessage.classList.add('hidden');
                        }, 5000);
                    })
                    .catch((error) => {
                        console.error('Error al enviar email:', error);
                        alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
                        
                        sendButton.disabled = false;
                        sendButton.textContent = 'Enviar Mensaje';
                    });
            });
        }
    },

    // Validación de email
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // Configuración PWA
    setupPWA() {
        // Registrar Service Worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('Service Worker registrado:', registration);
                    })
                    .catch(error => {
                        console.log('Error al registrar Service Worker:', error);
                    });
            });
        }

        // Install prompt
        let deferredPrompt;
        const installBanner = document.getElementById('install-banner');
        const installButton = document.getElementById('install-button');
        const closeBanner = document.getElementById('close-banner');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Mostrar banner de instalación
            if (installBanner) {
                installBanner.classList.remove('hidden');
            }
        });

        if (installButton) {
            installButton.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    
                    if (outcome === 'accepted') {
                        console.log('PWA instalada');
                    }
                    
                    deferredPrompt = null;
                    installBanner.classList.add('hidden');
                }
            });
        }

        if (closeBanner) {
            closeBanner.addEventListener('click', () => {
                installBanner.classList.add('hidden');
            });
        }

        // Detectar cuando la app es instalada
        window.addEventListener('appinstalled', () => {
            console.log('PWA instalada con éxito');
            if (installBanner) {
                installBanner.classList.add('hidden');
            }
        });
    }
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}