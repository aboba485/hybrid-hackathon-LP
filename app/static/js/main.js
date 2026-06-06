/**
 * Hybrid Lab - Main JavaScript
 * Handles forms, smooth scrolling, and interactions
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        if (window.i18n) {
            window.i18n.initLanguageSwitcher();
        }

        initSmoothScrolling();
        initEntrepreneurForm();
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
            
            clearFormErrors(form);
            
            const errors = validateEntrepreneurForm(form);
            
            if (errors.length > 0) {
                showFormErrors(form, errors);
                return;
            }
            
            const formData = new FormData(form);
            const participationType = formData.get('participation_type') || 'entrepreneur_250';
            
            const data = {
                full_name: formData.get('full_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                company: formData.get('company'),
                project_idea: formData.get('project_idea') || null,
                participation_type: participationType,
                consent_to_contact: formData.get('consent_to_contact') === 'on',
                language: formData.get('language') || window.i18n?.getCurrentLanguage() || 'en'
            };
            
            await submitForm(form, '/api/apply/entrepreneur', data);
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
        const consent = form.querySelector('[name="consent_to_contact"]');
        
        if (!fullName.value.trim()) {
            errors.push({ 
                field: fullName, 
                message: window.i18n?.t('error_required', lang) || 'This field is required' 
            });
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            errors.push({ 
                field: email, 
                message: window.i18n?.t('error_email', lang) || 'Please enter a valid email' 
            });
        }
        
        if (!phone.value.trim()) {
            errors.push({ 
                field: phone, 
                message: window.i18n?.t('error_required', lang) || 'This field is required' 
            });
        }
        
        if (!company.value.trim()) {
            errors.push({ 
                field: company, 
                message: window.i18n?.t('error_required', lang) || 'This field is required' 
            });
        }
        
        if (!consent.checked) {
            errors.push({ 
                field: form.querySelector('.consent-error'), 
                isConsent: true,
                message: window.i18n?.t('error_consent', lang) || 'You must agree to be contacted' 
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
        form.querySelectorAll('.consent-error').forEach(el => {
            el.style.display = 'none';
        });
    }

    /**
     * Show form errors
     */
    function showFormErrors(form, errors) {
        errors.forEach(error => {
            if (error.isConsent) {
                const consentError = form.querySelector('.consent-error');
                if (consentError) {
                    consentError.style.display = 'block';
                    consentError.textContent = error.message;
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
        
        const firstError = form.querySelector('.has-error, .consent-error[style*="block"]');
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
        
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
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
                if (successMsg) {
                    const msgText = successMsg.querySelector('.message-text');
                    if (msgText) {
                        msgText.textContent = result.message;
                    }
                    successMsg.style.display = 'flex';
                }
                
                form.reset();
                
                // Re-check the default radio button
                const defaultRadio = form.querySelector('input[name="participation_type"][value="entrepreneur_250"]');
                if (defaultRadio) {
                    defaultRadio.checked = true;
                }
                
                if (successMsg) {
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                if (errorMsg) {
                    const msgText = errorMsg.querySelector('.message-text');
                    if (msgText) {
                        msgText.textContent = result.message || result.detail || 
                            window.i18n?.t('error_generic', lang) || 'Something went wrong. Please try again.';
                    }
                    errorMsg.style.display = 'flex';
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            if (errorMsg) {
                const msgText = errorMsg.querySelector('.message-text');
                if (msgText) {
                    msgText.textContent = window.i18n?.t('error_generic', lang) || 'Something went wrong. Please try again.';
                }
                errorMsg.style.display = 'flex';
            }
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }

    /**
     * Initialize scroll-triggered animations
     */
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.value-card, .step-card, .talent-item, .section-title');
        
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
                rootMargin: '0px 0px -30px 0px'
            });
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(15px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                animationObserver.observe(el);
            });
        }
    }

})();
