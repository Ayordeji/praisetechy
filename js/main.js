/**
 * Main Application Orchestrator
 * Praise Techy - Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal');
  
  // Ajide Victor-Inspired Masked Typography & Heading Splitter
  function setupMaskedHeadings() {
    const headings = document.querySelectorAll(
      'h1:not(.no-split):not(.footer-monumental-text), h2:not(.no-split):not(.footer-monumental-text), .hero-handcrafted-headline, .section-title-wrap h2, .footer-praise-title, .faq-heading'
    );

    headings.forEach((heading) => {
      if (heading.dataset.splitDone || heading.classList.contains('footer-monumental-text')) return;
      heading.dataset.splitDone = 'true';

      function splitTextNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          if (!text.trim()) return node;
          
          const words = text.split(/(\s+)/);
          const frag = document.createDocumentFragment();

          words.forEach((word) => {
            if (!word) return;
            if (/^\s+$/.test(word)) {
              frag.appendChild(document.createTextNode(word));
            } else {
              const mask = document.createElement('span');
              mask.className = 'split-word-mask';
              
              const inner = document.createElement('span');
              inner.className = 'split-word-inner';
              inner.textContent = word;
              
              mask.appendChild(inner);
              frag.appendChild(mask);
            }
          });
          return frag;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.toLowerCase() === 'br') {
            return node;
          }
          const clone = node.cloneNode(false);
          Array.from(node.childNodes).forEach(child => {
            const processed = splitTextNode(child);
            if (processed) clone.appendChild(processed);
          });
          return clone;
        }
        return node;
      }

      const fragment = document.createDocumentFragment();
      Array.from(heading.childNodes).forEach(child => {
        const processed = splitTextNode(child);
        if (processed) fragment.appendChild(processed);
      });

      heading.innerHTML = '';
      heading.appendChild(fragment);

      // Stagger words inside this heading
      const words = heading.querySelectorAll('.split-word-inner');
      words.forEach((word, i) => {
        word.style.transitionDelay = `${(i * 0.065).toFixed(3)}s`;
      });
    });
  }

  setupMaskedHeadings();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // Entrance Observer for Headings, Cards, Subtext & Badges
    const animatedElements = document.querySelectorAll(
      'h1:not(.footer-monumental-text), h2:not(.footer-monumental-text), h3, .hero-handcrafted-headline, .section-title-wrap h2, .footer-praise-title, .about-proof-quote, .service-praise-card-title, .faq-heading, .deck-card, .service-praise-card, .skill-card-modern, .approach-card, .pricing-card, .testimonial-card, .faq-item, .contact-card, .contact-channel-card, .hero-handcrafted-subtext, .section-title-wrap p, .footer-praise-subtitle, .section-num-tag, .hero-availability-pill, .hero-actions, .hero-stats-panel'
    );

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach(el => el.classList.add('active'));
    document.querySelectorAll('h1, h2, h3, .deck-card, .service-praise-card, .skill-card-modern, .approach-card, .pricing-card, .testimonial-card, .faq-item, .contact-card').forEach(el => {
      el.classList.add('is-revealed');
      el.classList.add('active');
    });
  }

  // Trigger hero elements smoothly on initial page load
  setTimeout(() => {
    document.querySelectorAll('#hero h1, #hero h2, #hero .hero-handcrafted-headline, #hero .hero-content, #hero .hero-availability-pill, #hero .hero-handcrafted-subtext, #hero .hero-actions, #hero .hero-stats-panel, #hero .hero-showcase').forEach(el => {
      el.classList.add('is-revealed');
      el.classList.add('active');
    });
  }, 100);

  // High Performance Video Facades (Vimeo / YouTube)
  function initVideoFacades() {
    const facades = document.querySelectorAll('.video-facade');
    facades.forEach(facade => {
      const playVideo = () => {
        if (facade.classList.contains('is-loaded')) return;
        const vimeoId = facade.dataset.vimeoId;
        const youtubeId = facade.dataset.youtubeId;
        
        const iframe = document.createElement('iframe');
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('loading', 'lazy');
        
        if (vimeoId) {
          iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=0&loop=1&autopause=0&color=02A855&title=0&byline=0&portrait=0&dnt=1`;
          iframe.title = facade.getAttribute('aria-label') || 'Vimeo video player';
        } else if (youtubeId) {
          iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&rel=0`;
          iframe.title = facade.getAttribute('aria-label') || 'YouTube video player';
        }
        
        facade.appendChild(iframe);
        facade.classList.add('is-loaded');
      };

      facade.addEventListener('click', playVideo);
      facade.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playVideo();
        }
      });
    });
  }

  initVideoFacades();

  // Smooth scroll for anchor links (fallback when Lenis is not active)
  if (!window.lenis) {
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
  }
});
