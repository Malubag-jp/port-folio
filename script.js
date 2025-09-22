$(document).ready(function() {
    var typed = new Typed(".input", {
        strings: ["Jhon Paul <span>Malubag</span>"],
        typeSpeed: 100,
        backSpeed: 90,
        loop: true
    });
    AOS.init({
            offset: 300,
            duration: 1400,
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add keyboard navigation for mobile menu
            const navToggler = document.querySelector('.navbar-toggler');
            const navMenu = document.querySelector('#navbarNavAltMarkup');
            
            if (navToggler && navMenu) {
                navToggler.addEventListener('click', function() {
                    const expanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !expanded);
                });
            }
            
            const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
            smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                        
                        setTimeout(() => {
                            targetElement.setAttribute('tabindex', '-1');
                            targetElement.focus();
                            targetElement.removeAttribute('tabindex');
                        }, 500);
                    }
                });
            });
            
            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', function(e) {
                    const nameInput = document.getElementById('name');
                    const emailInput = document.getElementById('email');
                    const messageInput = document.getElementById('message');
                    
                    let isValid = true;
                    
                    document.querySelectorAll('.error-message').forEach(error => {
                        error.textContent = '';
                    });
                    
                    if (!nameInput.value.trim()) {
                        document.getElementById('name-error').textContent = 'Please enter your full name.';
                        nameInput.setAttribute('aria-invalid', 'true');
                        isValid = false;
                    } else {
                        nameInput.setAttribute('aria-invalid', 'false');
                    }
                    
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailInput.value.trim()) {
                        document.getElementById('email-error').textContent = 'Please enter your email address.';
                        emailInput.setAttribute('aria-invalid', 'true');
                        isValid = false;
                    } else if (!emailPattern.test(emailInput.value)) {
                        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                        emailInput.setAttribute('aria-invalid', 'true');
                        isValid = false;
                    } else {
                        emailInput.setAttribute('aria-invalid', 'false');
                    }
                    
                    if (!messageInput.value.trim()) {
                        document.getElementById('message-error').textContent = 'Please enter your message.';
                        messageInput.setAttribute('aria-invalid', 'true');
                        isValid = false;
                    } else {
                        messageInput.setAttribute('aria-invalid', 'false');
                    }
                    
                    if (!isValid) {
                        e.preventDefault();
                        const firstInvalid = form.querySelector('[aria-invalid="true"]');
                        if (firstInvalid) {
                            firstInvalid.focus();
                        }
                    } else {
                        document.getElementById('submit-status').textContent = 'Sending message...';
                    }
                });
            }
            
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.setAttribute('tabindex', '-1');
                        target.focus();
                        target.scrollIntoView();
                    }
                });
            }
            
            const sections = document.querySelectorAll('section[id]');
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute('aria-labelledby') || entry.target.id;
                        document.title = `${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} - Jhon Paul Malubag Portfolio`;
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                observer.observe(section);
            });
        });
});

