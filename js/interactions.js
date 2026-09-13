/**
 * User Interactions, Theme Switcher, Navigation, Currency Toggle, FAQ & Motion
 * Ayomide / Praise Techy - Handcrafted Interactive Engine
 */

function initInteractions() {
  // 1. Lock Theme to Praise Techy Signature Emerald Green Theme
  document.documentElement.setAttribute('data-theme', 'emerald');
  localStorage.removeItem('portfolio_theme');

  // 2. Full-Width Floating Header Scroll Effect (Lumon Studio Style)
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('scrolled');
      header?.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // 3. Off-canvas Mobile Drawer Navigation
  const menuToggles = document.querySelectorAll('.menu-toggle');
  const offcanvas = document.querySelector('.offcanvas-drawer');
  const overlay = document.querySelector('.offcanvas-overlay');
  const closeBtn = document.querySelector('.offcanvas-close-btn');
  const offcanvasLinks = document.querySelectorAll('.offcanvas-nav a');

  function openOffcanvas() {
    offcanvas?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOffcanvas() {
    offcanvas?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuToggles.forEach(toggle => toggle.addEventListener('click', openOffcanvas));
  closeBtn?.addEventListener('click', closeOffcanvas);
  overlay?.addEventListener('click', closeOffcanvas);
  offcanvasLinks.forEach(link => link.addEventListener('click', closeOffcanvas));

  // 4. Active Nav Link on Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 5. Currency Switcher for Pricing
  const currencyBtns = document.querySelectorAll('.currency-btn');
  const priceElements = document.querySelectorAll('.price-amount');
  const USD_RATE = 1400; // Baseline currency conversion

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const currency = btn.getAttribute('data-currency');

      priceElements.forEach(priceEl => {
        const ngnVal = priceEl.getAttribute('data-ngn');
        if (!ngnVal) return; // For Custom quote cards

        if (currency === 'USD') {
          const usdVal = Math.round(Number(ngnVal) / USD_RATE);
          priceEl.textContent = `$${usdVal.toLocaleString()}`;
        } else {
          priceEl.textContent = `₦${Number(ngnVal).toLocaleString()}`;
        }
      });
    });
  });

  // 6. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all others for a clean single-open accordion
      faqItems.forEach(otherItem => otherItem.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 7. Hero Deck Card Interactions & Expansion Controls
  const heroDeck = document.querySelector('.hero-base-cards-wrap, .hero-deck-wrap');
  const deckCards = document.querySelectorAll('.deck-card');

  if (heroDeck) {
    heroDeck.addEventListener('mouseenter', () => {
      deckCards.forEach(card => {
        card.style.animationPlayState = 'paused';
      });
    });
    heroDeck.addEventListener('mouseleave', () => {
      deckCards.forEach(card => {
        card.style.animationPlayState = 'running';
        card.classList.remove('is-active-hover');
      });
    });

    deckCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        deckCards.forEach(c => {
          if (c !== card) c.classList.remove('is-active-hover');
        });
        card.classList.add('is-active-hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-active-hover');
      });
    });
  }

  // 8. Sticky Vertical Scroll for Services Cards (praisetechy.com style)
  const driver = document.getElementById('services-scroll-driver');
  const track = document.getElementById('services-cards-track');
  const progressIndicator = document.getElementById('services-progress-indicator');
  const activeIndexEl = document.getElementById('services-active-index');
  const totalCountEl = document.getElementById('services-total-count');
  const prevBtn = document.getElementById('services-arrow-prev');
  const nextBtn = document.getElementById('services-arrow-next');
  const serviceCards = document.querySelectorAll('.service-praise-card');

  if (driver && track && serviceCards.length > 0) {
    if (totalCountEl) {
      totalCountEl.textContent = `0${serviceCards.length}`;
    }

    function updateServicesScroll() {
      // On mobile / narrow screens, let native touch scroll handle it
      if (window.innerWidth <= 991) {
        track.style.transform = '';
        return;
      }

      const rect = driver.getBoundingClientRect();
      const driverHeight = driver.offsetHeight;
      const viewportHeight = window.innerHeight;
      const stickyOffset = 88;
      const totalScroll = Math.max(1, driverHeight - viewportHeight);
      const currentScroll = Math.max(0, stickyOffset - rect.top);

      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth + 96);
      
      track.style.transform = `translateX(-${progress * maxTranslate}px)`;

      if (progressIndicator) {
        progressIndicator.style.width = `${Math.max(15, progress * 100)}%`;
      }

      if (activeIndexEl) {
        const cardIndex = Math.min(serviceCards.length, Math.max(1, Math.floor(progress * serviceCards.length) + 1));
        activeIndexEl.textContent = `0${cardIndex}`;
      }
    }

    window.addEventListener('scroll', updateServicesScroll, { passive: true });
    window.addEventListener('resize', updateServicesScroll);
    updateServicesScroll();

    // Arrow Controls
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const rect = driver.getBoundingClientRect();
        const driverHeight = driver.offsetHeight;
        const viewportHeight = window.innerHeight;
        const stickyOffset = 88;
        const totalScroll = Math.max(1, driverHeight - viewportHeight);
        const currentScroll = Math.max(0, stickyOffset - rect.top);
        const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
        const currentCard = Math.floor(progress * (serviceCards.length - 1));
        const nextCard = Math.min(serviceCards.length - 1, currentCard + 1);
        const targetScroll = window.scrollY + rect.top - stickyOffset + (nextCard / (serviceCards.length - 1)) * totalScroll;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const rect = driver.getBoundingClientRect();
        const driverHeight = driver.offsetHeight;
        const viewportHeight = window.innerHeight;
        const stickyOffset = 88;
        const totalScroll = Math.max(1, driverHeight - viewportHeight);
        const currentScroll = Math.max(0, stickyOffset - rect.top);
        const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
        const currentCard = Math.ceil(progress * (serviceCards.length - 1));
        const prevCard = Math.max(0, currentCard - 1);
        const targetScroll = window.scrollY + rect.top - stickyOffset + (prevCard / (serviceCards.length - 1)) * totalScroll;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', initInteractions);

