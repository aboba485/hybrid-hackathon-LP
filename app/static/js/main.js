/**
 * Hybrid Hackathon - Main JavaScript
 * Handles forms, smooth scrolling, animations, and interactions
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        // Initialize language switcher first
        if (window.i18n) {
            window.i18n.initLanguageSwitcher();
        }

        // Initialize all components
        initSmoothScrolling();
        initEntrepreneurForm();
        initStudentForm();
        initSponsorToggle();
        initMobileCTABar();
        initAnimations();
    }

    /**
     * Smooth scrolling for anchor links
     */
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 20;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Entrepreneur application form handling
     */
    function initEntrepreneurForm() {
        const form = document.getElementById('entrepreneur-application-form');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearFormErrors(form);
            
            // Validate form
            const errors = validateEntrepreneurForm(form);
            
            if (errors.length > 0) {
                showFormErrors(form, errors);
                return;
            }
            
            // Prepare data
            const formData = new FormData(form);
            const data = {
                full_name: formData.get('full_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                company: formData.get('company'),
                project_idea: formData.get('project_idea') || null,
                wants_to_sponsor: formData.get('wants_to_sponsor') === 'on',
                sponsor_amount: formData.get('sponsor_amount') ? parseFloat(formData.get('sponsor_amount')) : null,
                language: formData.get('language') || window.i18n?.getCurrentLanguage() || 'en'
            };
            
            // Submit form
            await submitForm(form, '/api/apply/entrepreneur', data);
        });
    }

    /**
     * Student application form handling
     */
    function initStudentForm() {
        const form = document.getElementById('student-application-form');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearFormErrors(form);
            
            // Validate form
            const errors = validateStudentForm(form);
            
            if (errors.length > 0) {
                showFormErrors(form, errors);
                return;
            }
            
            // Prepare data
            const formData = new FormData(form);
            const strengths = formData.getAll('strengths');
            
            const data = {
                full_name: formData.get('full_name'),
                age_grade: formData.get('age_grade'),
                school: formData.get('school'),
                email: formData.get('email'),
                strengths: strengths,
                background: formData.get('background') || null,
                language: formData.get('language') || window.i18n?.getCurrentLanguage() || 'en'
            };
            
            // Submit form
            await submitForm(form, '/api/apply/student', data);
        });
    }

    /**
     * Validate entrepreneur form
     */
    function validateEntrepreneurForm(form) {
        const errors = [];
        const lang = window.i18n?.getCurrentLanguage() || 'en';
        
        const fullName = form.querySelector('[name="full_name"]');
        const email = form.querySelector('[name="email"]');
        const phone = form.querySelector('[name="phone"]');
        const company = form.querySelector('[name="company"]');
        
        if (!fullName.value.trim()) {
            errors.push({ field: fullName, message: window.i18n?.t('error_required', lang) || 'This field is required' });
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            errors.push({ field: email, message: window.i18n?.t('error_email', lang) || 'Please enter a valid email' });
        }
        
        if (!phone.value.trim()) {
            errors.push({ field: phone, message: window.i18n?.t('error_required', lang) || 'This field is required' });
        }
        
        if (!company.value.trim()) {
            errors.push({ field: company, message: window.i18n?.t('error_required', lang) || 'This field is required' });
        }
        
        return errors;
    }

    /**
     * Validate student form
     */
    function validateStudentForm(form) {
        const errors = [];
        const lang = window.i18n?.getCurrentLanguage() || 'en';
        
        const fullName = form.querySelector('[name="full_name"]');
        const ageGrade = form.querySelector('[name="age_grade"]');
        const school = form.querySelector('[name="school"]');
        const email = form.querySelector('[name="email"]');
        const strengthsChecked = form.querySelectorAll('[name="strengths"]:checked');
        
        if (!fullName.value.trim()) {
            errors.push({ field: fullName, message: window.i18n?.t('error_required', lang) || 'This field is required' });
        }
        
        if (!ageGrade.value.trim()) {
            errors.push({ field: ageGrade, message: window.i18n?.t('error_required', lang) || 'This field is required' });
        }
        
        if (!school.value.trim()) {
            errors.push({ field: school, message: window.i18n?.t('error_required', lang) || 'This field is required' });
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            errors.push({ field: email, message: window.i18n?.t('error_email', lang) || 'Please enter a valid email' });
        }
        
        if (strengthsChecked.length === 0) {
            errors.push({ 
                field: form.querySelector('.strengths-error'), 
                isStrengths: true,
                message: window.i18n?.t('error_strengths', lang) || 'Please select at least one strength' 
            });
        }
        
        return errors;
    }

    /**
     * Email validation
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Clear form errors
     */
    function clearFormErrors(form) {
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('has-error');
        });
        form.querySelectorAll('.strengths-error').forEach(el => {
            el.style.display = 'none';
        });
    }

    /**
     * Show form errors
     */
    function showFormErrors(form, errors) {
        errors.forEach(error => {
            if (error.isStrengths) {
                const strengthsError = form.querySelector('.strengths-error');
                if (strengthsError) {
                    strengthsError.style.display = 'block';
                    strengthsError.textContent = error.message;
                }
            } else if (error.field) {
                const formGroup = error.field.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.add('has-error');
                    const errorEl = formGroup.querySelector('.error-message');
                    if (errorEl) {
                        errorEl.textContent = error.message;
                    }
                }
            }
        });
        
        // Scroll to first error
        const firstError = form.querySelector('.has-error, .strengths-error[style*="block"]');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    /**
     * Submit form via fetch
     */
    async function submitForm(form, endpoint, data) {
        const submitBtn = form.querySelector('.btn-submit');
        const successMsg = form.querySelector('.success-message');
        const errorMsg = form.querySelector('.error-message-box');
        const lang = window.i18n?.getCurrentLanguage() || 'en';
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Hide messages
        if (successMsg) successMsg.style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';
        
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                // Show success message
                if (successMsg) {
                    const msgText = successMsg.querySelector('.message-text');
                    if (msgText) {
                        msgText.textContent = result.message;
                    }
                    successMsg.style.display = 'flex';
                }
                
                // Reset form
                form.reset();
                
                // Reset sponsor amount visibility
                const sponsorWrapper = document.getElementById('sponsor-amount-wrapper');
                if (sponsorWrapper) {
                    sponsorWrapper.style.display = 'none';
                }
                
                // Scroll to success message
                if (successMsg) {
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                // Show error message
                if (errorMsg) {
                    const msgText = errorMsg.querySelector('.message-text');
                    if (msgText) {
                        msgText.textContent = result.message || result.detail || window.i18n?.t('error_generic', lang) || 'Something went wrong. Please try again.';
                    }
                    errorMsg.style.display = 'flex';
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Show error message
            if (errorMsg) {
                const msgText = errorMsg.querySelector('.message-text');
                if (msgText) {
                    msgText.textContent = window.i18n?.t('error_generic', lang) || 'Something went wrong. Please try again.';
                }
                errorMsg.style.display = 'flex';
            }
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }

    /**
     * Toggle sponsor amount field visibility
     */
    function initSponsorToggle() {
        const sponsorCheckbox = document.getElementById('ent-sponsor');
        const sponsorWrapper = document.getElementById('sponsor-amount-wrapper');
        
        if (sponsorCheckbox && sponsorWrapper) {
            sponsorCheckbox.addEventListener('change', function() {
                sponsorWrapper.style.display = this.checked ? 'flex' : 'none';
                
                if (!this.checked) {
                    const amountInput = document.getElementById('ent-sponsor-amount');
                    if (amountInput) {
                        amountInput.value = '';
                    }
                }
            });
        }
    }

    /**
     * Mobile CTA bar behavior
     */
    function initMobileCTABar() {
        const mobileCTA = document.getElementById('mobile-cta');
        const hero = document.querySelector('.hero');
        
        if (!mobileCTA || !hero) return;
        
        // Show/hide mobile CTA based on scroll position
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mobileCTA.style.transform = 'translateY(100%)';
                } else {
                    mobileCTA.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(hero);
        
        // Add transition for smooth show/hide
        mobileCTA.style.transition = 'transform 0.3s ease';
    }

    /**
     * Initialize scroll-triggered animations
     */
    function initAnimations() {
        // Animate elements when they come into view
        const animatedElements = document.querySelectorAll('.glass-card, .section-title, .section-subtitle');
        
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                animationObserver.observe(el);
            });
        }
        
        // Animate prize scale bars on scroll
        const prizeScale = document.querySelector('.prize-scale');
        if (prizeScale) {
            const scaleObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.bar-fill');
                        bars.forEach((bar, index) => {
                            setTimeout(() => {
                                bar.style.width = bar.parentElement.style.getPropertyValue('--bar-width');
                            }, index * 100);
                        });
                        scaleObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            // Initially set bar widths to 0
            prizeScale.querySelectorAll('.bar-fill').forEach(bar => {
                bar.style.width = '0';
            });
            
            scaleObserver.observe(prizeScale);
        }
    }

    // Check for reduced motion preference
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

})();
