(() => {
  // Analytics setup:
  // 1) Replace with your GA4 Measurement ID from Google Analytics.
  // 2) Keep this script at the end of <body> for non-blocking performance or load with defer.
  const GA_MEASUREMENT_ID = 'G-3REVB3EKMP';
  const GA_STREAM_ID = '13629142928'; // GA4 web stream numeric ID (for records; gtag config uses measurement ID).
  const hasRealGAId = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.includes('XXXX');
  const body = document.body;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const loadGA = () => {
    if (!hasRealGAId) return;
    // GA4 loader (async by default for better Core Web Vitals behavior).
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: true,
      send_page_view: true
    });
  };

  const track = (eventName, params = {}) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params);
  };

  loadGA();





  document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
    el.addEventListener('click', () => {
      track('click_call', { method: 'phone_link' });
    });
  });

  document.querySelectorAll('a[href*="wa.me"]').forEach((el) => {
    el.addEventListener('click', () => {
      track('click_whatsapp', { method: 'whatsapp_link' });
    });
  });

  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (event) => {
      track('generate_lead', { source: 'homepage_form', value: 1 });
    });
  }

  const whatsappLeadLink = document.getElementById('whatsapp-lead-link');
  if (leadForm && whatsappLeadLink) {
    const readValue = (fieldName) => {
      const field = leadForm.querySelector(`[name="${fieldName}"]`);
      return field && typeof field.value === 'string' ? field.value.trim() : '';
    };

    const buildWhatsAppMessage = () => {
      const name = readValue('name') || 'Business Owner';
      const phone = readValue('phone') || 'Not provided';
      const businessName = readValue('business_name') || 'Not provided';
      const city = readValue('city') || 'Not selected';
      return [
        'Hello Alif Growth Media team,',
        '',
        'I want a Free Growth Audit for my business.',
        '',
        `Name: ${name}`,
        `Business: ${businessName}`,
        `City: ${city}`,
        `Phone: ${phone}`,
        '',
        'Please share the next steps. Thank you.'
      ].join('\n');
    };

    const updateWhatsAppLink = () => {
      const message = buildWhatsAppMessage();
      whatsappLeadLink.href = `https://wa.me/919908597337?text=${encodeURIComponent(message)}`;
    };

    ['input', 'change'].forEach((eventName) => {
      leadForm.addEventListener(eventName, updateWhatsAppLink);
    });

    whatsappLeadLink.addEventListener('click', updateWhatsAppLink);
    updateWhatsAppLink();
  }

  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]:not(.nav-cta)'));
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  const mobileNavMedia = window.matchMedia('(max-width: 680px)');
  const floatingWa = document.querySelector('.floating-wa');
  const waModal = document.getElementById('wa-lead-modal');
  const waModalClose = document.getElementById('wa-modal-close');
  const waLeadForm = document.getElementById('wa-lead-form');
  const waBusinessName = document.getElementById('wa-business-name');
  const waCity = document.getElementById('wa-city');
  const waService = document.getElementById('wa-service');
  const waFormError = document.getElementById('wa-form-error');

  const prefillWaModalFromLeadForm = () => {
    if (!leadForm || !waBusinessName || !waCity) return;
    const leadBusiness = leadForm.querySelector('[name="business_name"]');
    const leadCity = leadForm.querySelector('[name="city"]');

    if (leadBusiness && !waBusinessName.value.trim()) {
      waBusinessName.value = (leadBusiness.value || '').trim();
    }

    if (leadCity && !waCity.value.trim() && leadCity.value) {
      waCity.value = leadCity.value.trim();
    }
  };

  const openWaModal = () => {
    if (!waModal) return;
    prefillWaModalFromLeadForm();
    waModal.classList.add('open');
    waModal.setAttribute('aria-hidden', 'false');
    body.classList.add('wa-modal-open');
    if (waBusinessName) waBusinessName.focus();
  };

  const closeWaModal = () => {
    if (!waModal) return;
    waModal.classList.remove('open');
    waModal.setAttribute('aria-hidden', 'true');
    body.classList.remove('wa-modal-open');
  };

  if (floatingWa && waModal && waLeadForm && waBusinessName && waService && waFormError) {
    floatingWa.addEventListener('click', (event) => {
      event.preventDefault();
      openWaModal();
    });

    if (waModalClose) {
      waModalClose.addEventListener('click', closeWaModal);
    }

    waModal.addEventListener('click', (event) => {
      if (event.target === waModal) closeWaModal();
    });

    waLeadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const businessName = waBusinessName.value.trim();
      const city = waCity ? waCity.value.trim() : '';
      const service = waService.value.trim();

      if (!businessName) {
        waFormError.textContent = 'Please enter your business name.';
        waBusinessName.focus();
        return;
      }

      waFormError.textContent = '';
      const message = [
        'Hello Alif Growth Media team,',
        '',
        'I want a Free Growth Audit for my business.',
        '',
        `Business: ${businessName}`,
        `City: ${city || 'Not specified'}`,
        `Service Needed: ${service}`,
        '',
        'Please share the next steps.'
      ].join('\n');

      const whatsappURL = `https://wa.me/919908597337?text=${encodeURIComponent(message)}`;
      track('generate_lead', {
        event_category: 'whatsapp',
        event_label: 'audit_request'
      });
      closeWaModal();
      window.open(whatsappURL, '_blank', 'noopener');
    });
  }

  const closeMobileNav = () => {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    navToggle.textContent = 'Menu';
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      navToggle.textContent = isOpen ? 'Close' : 'Menu';
    });

    document.addEventListener('click', (event) => {
      if (!mobileNavMedia.matches) return;
      const clickedInsideNav = navMenu.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);
      if (!clickedInsideNav && !clickedToggle) closeMobileNav();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && waModal && waModal.classList.contains('open')) {
        closeWaModal();
      }
      if (event.key === 'Escape') closeMobileNav();
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileNavMedia.matches) closeMobileNav();
      });
    });

    mobileNavMedia.addEventListener('change', (event) => {
      if (!event.matches) closeMobileNav();
    });
  }

  const sectionMap = navLinks
    .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter((item) => item.section);

  if (!sectionMap.length || !('IntersectionObserver' in window)) return;

  const setActive = (activeSection) => {
    sectionMap.forEach(({ link, section }) => {
      const isActive = section === activeSection;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) {
        setActive(visible[0].target);
      }
    },
    {
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0.2, 0.35, 0.5, 0.65]
    }
  );

  sectionMap.forEach(({ section }) => observer.observe(section));
  setActive(sectionMap[0].section);
})();
