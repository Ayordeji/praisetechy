/**
 * Main Application Orchestrator
 * Praise Techy - Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // Entrance Observer for Headings, Cards, Subtext & Badges
    const animatedElements = document.querySelectorAll(
      'h1, h2, h3, .hero-handcrafted-headline, .section-title-wrap h2, .footer-praise-title, .about-proof-quote, .service-praise-card-title, .faq-heading, .deck-card, .service-praise-card, .skill-card-modern, .approach-card, .pricing-card, .testimonial-card, .faq-item, .contact-card, .contact-channel-card, .hero-handcrafted-subtext, .section-title-wrap p, .footer-praise-subtitle, .section-num-tag, .hero-availability-pill, .hero-actions, .hero-stats-panel'
    );

    const animationObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -25px 0px'
    });

    animatedElements.forEach(el => animationObserver.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach(el => el.classList.add('active'));
    document.querySelectorAll('h1, h2, h3, .deck-card, .service-praise-card, .skill-card-modern, .approach-card, .pricing-card, .testimonial-card, .faq-item, .contact-card').forEach(el => {
      el.classList.add('is-revealed');
      el.classList.add('active');
    });
  }

  // Ensure hero elements trigger immediately on initial page load
  setTimeout(() => {
    document.querySelectorAll('#hero h1, #hero h2, #hero .hero-handcrafted-headline, #hero .hero-content, #hero .hero-availability-pill, #hero .hero-handcrafted-subtext, #hero .hero-actions, #hero .hero-stats-panel, #hero .hero-showcase').forEach(el => {
      el.classList.add('is-revealed');
      el.classList.add('active');
    });
  }, 80);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
