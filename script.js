/**
 * ROFLnator Studio - Minimal JavaScript for Interactivity
 * GitHub Pages compatible - No build step required
 */

(function() {
  'use strict';

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================
  function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', function() {
      const isOpen = navList.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when clicking a link
    navList.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navList.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close nav on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        navList.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const header = document.querySelector('.site-header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Focus target for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.removeAttribute('tabindex');
        }
      });
    });
  }

  // ==========================================================================
  // Contact Form Enhancement
  // ==========================================================================
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('.form-submit');
      if (submitBtn) {
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Re-enable after a delay (form will actually submit)
        setTimeout(function() {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }
    });

    // Basic client-side validation feedback
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(function(input) {
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateField(this);
        }
      });
    });

    function validateField(field) {
      const errorClass = 'error';
      const successClass = 'valid';
      
      field.classList.remove(errorClass, successClass);
      
      if (field.required && !field.value.trim()) {
        field.classList.add(errorClass);
        return false;
      }
      
      if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          field.classList.add(errorClass);
          return false;
        }
      }
      
      if (field.value.trim()) {
        field.classList.add(successClass);
      }
      
      return true;
    }
  }

  // ==========================================================================
  // Current Year in Footer Copyright
  // ==========================================================================
  function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(function(el) {
      el.textContent = currentYear;
    });
  }

  // ==========================================================================
  // Initialize All
  // ==========================================================================
  function init() {
    // Run when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initMobileNav();
        initSmoothScroll();
        initContactForm();
        updateCopyrightYear();
      });
    } else {
      initMobileNav();
      initSmoothScroll();
      initContactForm();
      updateCopyrightYear();
    }
  }

  init();

})();