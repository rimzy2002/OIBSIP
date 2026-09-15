/**
 * Refais Mohamed Rimzy | Personal Portfolio JavaScript
 * Oasis Infobyte Internship - Web Development & Designing (Level 1, Task 2)
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. DOM Elements
    // --------------------------------------------------------------------------
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('main section');
    const contactForm = document.getElementById('contactForm');
    const formSuccessAlert = document.getElementById('formSuccessAlert');

    // --------------------------------------------------------------------------
    // 2. Mobile Drawer Navigation Toggle
    // --------------------------------------------------------------------------
    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close drawer when any mobile nav link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --------------------------------------------------------------------------
    // 3. Header Styling on Scroll
    // --------------------------------------------------------------------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
            header.style.background = 'rgba(9, 13, 22, 0.94)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(9, 13, 22, 0.82)';
        }
    });

    // --------------------------------------------------------------------------
    // 4. Active Navigation Observer (Intersection Observer)
    // --------------------------------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --------------------------------------------------------------------------
    // 5. Contact Form Client-side Validation
    // --------------------------------------------------------------------------
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const subjectInput = document.getElementById('contactSubject');
            const messageInput = document.getElementById('contactMessage');

            // Reset validation states
            [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
                if (input) {
                    input.parentElement.classList.remove('has-error');
                }
            });

            // Name check
            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            // Email check (Regex)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            // Subject check
            if (!subjectInput.value.trim()) {
                subjectInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            // Message check
            if (!messageInput.value.trim()) {
                messageInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (isValid) {
                // Display success confirmation
                if (formSuccessAlert) {
                    formSuccessAlert.style.display = 'block';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        formSuccessAlert.style.display = 'none';
                    }, 6000);
                }
            }
        });

        // Clear error as user types
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.parentElement.classList.contains('has-error')) {
                    input.parentElement.classList.remove('has-error');
                }
            });
        });
    }
});
