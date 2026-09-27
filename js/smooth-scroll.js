/**
 * GSAP + Lenis Smooth Momentum Scrolling Engine
 * Ayomide / Praise Techy - Ultra-Smooth Butter Scroll Experience
 */

(function () {
  'use strict';

  function initSmoothScroll() {
    // Graceful fallback if libraries aren't loaded
    if (typeof Lenis === 'undefined' || typeof gsap === 'undefined') {
      return;
    }

    // Register ScrollTrigger with GSAP
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
      infinite: false,
    });

    // Expose globally
    window.lenis = lenis;

    // Sync Lenis scroll events with GSAP ScrollTrigger & Site Header Shrink
    let lastLenisScroll = window.scrollY;
    lenis.on('scroll', (e) => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.update();
      }
      const scrollPos = (e && typeof e.scroll === 'number') ? e.scroll : window.scrollY;
      const header = document.querySelector('.site-header');
      if (scrollPos > 30) {
        header?.classList.add('scrolled');
        header?.classList.add('is-scrolled');
        if (Math.abs(scrollPos - lastLenisScroll) > 6 && header?.classList.contains('mobile-expanded')) {
          header?.classList.remove('mobile-expanded');
        }
      } else {
        header?.classList.remove('scrolled');
        header?.classList.remove('is-scrolled');
        header?.classList.remove('mobile-expanded');
      }
      lastLenisScroll = scrollPos;
    });

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Intercept in-page hash links for butter-smooth scrolling with header offset
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        if (href === '#top' || href === '#hero') {
          e.preventDefault();
          lenis.scrollTo(0, {
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, {
            offset: -80, // Sticky header compensation
            duration: 1.35,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();
