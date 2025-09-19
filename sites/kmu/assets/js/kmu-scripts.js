// KMU-spezifische JavaScript Funktionalität für kmu.docuflux.de

// Mobile Navigation
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.remove('active');
    menuBtn.classList.remove('active');
}

// KMU-spezifischer Ersparnisrechner
function calculateKMUSavings() {
    // Input-Werte holen
    const rechnungen = parseInt(document.getElementById('rechnungen-monat').value) || 80;
    const minutenAktuell = parseInt(document.getElementById('minuten-rechnung').value) || 12;
    const stundensatz = parseInt(document.getElementById('stundensatz-kmu').value) || 80;
    
    // Berechnungen (KMU-spezifisch: 2 Min pro Rechnung mit Docuflux)
    const aktuelleZeitStunden = (rechnungen * minutenAktuell) / 60;
    const neueZeitStunden = (rechnungen * 2) / 60; // 2 Min pro Rechnung mit Docuflux
    const zeitersparnis = aktuelleZeitStunden - neueZeitStunden;
    const geldersparnisMonat = zeitersparnis * stundensatz;
    const geldersparnisJahr = geldersparnisMonat * 12;
    
    // ROI Berechnung (Annahme: 149€/Monat Kosten für KMU-Plan)
    const kostenJahr = 149 * 12; // 1788€ pro Jahr
    const roi = ((geldersparnisJahr - kostenJahr) / kostenJahr) * 100;
    
    // Ergebnisse anzeigen mit Animation
    updateResultWithAnimation('zeit-aktuell-kmu', aktuelleZeitStunden.toFixed(1) + 'h');
    updateResultWithAnimation('zeit-neu-kmu', neueZeitStunden.toFixed(1) + 'h');
    updateResultWithAnimation('zeit-ersparnis-kmu', zeitersparnis.toFixed(1) + 'h');
    updateResultWithAnimation('geld-monat-kmu', '€ ' + geldersparnisMonat.toLocaleString('de-DE'));
    updateResultWithAnimation('geld-jahr-kmu', '€ ' + geldersparnisJahr.toLocaleString('de-DE'));
    updateResultWithAnimation('roi-prozent-kmu', Math.max(0, roi).toFixed(0) + '%');
    
    // Analytics Tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'calculator_used', {
            'event_category': 'engagement',
            'event_label': 'kmu_calculator',
            'rechnungen_monat': rechnungen,
            'minuten_rechnung': minutenAktuell,
            'stundensatz': stundensatz,
            'ersparnis_jahr': geldersparnisJahr,
            'domain': 'kmu.docuflux.de'
        });
    }
}

function updateResultWithAnimation(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('updated');
        element.textContent = value;
        
        setTimeout(() => {
            element.classList.remove('updated');
        }, 300);
    }
}

// FAQ Funktionalität
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Alle anderen FAQs schließen
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Aktuelles FAQ togglen
    if (!isActive) {
        faqItem.classList.add('active');
        
        // Analytics Tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'faq_toggle', {
                'event_category': 'engagement',
                'event_label': button.querySelector('span').textContent,
                'domain': 'kmu.docuflux.de'
            });
        }
    }
}

// Demo Request Form Handler
function handleDemoRequest(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        phone: formData.get('phone'),
        source: 'kmu.docuflux.de',
        utm_source: getURLParameter('utm_source'),
        utm_medium: getURLParameter('utm_medium'),
        utm_campaign: getURLParameter('utm_campaign')
    };
    
    // Form Validation
    if (!data.name || !data.email) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
    }
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
    }
    
    // Submit Button State
    const submitBtn = event.target.querySelector('.cta-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Wird gesendet...';
    submitBtn.disabled = true;
    
    // Analytics Tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'conversion',
            'event_label': 'demo_request',
            'domain': 'kmu.docuflux.de'
        });
        
        // Conversion Tracking
        gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/KMU_DEMO_REQUEST'
        });
    }
    
    // Simulate API Call (replace with actual endpoint)
    setTimeout(() => {
        // Success
        submitBtn.innerHTML = '✓ Anfrage gesendet!';
        submitBtn.style.background = '#10b981';
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        setTimeout(() => {
            event.target.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
        
    }, 1500);
    
    // TODO: Replace with actual API call
    /*
    fetch('/api/demo-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            showSuccessMessage();
            event.target.reset();
        } else {
            throw new Error(result.message);
        }
    })
    .catch(error => {
        alert('Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.');
        console.error('Error:', error);
    })
    .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
    */
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        ">
            <strong>Vielen Dank!</strong><br>
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Utility Functions
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth Scrolling für Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToElement(targetId);
            
            // Mobile Menu schließen falls offen
            closeMobileMenu();
        });
    });
}

// Active Navigation Highlighting
function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Auto-Berechnung bei Input-Änderung
function initAutoCalculation() {
    const inputs = document.querySelectorAll('#rechnungen-monat, #minuten-rechnung, #stundensatz-kmu');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Debounce für bessere Performance
            clearTimeout(this.calculateTimeout);
            this.calculateTimeout = setTimeout(() => {
                calculateKMUSavings();
            }, 500);
        });
    });
}

// Input Validation
function initInputValidation() {
    const rechnungen = document.getElementById('rechnungen-monat');
    const minuten = document.getElementById('minuten-rechnung');
    const stundensatz = document.getElementById('stundensatz-kmu');
    
    if (rechnungen) {
        rechnungen.addEventListener('blur', function() {
            if (this.value < 1) this.value = 1;
            if (this.value > 500) this.value = 500;
        });
    }
    
    if (minuten) {
        minuten.addEventListener('blur', function() {
            if (this.value < 1) this.value = 1;
            if (this.value > 60) this.value = 60;
        });
    }
    
    if (stundensatz) {
        stundensatz.addEventListener('blur', function() {
            if (this.value < 20) this.value = 20;
            if (this.value > 500) this.value = 500;
        });
    }
}

// Intersection Observer für Animationen
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Elemente für Animation markieren
    document.querySelectorAll('.card, .solution-step, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Close mobile menu when clicking outside
function initOutsideClickHandler() {
    document.addEventListener('click', function(event) {
        const mobileNav = document.getElementById('mobile-nav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!event.target.closest('.main-header') && mobileNav && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Performance Monitoring
function initPerformanceTracking() {
    // Core Web Vitals Tracking
    if (typeof gtag !== 'undefined') {
        // Largest Contentful Paint
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                gtag('event', 'LCP', {
                    event_category: 'Web Vitals',
                    value: Math.round(entry.startTime),
                    domain: 'kmu.docuflux.de'
                });
            }
        }).observe({entryTypes: ['largest-contentful-paint']});
        
        // First Input Delay
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                gtag('event', 'FID', {
                    event_category: 'Web Vitals',
                    value: Math.round(entry.processingStart - entry.startTime),
                    domain: 'kmu.docuflux.de'
                });
            }
        }).observe({entryTypes: ['first-input']});
    }
}

// Page Load Event Tracking
function trackPageLoad() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            domain: 'kmu.docuflux.de'
        });
    }
}

// CTA Click Tracking
function initCTATracking() {
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_primary_click', {
                    event_category: 'engagement',
                    event_label: this.textContent.trim(),
                    domain: 'kmu.docuflux.de'
                });
            }
        });
    });
    
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_secondary_click', {
                    event_category: 'engagement',
                    event_label: this.textContent.trim(),
                    domain: 'kmu.docuflux.de'
                });
            }
        });
    });
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initActiveNavigation();
    initAutoCalculation();
    initInputValidation();
    initScrollAnimations();
    initOutsideClickHandler();
    initPerformanceTracking();
    initCTATracking();
    
    // Initial calculation
    calculateKMUSavings();
    
    // Track page load
    trackPageLoad();
    
    console.log('KMU Docuflux Landing Page initialized successfully');
});

// Window Load Event
window.addEventListener('load', function() {
    // Page fully loaded
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_loaded', {
            event_category: 'performance',
            domain: 'kmu.docuflux.de'
        });
    }
});

// Error Handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
            event_category: 'error',
            event_label: event.error.message,
            domain: 'kmu.docuflux.de'
        });
    }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateKMUSavings,
        toggleFAQ,
        handleDemoRequest
    };
}
