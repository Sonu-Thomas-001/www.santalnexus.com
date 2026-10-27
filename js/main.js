/**
 * SANTAL NEXUS — Corporate Website Client Script
 * Brand: Fresh Produce Trading & Global Trade Enquiries
 * Contact Person: Bala Chellapandiyan (+91 99946 40141)
 * Location: T. Vadiapatti, Madurai, Tamil Nadu, India
 */

(function () {
  'use strict';

  // Config & Constants
  const WHATSAPP_PHONE_DIGITS = '919994640141';
  const PRIMARY_EMAIL = 'santalnexus@gmail.com';

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNavigation();
    initScrollSpy();
    initProductEnquiryShortcuts();
    initContactForm();
    initScrollReveal();
    initDynamicYear();
    initBackToTop();
    initExportRfqForm();
    initContactPageForm();
    initFaqAccordion();
    initPreloader();
    initPageTransitions();
  });

  /**
   * 1. Header scroll styling
   */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 2. Accessible Mobile Navigation
   */
  function initMobileNavigation() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = mainNav ? mainNav.querySelectorAll('.nav-link') : [];

    if (!toggleBtn || !mainNav) return;

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      mainNav.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on navigation link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('menu-open')) {
          closeMenu();
        }
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('menu-open')) {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  /**
   * 3. Navigation ScrollSpy & Active Link Indicator
   */
  function initScrollSpy() {
    // On dedicated pages (e.g. about.html, products.html, export-services.html, contact.html, team.html), retain dedicated active link state
    if (document.body.classList.contains('page-about') || document.body.classList.contains('page-products') || document.body.classList.contains('page-export') || document.body.classList.contains('page-contact') || document.body.classList.contains('page-team')) return;

    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  /**
   * 4. Product Card & Global Reach Enquiry Shortcuts
   */
  function initProductEnquiryShortcuts() {
    const actionButtons = document.querySelectorAll('[data-enquiry-category]');
    const enquiryTypeSelect = document.getElementById('enquiryType');
    const requirementsTextarea = document.getElementById('requirements');
    const contactSection = document.getElementById('contact');

    if (!actionButtons.length) return;

    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const category = button.getAttribute('data-enquiry-category');
        const defaultMessage = button.getAttribute('data-enquiry-msg') || '';

        if (enquiryTypeSelect && category) {
          // Select matching option if present
          for (let i = 0; i < enquiryTypeSelect.options.length; i++) {
            if (enquiryTypeSelect.options[i].value.toLowerCase() === category.toLowerCase()) {
              enquiryTypeSelect.selectedIndex = i;
              break;
            }
          }
        }

        if (requirementsTextarea && defaultMessage) {
          requirementsTextarea.value = defaultMessage;
        }

        if (contactSection) {
          // Smooth scroll to contact
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (requirementsTextarea) {
              requirementsTextarea.focus();
            }
          }, 600);
        }
      });
    });
  }

  /**
   * 5. Contact Form Validation and WhatsApp Workflow
   */
  function initContactForm() {
    const form = document.getElementById('enquiryForm');
    const statusAlert = document.getElementById('formStatusAlert');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset previous error states
      clearErrors(form);

      const fullName = (document.getElementById('fullName')?.value || '').trim();
      const businessEmail = (document.getElementById('businessEmail')?.value || '').trim();
      const phone = (document.getElementById('phone')?.value || '').trim();
      const enquiryType = (document.getElementById('enquiryType')?.value || '').trim();
      const destination = (document.getElementById('destination')?.value || '').trim();
      const quantity = (document.getElementById('quantity')?.value || '').trim();
      const requirements = (document.getElementById('requirements')?.value || '').trim();

      let hasErrors = false;
      let firstErrorField = null;

      // Validate Full Name
      if (!fullName) {
        showFieldError('fullName', 'Please enter your full name');
        hasErrors = true;
        if (!firstErrorField) firstErrorField = document.getElementById('fullName');
      }

      // Validate Business Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!businessEmail) {
        showFieldError('businessEmail', 'Please enter your business email address');
        hasErrors = true;
        if (!firstErrorField) firstErrorField = document.getElementById('businessEmail');
      } else if (!emailRegex.test(businessEmail)) {
        showFieldError('businessEmail', 'Please enter a valid email address');
        hasErrors = true;
        if (!firstErrorField) firstErrorField = document.getElementById('businessEmail');
      }

      // Validate Enquiry Type
      if (!enquiryType) {
        showFieldError('enquiryType', 'Please select an enquiry category');
        hasErrors = true;
        if (!firstErrorField) firstErrorField = document.getElementById('enquiryType');
      }

      // Validate Requirements
      if (!requirements) {
        showFieldError('requirements', 'Please provide details about the produce or requirements');
        hasErrors = true;
        if (!firstErrorField) firstErrorField = document.getElementById('requirements');
      }

      if (hasErrors) {
        if (firstErrorField) firstErrorField.focus();
        return;
      }

      // Format WhatsApp Business Message
      const messageLines = [
        `*New Business Enquiry — Santal Nexus*`,
        `────────────────────`,
        `*Name:* ${fullName}`,
        `*Email:* ${businessEmail}`,
        `*Phone:* ${phone || 'Not provided'}`,
        `*Category:* ${enquiryType}`,
        `*Destination:* ${destination || 'Domestic / Open to discussion'}`,
        `*Quantity:* ${quantity || 'Flexible / To be discussed'}`,
        `────────────────────`,
        `*Requirements:*`,
        `${requirements}`,
        `────────────────────`,
        `_Source: santalnexus.com web enquiry_`
      ];

      const whatsappText = messageLines.join('\n');
      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(whatsappText)}`;

      // Generate mailto fallback URL
      const emailSubject = encodeURIComponent(`Produce Enquiry: ${enquiryType} - ${fullName}`);
      const emailBody = encodeURIComponent(messageLines.join('\n'));
      const mailtoUrl = `mailto:${PRIMARY_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Update Form Feedback UI
      if (statusAlert) {
        statusAlert.className = 'form-status-alert info';
        statusAlert.innerHTML = `
          <strong>WhatsApp is opening in a new tab!</strong><br>
          Your enquiry has been formatted and loaded. Please review and click <em>Send</em> in WhatsApp to reach <strong>Bala Chellapandiyan</strong> directly.<br><br>
          <span style="font-size: 0.85rem; color: #333;">
            Prefer email instead? 
            <a href="${mailtoUrl}" style="color: #0D47A1; font-weight: 600; text-decoration: underline;">Click here to send this enquiry via email to ${PRIMARY_EMAIL}</a>.
          </span>
        `;
        statusAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  function showFieldError(fieldId, errorMsg) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const parent = field.closest('.form-group');
    if (!parent) return;

    parent.classList.add('has-error');
    let errorSpan = parent.querySelector('.field-error-msg');
    if (!errorSpan) {
      errorSpan = document.createElement('span');
      errorSpan.className = 'field-error-msg';
      parent.appendChild(errorSpan);
    }
    errorSpan.textContent = errorMsg;
  }

  function clearErrors(form) {
    const errorGroups = form.querySelectorAll('.form-group.has-error');
    errorGroups.forEach(group => group.classList.remove('has-error'));
    const statusAlert = document.getElementById('formStatusAlert');
    if (statusAlert) {
      statusAlert.className = 'form-status-alert';
      statusAlert.innerHTML = '';
    }
  }

  /**
   * 6. Scroll-Triggered Animation System for Sections and Elements
   */
  function initScrollReveal() {
    // Respect user's motion preference or lack of IntersectionObserver
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // 1. Auto-discover and enhance grid containers with staggered cascade delays
    const gridSelectors = [
      '.products-grid',
      '.services-grid',
      '.team-grid',
      '.why-us-grid',
      '.values-grid',
      '.capability-grid',
      '.product-assurance-strip',
      '.team-capability-strip',
      '.desks-grid',
      '.dept-cards-grid',
      '.culture-grid',
      '.corridor-cards-grid',
      '.compliance-grid',
      '.terms-grid',
      '.why-export-grid',
      '.export-produce-grid',
      '.faq-accordion-list',
      '.contact-items-stack',
      '.footer-grid'
    ];

    gridSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(container => {
        const children = Array.from(container.children);
        children.forEach((child, idx) => {
          if (!child.classList.contains('reveal-on-scroll')) {
            child.classList.add('reveal-on-scroll');
          }
          // Set staggered delay: 0s, 0.1s, 0.2s, 0.3s...
          const delay = (idx % 4) * 0.12;
          child.style.setProperty('--reveal-delay', `${delay.toFixed(2)}s`);
        });
      });
    });

    // 2. Auto-discover two-column split sections with directional slide-ins
    const splitSelectors = [
      { container: '.contact-layout-grid', left: '.contact-info-panel', right: '.contact-form-box' },
      { container: '.map-corridor-grid', left: '.map-embed-frame', right: '.corridor-info-card' },
      { container: '.story-grid', left: '.story-grid-col:first-child', right: '.story-grid-col:last-child' },
      { container: '.why-grid', left: '.why-grid-col:first-child', right: '.why-grid-col:last-child' },
      { container: '.about-split-grid', left: '.about-split-col:first-child', right: '.about-split-col:last-child' }
    ];

    splitSelectors.forEach(({ container, left, right }) => {
      document.querySelectorAll(container).forEach(parent => {
        const leftEl = parent.querySelector(left);
        const rightEl = parent.querySelector(right);
        if (leftEl) {
          leftEl.classList.add('reveal-on-scroll', 'reveal-fade-left');
        }
        if (rightEl) {
          rightEl.classList.add('reveal-on-scroll', 'reveal-fade-right');
          rightEl.style.setProperty('--reveal-delay', '0.12s');
        }
      });
    });

    // 3. Auto-discover section headers and intros
    document.querySelectorAll('.section-intro-center, .section-header-wrap').forEach(el => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
      }
    });

    // 4. Auto-discover full banners and quotes for zoom reveal
    document.querySelectorAll('.global-partner-banner .banner-content, .contact-cta-box, .careers-banner-box, .founder-quote-box').forEach(el => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll', 'reveal-zoom');
      }
    });

    // 5. Gather all reveal elements and activate observer
    const revealElements = document.querySelectorAll('.reveal-on-scroll, [data-reveal]');
    if (!revealElements.length) return;

    // Enable animation CSS only once elements are discovered
    document.documentElement.classList.add('js-animations-active');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.06,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      // Check if element is already in the viewport upon load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        requestAnimationFrame(() => {
          el.classList.add('is-revealed');
        });
      } else {
        observer.observe(el);
      }
    });
  }

  /**
   * 7. Current Year in Footer
   */
  function initDynamicYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * 8. Smooth Back to Top (Floating Button & Footer Button)
   */
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const floatingScrollTop = document.getElementById('floatingScrollTop');

    const scrollToTop = (e) => {
      if (e) e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', scrollToTop);
    }

    if (floatingScrollTop) {
      floatingScrollTop.addEventListener('click', scrollToTop);

      let ticking = false;
      const checkScrollVisibility = () => {
        // Show button after user scrolls past 350px
        if (window.scrollY > 350) {
          floatingScrollTop.classList.add('is-visible');
        } else {
          floatingScrollTop.classList.remove('is-visible');
        }
        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(checkScrollVisibility);
          ticking = true;
        }
      }, { passive: true });

      // Run on initial page load
      checkScrollVisibility();
    }
  }

  /**
   * 9. Export RFQ Form Handler with WhatsApp Builder
   */
  function initExportRfqForm() {
    const rfqForm = document.getElementById('exportRfqForm');
    const rfqWhatsAppBtn = document.getElementById('rfqWhatsAppBtn');
    if (!rfqForm) return;

    function buildRfqMessage() {
      const buyerName = (document.getElementById('rfqBuyerName')?.value || '').trim();
      const company = (document.getElementById('rfqCompany')?.value || '').trim();
      const email = (document.getElementById('rfqEmail')?.value || '').trim();
      const phone = (document.getElementById('rfqPhone')?.value || '').trim();
      const produce = (document.getElementById('rfqProduce')?.value || '').trim();
      const volume = (document.getElementById('rfqVolume')?.value || '').trim();
      const destinationPort = (document.getElementById('rfqDestinationPort')?.value || '').trim();
      const incoterm = (document.getElementById('rfqIncoterm')?.value || '').trim();
      const notes = (document.getElementById('rfqNotes')?.value || '').trim();

      const lines = [
        '*Export RFQ / Price Quotation Request — Santal Nexus*',
        '────────────────────',
        `*Buyer:* ${buyerName || 'Prospective Importer'}`,
        `*Company:* ${company || 'Not specified'}`,
        `*Email:* ${email || 'Not specified'}`,
        `*Phone / WhatsApp:* ${phone || 'Not specified'}`,
        '────────────────────',
        `*Produce of Interest:* ${produce || 'Fresh Produce Assortment'}`,
        `*Volume / Frequency:* ${volume || 'To be discussed'}`,
        `*Destination Port:* ${destinationPort || 'Direct Port Delivery'}`,
        `*Incoterm Preference:* ${incoterm || 'FOB / CIF'}`,
        '────────────────────',
        `*Packaging & Specifications:*`,
        `${notes || 'Standard export packaging and current season quotation requested.'}`,
        '────────────────────',
        'Sent via santalnexus.com/export-services.html'
      ];

      return lines.join('\n');
    }

    if (rfqWhatsAppBtn) {
      rfqWhatsAppBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const buyerName = (document.getElementById('rfqBuyerName')?.value || '').trim();
        const produce = (document.getElementById('rfqProduce')?.value || '').trim();

        if (!buyerName) {
          alert('Please enter your Name or Company before sending RFQ via WhatsApp.');
          document.getElementById('rfqBuyerName')?.focus();
          return;
        }

        const msg = buildRfqMessage();
        const waUrl = `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      });
    }

    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = buildRfqMessage();
      const mailtoUrl = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent('Export RFQ — ' + ((document.getElementById('rfqProduce')?.value || 'Fresh Produce') + ' / ' + (document.getElementById('rfqCompany')?.value || 'Trade Enquiry')))}&body=${encodeURIComponent(msg)}`;
      window.location.href = mailtoUrl;
    });
  }

  /**
   * 10. Dedicated Contact Page Form Handler (contact.html)
   */
  function initContactPageForm() {
    const form = document.getElementById('contactPageForm');
    const alertBox = document.getElementById('contactPageAlert');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const phoneInput = document.getElementById('contactPhone');
      const categoryInput = document.getElementById('contactCategory');
      const messageInput = document.getElementById('contactMessage');

      const name = (nameInput?.value || '').trim();
      const email = (emailInput?.value || '').trim();
      const phone = (phoneInput?.value || '').trim();
      const category = (categoryInput?.value || 'General Inquiry').trim();
      const message = (messageInput?.value || '').trim();

      // Basic validation
      if (!name) {
        alert('Please enter your name.');
        nameInput?.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput?.focus();
        return;
      }

      if (!message) {
        alert('Please enter your message.');
        messageInput?.focus();
        return;
      }

      const lines = [
        '*New Message — Santal Nexus Contact Desk*',
        '────────────────────',
        `*Name:* ${name}`,
        `*Email:* ${email}`,
        `*Phone:* ${phone || 'Not provided'}`,
        `*Inquiry Type:* ${category}`,
        '────────────────────',
        `*Message:*`,
        `${message}`,
        '────────────────────',
        '_Sent via santalnexus.com/contact.html_'
      ];

      const fullMessage = lines.join('\n');
      const waUrl = `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(fullMessage)}`;
      const mailtoUrl = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(`Website Contact: ${category} - ${name}`)}&body=${encodeURIComponent(fullMessage)}`;

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Show alert box
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.className = 'form-status-alert info';
        alertBox.innerHTML = `
          <strong>WhatsApp is opening with your formatted message!</strong><br>
          Click <em>Send</em> in WhatsApp to connect with <strong>Bala Chellapandiyan</strong> directly.<br><br>
          <span style="font-size: 0.88rem; color: #2D3830;">
            Prefer sending via Email? <a href="${mailtoUrl}" style="color: #0D47A1; font-weight: 700; text-decoration: underline;">Click here to send directly to ${PRIMARY_EMAIL}</a>
          </span>
        `;
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /**
   * 11. FAQ Accordion for Contact Page
   */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-card-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('is-open');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /**
   * 12. Site Preloader
   */
  function initPreloader() {
    const preloader = document.getElementById('sitePreloader');
    if (!preloader) return;

    const hidePreloader = () => {
      if (preloader.classList.contains('preloader-hidden')) return;
      preloader.classList.add('preloader-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    };

    // Hide once assets finish loading
    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 350);
    } else {
      window.addEventListener('load', () => {
        setTimeout(hidePreloader, 350);
      });
    }

    // Safety timeout in case any external font/resource hangs
    setTimeout(hidePreloader, 1800);
  }

  /**
   * 13. Smooth Page Switching Transitions
   */
  function initPageTransitions() {
    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Handle bfcache restoration (back/forward browser buttons)
    window.addEventListener('pageshow', (event) => {
      document.body.classList.remove('is-page-transitioning');
      const preloader = document.getElementById('sitePreloader');
      if (preloader) {
        preloader.classList.add('preloader-hidden');
      }
    });

    document.addEventListener('click', (e) => {
      // Find closest anchor tag
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Skip in-page anchors, external protocols, and new-tab links
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        link.target === '_blank' ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // Check if it's an internal page link (e.g. index.html, about.html, etc.)
      const isInternal = !href.includes('://') || href.startsWith(window.location.origin);
      if (!isInternal) return;

      // Extract path to avoid re-transitioning to the exact same current page
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const targetPath = href.split('#')[0].split('?')[0].split('/').pop() || 'index.html';

      if (currentPath === targetPath && href.includes('#')) {
        // Same page anchor link - let smooth scroll handle it
        return;
      }

      if (currentPath === targetPath && !href.includes('#')) {
        // Same page reload link
        return;
      }

      // Perform smooth transition
      e.preventDefault();
      document.body.classList.add('is-page-transitioning');

      setTimeout(() => {
        window.location.href = href;
      }, 260);
    });
  }
})();

