// Creative Development Agency Website - ArunDev Solutions
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initCounterAnimations();
    initSkillBarAnimations();
    initContactForm();
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initInteractiveElements();
    initParallaxEffects();
    
    // Add loaded class for animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Navigation functionality with creative touches
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                
                // Add creative scroll effect
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
        
        // Add hover sound effect simulation
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px rgba(50, 184, 198, 0.5)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });
}

// Advanced scroll animations with stagger effects
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Base animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotateX(0deg)';
                
                // Special animations for different elements
                if (entry.target.classList.contains('service-card')) {
                    animateServiceCards(entry.target);
                }
                
                if (entry.target.classList.contains('tech-item')) {
                    animateTechItems(entry.target);
                }
                
                if (entry.target.classList.contains('work-card')) {
                    animateWorkCards(entry.target);
                }
                
                if (entry.target.classList.contains('why-card')) {
                    animateWhyCards(entry.target);
                }
                
                if (entry.target.classList.contains('testimonial-card')) {
                    animateTestimonialCards(entry.target);
                }
                
                if (entry.target.classList.contains('pricing-card')) {
                    animatePricingCards(entry.target);
                }
                
                if (entry.target.classList.contains('process-step')) {
                    animateProcessSteps(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .service-card, .tech-item, .work-card, .why-card, 
        .testimonial-card, .pricing-card, .process-step, 
        .section-header
    `);
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) rotateX(15deg)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// Staggered animations for different card types
function animateServiceCards(target) {
    const cards = target.parentNode.querySelectorAll('.service-card');
    const index = Array.from(cards).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        target.style.animationDelay = `${index * 0.2}s`;
    }, index * 100);
}

function animateTechItems(target) {
    const items = target.parentNode.querySelectorAll('.tech-item');
    const index = Array.from(items).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        target.style.transform = 'translateY(0) rotateY(0deg)';
    }, index * 80);
}

function animateWorkCards(target) {
    const cards = target.parentNode.querySelectorAll('.work-card');
    const index = Array.from(cards).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        target.style.animationDelay = `${index * 0.3}s`;
    }, index * 150);
}

function animateWhyCards(target) {
    const cards = target.parentNode.querySelectorAll('.why-card');
    const index = Array.from(cards).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        target.style.transform = 'translateY(0) scale(1)';
    }, index * 120);
}

function animateTestimonialCards(target) {
    const cards = target.parentNode.querySelectorAll('.testimonial-card');
    const index = Array.from(cards).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        target.style.animationDelay = `${index * 0.25}s`;
    }, index * 100);
}

function animatePricingCards(target) {
    const cards = target.parentNode.querySelectorAll('.pricing-card');
    const index = Array.from(cards).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        if (target.classList.contains('featured')) {
            target.style.transform = 'translateY(0) scale(1.05)';
        } else {
            target.style.transform = 'translateY(0) scale(1)';
        }
    }, index * 200);
}

function animateProcessSteps(target) {
    const steps = target.parentNode.querySelectorAll('.process-step');
    const index = Array.from(steps).indexOf(target);
    
    setTimeout(() => {
        target.classList.add('animate-in');
        target.style.animationDelay = `${index * 0.4}s`;
    }, index * 300);
}

// Enhanced counter animations with creative effects
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const observerOptions = {
        threshold: 0.7
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateCounters();
                addCounterEffects();
            }
        });
    }, observerOptions);
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
    
    function animateCounters() {
        counters.forEach((counter, index) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2500 + (index * 500); // Staggered timing
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            // Add pulsing effect during counting
            counter.style.color = 'var(--color-teal-300)';
            counter.style.textShadow = '0 0 20px rgba(50, 184, 198, 0.5)';
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    const displayValue = Math.floor(current);
                    counter.textContent = displayValue;
                    
                    // Add glitch effect at certain intervals
                    if (displayValue % Math.floor(target / 3) === 0) {
                        counter.style.transform = 'scale(1.1) rotateZ(2deg)';
                        setTimeout(() => {
                            counter.style.transform = 'scale(1) rotateZ(0deg)';
                        }, 100);
                    }
                    
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                    counter.style.textShadow = '0 0 30px rgba(50, 184, 198, 0.8)';
                    
                    // Final celebration effect
                    counter.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        counter.style.transform = 'scale(1)';
                        counter.style.textShadow = '';
                    }, 300);
                }
            };
            
            setTimeout(() => {
                updateCounter();
            }, index * 200);
        });
    }
    
    function addCounterEffects() {
        counters.forEach(counter => {
            counter.parentElement.style.background = 'linear-gradient(135deg, rgba(50, 184, 198, 0.1), rgba(168, 75, 47, 0.1))';
        });
    }
}

// Enhanced skill bar animations with creative effects
function initSkillBarAnimations() {
    const skillBars = document.querySelectorAll('.skill-fill');
    let skillsAnimated = false;
    
    const observerOptions = {
        threshold: 0.4
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                animateSkillBars();
            }
        });
    }, observerOptions);
    
    const techSection = document.querySelector('.tech-stack');
    if (techSection) {
        observer.observe(techSection);
    }
    
    function animateSkillBars() {
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                const techItem = bar.closest('.tech-item');
                
                // Add glow effect to parent
                techItem.style.boxShadow = '0 10px 30px rgba(50, 184, 198, 0.2)';
                
                // Animate the bar
                bar.style.width = width + '%';
                
                // Add completion effect
                setTimeout(() => {
                    bar.style.boxShadow = '0 0 20px rgba(50, 184, 198, 0.5)';
                    setTimeout(() => {
                        bar.style.boxShadow = '';
                        techItem.style.boxShadow = '';
                    }, 500);
                }, 1500);
                
            }, index * 150);
        });
    }
}

// Creative contact form with enhanced feedback
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Add focus effects to form inputs
        const inputs = contactForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--color-teal-300)';
                this.style.boxShadow = '0 0 20px rgba(50, 184, 198, 0.3)';
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = 'var(--color-border)';
                this.style.boxShadow = '';
                this.parentElement.style.transform = '';
            });
            
            // Add typing effect
            input.addEventListener('input', function() {
                this.style.borderColor = 'var(--color-orange-400)';
                setTimeout(() => {
                    this.style.borderColor = 'var(--color-teal-300)';
                }, 100);
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Enhanced validation with visual feedback
            if (!validateForm(data)) {
                return;
            }
            
            // Creative submission animation
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Loading animation
            submitBtn.textContent = 'SENDING... 🚀';
            submitBtn.disabled = true;
            submitBtn.style.background = 'linear-gradient(135deg, var(--color-orange-400), var(--color-red-400))';
            submitBtn.style.transform = 'scale(0.98)';
            
            // Add form shake effect
            contactForm.style.animation = 'formPulse 0.5s ease-out';
            
            setTimeout(() => {
                // Success animation
                showCreativeNotification('MESSAGE SENT SUCCESSFULLY! 🎉\nWe\'ll respond within 2 hours.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                submitBtn.style.transform = '';
                contactForm.style.animation = '';
                
                // Celebration effect
                createCelebrationEffect(submitBtn);
                
            }, 2000);
        });
    }
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'message'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!data[field] || data[field].trim() === '') {
            input.style.borderColor = 'var(--color-red-400)';
            input.style.boxShadow = '0 0 15px rgba(255, 84, 89, 0.5)';
            input.parentElement.style.animation = 'shake 0.5s ease-out';
            isValid = false;
            
            setTimeout(() => {
                input.style.borderColor = '';
                input.style.boxShadow = '';
                input.parentElement.style.animation = '';
            }, 2000);
        }
    });
    
    if (!isValidEmail(data.email)) {
        const emailInput = document.getElementById('email');
        emailInput.style.borderColor = 'var(--color-red-400)';
        emailInput.style.boxShadow = '0 0 15px rgba(255, 84, 89, 0.5)';
        showCreativeNotification('Please enter a valid email address! 📧', 'error');
        isValid = false;
    }
    
    if (!isValid) {
        showCreativeNotification('Please fill in all required fields! ⚠️', 'error');
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Creative notification system with emojis and animations
function showCreativeNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const emoji = type === 'success' ? '🎉' : type === 'error' ? '⚠️' : 'ℹ️';
    const bgColor = type === 'success' ? 
        'linear-gradient(135deg, var(--color-teal-300), var(--color-teal-400))' : 
        'linear-gradient(135deg, var(--color-red-400), var(--color-orange-400))';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-emoji">${emoji}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add creative styles
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 30px;
        background: ${bgColor};
        color: var(--color-slate-900);
        padding: 20px 30px;
        border-radius: 15px;
        font-weight: 600;
        font-size: 14px;
        z-index: 1001;
        transform: translateX(400px) rotateY(90deg);
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.2);
        white-space: pre-line;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in with 3D effect
    setTimeout(() => {
        notification.style.transform = 'translateX(0) rotateY(0deg)';
    }, 100);
    
    // Add floating animation
    setTimeout(() => {
        notification.style.animation = 'float 3s ease-in-out infinite';
    }, 600);
    
    // Remove with creative exit
    setTimeout(() => {
        notification.style.transform = 'translateX(400px) rotateY(-90deg) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 6000);
}

function createCelebrationEffect(element) {
    // Create particle burst effect
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, var(--color-teal-300), var(--color-orange-400));
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particles
        const angle = (i * 30) * Math.PI / 180;
        const velocity = 100 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }).onfinish = () => particle.remove();
    }
}

// Enhanced mobile menu with creative animations
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            if (!isActive) {
                // Opening animation
                navLinks.classList.add('active');
                this.classList.add('active');
                
                // Stagger animation for nav links
                const links = navLinks.querySelectorAll('.nav-link, .btn');
                links.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            } else {
                // Closing animation
                navLinks.classList.remove('active');
                this.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinkElements = document.querySelectorAll('.nav-link');
        navLinkElements.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling with creative easing
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                
                // Custom smooth scroll with easing
                smoothScrollTo(offsetTop, 1000);
                
                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
    });
}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuart(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuart(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }
    
    requestAnimationFrame(animation);
}

// Creative navbar scroll effects
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(19, 52, 59, 0.98)';
            navbar.style.backdropFilter = 'blur(30px)';
            navbar.style.borderBottomColor = 'rgba(50, 184, 198, 0.4)';
            navbar.style.transform = 'translateY(0)';
        } else {
            navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottomColor = 'rgba(50, 184, 198, 0.2)';
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Interactive elements with creative hover effects
function initInteractiveElements() {
    // Enhanced button interactions
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });
    
    // Enhanced card interactions
    document.querySelectorAll('.service-card, .work-card, .pricing-card, .testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.filter = 'brightness(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
            this.style.filter = '';
        });
    });
    
    // Tech item interactions
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.tech-icon');
            icon.style.transform = 'scale(1.2) rotateY(180deg)';
            icon.style.filter = 'drop-shadow(0 0 10px rgba(50, 184, 198, 0.5))';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.tech-icon');
            icon.style.transform = '';
            icon.style.filter = '';
        });
    });
}

// Parallax effects for enhanced visual experience
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Hero background parallax
        const heroBackground = document.querySelector('.hero-bg');
        if (heroBackground) {
            const rate = scrolled * -0.3;
            heroBackground.style.transform = `translateY(${rate}px) scale(1.1)`;
        }
        
        // Floating cards parallax
        const floatingCards = document.querySelectorAll('.floating-card');
        floatingCards.forEach((card, index) => {
            const rate = scrolled * (0.2 + index * 0.1);
            card.style.transform = `translateY(${rate}px) rotateZ(${rate * 0.02}deg)`;
        });
        
        // Section backgrounds
        const sections = document.querySelectorAll('section::before');
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const rate = (window.innerHeight - rect.top) * 0.1;
                section.style.transform = `translateY(${rate}px)`;
            }
        });
    });
}

// Enhanced button click handlers with creative feedback
document.addEventListener('click', function(e) {
    const buttonText = e.target.textContent;
    
    // Hero CTA buttons
    if (buttonText.includes('VIEW CASE STUDIES')) {
        e.preventDefault();
        scrollToSection('#work');
        createRippleEffect(e.target, e);
    }
    
    if (buttonText.includes('START PROJECT')) {
        e.preventDefault();
        scrollToSection('#contact');
        createRippleEffect(e.target, e);
        
        // Pre-fill project type if coming from specific service
        const serviceSection = e.target.closest('.service-card');
        if (serviceSection) {
            const projectTypeSelect = document.getElementById('project-type');
            const serviceName = serviceSection.querySelector('h3').textContent;
            
            setTimeout(() => {
                if (serviceName.includes('NEXT.JS')) {
                    projectTypeSelect.value = 'next-js';
                } else if (serviceName.includes('AI')) {
                    projectTypeSelect.value = 'ai-chatbot';
                } else if (serviceName.includes('FULL-STACK')) {
                    projectTypeSelect.value = 'full-stack';
                } else if (serviceName.includes('UI/UX')) {
                    projectTypeSelect.value = 'ui-ux';
                }
            }, 1000);
        }
    }
    
    // Service and work card buttons
    if (buttonText.includes('GET QUOTE') || buttonText.includes('VIEW DETAILS')) {
        e.preventDefault();
        createRippleEffect(e.target, e);
        
        if (buttonText.includes('GET QUOTE')) {
            scrollToSection('#contact');
        } else {
            // For "VIEW DETAILS", show a creative modal or notification
            showCreativeNotification('🚀 DETAILED CASE STUDY COMING SOON!\nContact us to learn more about this project.', 'info');
        }
    }
    
    // Contact and pricing buttons
    if (buttonText.includes('CONTACT US')) {
        e.preventDefault();
        scrollToSection('#contact');
        createRippleEffect(e.target, e);
    }
});

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        const offsetTop = section.offsetTop - 100;
        smoothScrollTo(offsetTop, 800);
    }
}

function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(2)', opacity: 0 }
    ], {
        duration: 600,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    }).onfinish = () => ripple.remove();
}

// Active section highlighting in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Page load animations
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger hero animations with delay
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-actions, .hero-stats');
        heroElements.forEach((element, index) => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 300);
    
    // Start floating animations
    setTimeout(() => {
        const floatingCards = document.querySelectorAll('.floating-card');
        floatingCards.forEach(card => {
            card.style.animation = card.style.animation || 'float 8s ease-in-out infinite';
        });
    }, 1000);
});

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--color-teal-300) !important;
        text-shadow: 0 0 10px rgba(50, 184, 198, 0.5);
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes formPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(19, 52, 59, 0.98);
            backdrop-filter: blur(30px);
            flex-direction: column;
            padding: var(--space-32);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            border-top: 2px solid rgba(50, 184, 198, 0.3);
            box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
            background: var(--color-orange-400);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
            transform: scale(0);
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
            background: var(--color-orange-400);
        }
    }
    
    .animate-in {
        animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px) rotateX(15deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-emoji {
        font-size: 1.2em;
        animation: bounce 1s ease-out infinite;
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;

document.head.appendChild(style);

// Console easter egg for developers
console.log(`
🚀 ARUNDEV SOLUTIONS - DIGITAL WIZARDRY 🔮

Built with:
⚛️  React & Next.js
🔷  TypeScript 
🎨  Creative Design
🤖  AI Integration
⚡  Modern Performance

Want to build something amazing together?
📧 hello@arundev.solutions
💼 https://linkedin.com/in/arun-shekar-209483364/

🔥 This website showcases our creative approach to web development.
   Every animation, interaction, and detail is crafted with care.
`);