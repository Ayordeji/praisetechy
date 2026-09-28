/**
 * Universal Site Components Controller
 * Manages reusable, synchronized Testimonials and FAQ components across Praise Techy website.
 * Editing data here instantly updates all occurrences across all pages.
 */

const SITE_TESTIMONIALS_DATA = [
  {
    id: 'dr-wandji-brigitte',
    name: 'Dr Wandji Brigitte',
    role: 'Client Referral',
    source: 'Client referral',
    avatar: 'W',
    rating: 5,
    quote: "Hey Ayo, Thank you so very much. It has been a very pleasant ride so far. I appreciate the professionalism and diligence and I'll recommend you anyday anytime.",
    metric: 'Client Referral'
  },
  {
    id: 'upwork-seo',
    name: 'SEO Optimization & Google Search Visibility client',
    role: 'SEO & Search Visibility',
    source: 'Upwork',
    avatar: 'U',
    rating: 5,
    quote: 'Great job on the documentation of SEO for the website. I have been working with this company for years now and we have built a great business relationship.',
    metric: 'Upwork Verified'
  },
  {
    id: 'upwork-web-upgrade',
    name: 'Website Upgrade client',
    role: 'Web Design & Upgrade',
    source: 'Upwork',
    avatar: 'U',
    rating: 5,
    quote: 'Great web designer!',
    metric: 'Upwork Verified'
  },
  {
    id: 'upwork-logo-1',
    name: 'Logo Development client',
    role: 'Logo & Brand Development',
    source: 'Upwork',
    avatar: 'U',
    rating: 5,
    quote: 'Excellent developer. Great attention to detail. Well talented. Patient and extremely dedicated.',
    metric: 'Upwork Verified'
  },
  {
    id: 'upwork-logo-2',
    name: 'Logo Development client',
    role: 'IT & Logo Development',
    source: 'Upwork',
    avatar: 'U',
    rating: 5,
    quote: 'Excellent IT skills and quality work.',
    metric: 'Upwork Verified'
  },
  {
    id: 'upwork-business-upgrade',
    name: 'Business Website Upgrade client',
    role: 'Business Website Upgrade',
    source: 'Upwork',
    avatar: 'U',
    rating: 5,
    quote: 'Praise is definitely the best choice when searching for a web developer. 10 out of 10!',
    metric: 'Upwork Verified'
  },
  {
    id: 'upwork-web-dev',
    name: 'Website Developer Business client',
    role: 'Business Website Development',
    source: 'Upwork',
    avatar: 'U',
    rating: 5,
    quote: 'The web developer Praise was highly skilled and professional, delivering a modern, user-friendly website that exceeded expectations. He was responsive, detail-oriented, and ensured everything functioned perfectly.',
    metric: 'Upwork Verified'
  },
  {
    id: 'fiverr-andersonbelz112',
    name: 'andersonbelz112',
    role: 'Framer Project',
    source: 'Fiverr',
    avatar: 'A',
    rating: 5,
    quote: "Great experience working with Praise. He communicated well throughout the project and completed all the Framer updates exactly as requested. He was quick with revisions, paid attention to the details, and made the whole process smooth. I'd definitely recommend him and would happily work with him again.",
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-ibukunolami-coaching',
    name: 'ibukunolami_d',
    role: 'Coaching Landing Page',
    source: 'Fiverr',
    avatar: 'I',
    rating: 5,
    quote: 'Great experience working with Praise on my coaching landing page. He kept me updated at every milestone with clear explanations of what was done and what was coming next, so there were never any surprises. On top of that, the layout itself came out clean and premium, exactly the vibe I was going for.',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-busayomaxwell',
    name: 'busayomaxwell',
    role: 'Framer Footer Redesign',
    source: 'Fiverr',
    avatar: 'B',
    rating: 5,
    quote: 'Great experience working with praise. He was professional, communicative and delivered a clean, responsive framer footer redesign exactly as requested. Fast turnaround, great attention to detail , and high-quality work. Highly recommended, and I would gladly work with him again .',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-yemeya',
    name: 'yemeya',
    role: 'Web Project',
    source: 'Fiverr',
    avatar: 'Y',
    rating: 5,
    quote: 'Great work!!!',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-carlocor-1',
    name: 'carlocor',
    role: 'Web Development',
    source: 'Fiverr',
    avatar: 'C',
    rating: 5,
    quote: 'Really professional, helpful and punctual',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-carlocor-2',
    name: 'carlocor',
    role: 'Web Development',
    source: 'Fiverr',
    avatar: 'C',
    rating: 5,
    quote: 'Extremely accurate, detail-oriented, helpful.',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-ibukunolami-fintech',
    name: 'ibukunolami_d',
    role: 'Fintech Landing Page',
    source: 'Fiverr',
    avatar: 'I',
    rating: 5,
    quote: "Great Guy. He delivered and designed a landing page for my fintech just as I had envisioned it, with just a little info shared with him. He is really creative as he made the project easy for me from start to finish. Will surely use Praise service again. PS: He was referred to me by my friend, and he didn't disappoint.",
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-analyst-olad-1',
    name: 'analyst_olad',
    role: 'Web Platform Delivery',
    source: 'Fiverr',
    avatar: 'A',
    rating: 5,
    quote: 'This guyyyyy here is a GENIUS. He is what he calls himself. Highly recommended. Thank you for the quick delivery and awesome delivery. I will surely be back for more project.',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-analyst-olad-2',
    name: 'analyst_olad',
    role: 'WordPress & Framer Development',
    source: 'Fiverr',
    avatar: 'A',
    rating: 5,
    quote: 'I had a clear idea of how i wanted my website to look and even had a FRAMER design to guide things. Praise not only improved the design but also recommended using WORDPRESS to develop it, for better flexibility. He delivered a clean, mobile-friendly site that matched my vision perfectly. Great experience from start to finish.',
    metric: 'Fiverr 5.0 ★'
  },
  {
    id: 'fiverr-spectre-ad',
    name: 'spectre_ad',
    role: 'Digital Design & Code Changes',
    source: 'Fiverr',
    avatar: 'S',
    rating: 5,
    quote: 'It was great working with Praise. He delivered earlier than expected, was proactive with the task and he flawlessly made the changes I requested, he really helped me out with this, great guy.',
    metric: 'Fiverr 5.0 ★'
  }
];

const SITE_FAQS_DATA = [
  {
    id: 'speed-guarantee',
    question: 'How fast will my website be?',
    answer: 'I build with speed in mind and test key pages before launch. Load times and performance scores depend on your content, hosting, and site features.'
  },
  {
    id: 'framer-vs-wordpress',
    question: 'Should I choose WordPress, Framer, or custom code?',
    answer: 'It depends on what you need. WordPress works well for content-heavy sites and online stores, Framer for design-led websites, and custom code or React for features that need more flexibility. I’ll recommend the right fit.'
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer: 'Most business websites take around 1 to 3 weeks. Larger stores and custom projects may take longer. I’ll confirm the timeline once we agree on the scope.'
  },
  {
    id: 'payment-process',
    question: 'How do payments work?',
    answer: 'Projects typically start with a 60% deposit, with the remaining 40% due at completion. You’ll receive a clear scope and payment schedule before work begins.'
  },
  {
    id: 'post-launch-support',
    question: 'Do you offer support after launch?',
    answer: 'Yes. I provide support for issues related to the build. Ongoing maintenance is also available if you need it.'
  }
];

/**
 * Render Testimonials Component HTML
 * @param {Object} options Configuration options
 * @returns {string} HTML string
 */
function generateTestimonialsHTML(options = {}) {
  const limit = options.limit ? parseInt(options.limit, 10) : SITE_TESTIMONIALS_DATA.length;
  const items = SITE_TESTIMONIALS_DATA.slice(0, limit);
  const badgeNum = options.badgeNum || '05';
  const badgeLabel = options.badgeLabel || 'Client Reviews';
  const title = options.title || 'What clients <span class="services-glance-accent">actually say.</span>';
  const subtitle = options.subtitle || 'Unedited reviews from global brands and founders who trusted Praise Techy with their digital presence.';
  const hideHeader = options.hideHeader === 'true' || options.hideHeader === true;

  const headerHTML = hideHeader ? '' : (options.showTag === 'true' || options.showTag === true ? `
    <div class="section-header-block reveal">
      <div class="section-num-tag">
        <span class="section-num-badge">${badgeNum}</span>
        <span class="section-tag-label">${badgeLabel}</span>
      </div>
      <div class="section-title-wrap">
        <h2 id="testimonials-heading">${title}</h2>
        <p>${subtitle}</p>
      </div>
    </div>
  ` : `
    <div class="cs-heading-left reveal" style="margin-bottom: 44px;">
      <h2 id="testimonials-heading" style="font-family: var(--font-heading, 'Manrope', sans-serif); font-size: clamp(2.2rem, 3.6vw, 4rem); font-weight: 800; color: #FFFFFF; letter-spacing: -0.04em; margin: 0 0 12px; line-height: 1.15;">${title}</h2>
      <p style="font-family: var(--font-body, 'DM Sans', sans-serif); font-size: 1.1rem; color: rgba(255, 255, 255, 0.72); max-width: 680px; margin: 0; line-height: 1.6;">${subtitle}</p>
    </div>
  `);

  const filterBarHTML = `
    <div class="testimonials-filter-bar reveal" aria-label="Filter reviews by platform">
      <button class="testimonials-filter-btn active" data-filter="all">All Reviews (${items.length})</button>
      <button class="testimonials-filter-btn" data-filter="Client referral">Client Referral (1)</button>
      <button class="testimonials-filter-btn" data-filter="Upwork">Upwork (6)</button>
      <button class="testimonials-filter-btn" data-filter="Fiverr">Fiverr (10)</button>
    </div>
  `;

  const cardsHTML = items.map((t, idx) => {
    const delayClass = `reveal-delay-${(idx % 3) + 1}`;
    const stars = '★'.repeat(t.rating);
    const platformCategory = t.source.toLowerCase().includes('upwork') ? 'Upwork' : (t.source.toLowerCase().includes('referral') ? 'Client referral' : 'Fiverr');
    return `
      <div class="testimonial-card reveal ${delayClass}" data-platform="${platformCategory}">
        <div>
          <div class="testimonial-header">
            <div class="testimonial-client">
              <div class="client-avatar-placeholder">${t.avatar}</div>
              <div class="client-info">
                <h4>${t.name}</h4>
                <span>${t.role}</span>
              </div>
            </div>
            <span class="verified-source-pill">${t.source}</span>
          </div>
          <div class="star-rating">${stars}</div>
          <p class="testimonial-quote">${t.quote}</p>
        </div>
        <div class="testimonial-metric-highlight">
          ${t.metric}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="container">
      ${headerHTML}
      ${filterBarHTML}
      <div class="testimonials-grid">
        ${cardsHTML}
      </div>
    </div>
  `;
}

/**
 * Render FAQ Component HTML
 * @param {Object} options Configuration options
 * @returns {string} HTML string
 */
function generateFaqsHTML(options = {}) {
  const limit = options.limit ? parseInt(options.limit, 10) : SITE_FAQS_DATA.length;
  const items = SITE_FAQS_DATA.slice(0, limit);
  const badgeNum = options.badgeNum || '06';
  const badgeLabel = options.badgeLabel || 'FAQs';
  const title = options.title || 'Your questions, <span class="services-glance-accent">answered.</span>';
  const subtitle = options.subtitle || 'Answers to common questions about timelines, the tools I use, website performance, and support after launch.';
  const hideHeader = options.hideHeader === 'true' || options.hideHeader === true;

  const headerHTML = hideHeader ? '' : `
    <div class="cs-heading-left reveal" style="margin-bottom: 44px;">
      <h2 id="faqs-heading" style="font-family: var(--font-heading, 'Manrope', sans-serif); font-size: clamp(2.2rem, 3.6vw, 4rem); font-weight: 800; color: #FFFFFF; letter-spacing: -0.04em; margin: 0 0 12px; line-height: 1.15;">${title}</h2>
      <p style="font-family: var(--font-body, 'DM Sans', sans-serif); font-size: 1.1rem; color: rgba(255, 255, 255, 0.72); max-width: 680px; margin: 0; line-height: 1.6;">${subtitle}</p>
    </div>
  `;

  const accordionHTML = items.map((faq, idx) => {
    const isOpen = idx === 0 ? 'open' : '';
    const isExpanded = idx === 0 ? 'true' : 'false';
    const icon = idx === 0 ? '−' : '+';
    return `
      <div class="faq-item ${isOpen}">
        <button class="faq-question" aria-expanded="${isExpanded}">
          <span>${faq.question}</span>
          <span class="faq-icon">${icon}</span>
        </button>
        <div class="faq-answer">
          ${faq.answer}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="container">
      ${headerHTML}
      <div class="faq-accordion reveal">
        ${accordionHTML}
      </div>
    </div>
  `;
}

/**
 * Initialize all FAQ Accordion Interactions on the page
 */
function initFaqAccordion(root = document) {
  const faqItems = root.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    if (questionBtn._hasFaqListener) return;
    questionBtn._hasFaqListener = true;

    questionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentAccordion = item.closest('.faq-accordion') || item.parentElement;
      const wasOpen = item.classList.contains('open');

      if (parentAccordion) {
        // Close siblings for clean single-open accordion
        parentAccordion.querySelectorAll('.faq-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('open');
            const sibBtn = sibling.querySelector('.faq-question');
            if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Toggle clicked item
      if (wasOpen) {
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Initialize Platform Filter Tabs for Testimonials
 */
function initTestimonialsFilters(root = document) {
  const filterBars = root.querySelectorAll('.testimonials-filter-bar');
  filterBars.forEach(bar => {
    const parentSection = bar.closest('.testimonials-section') || bar.parentElement;
    if (!parentSection) return;

    const buttons = bar.querySelectorAll('.testimonials-filter-btn');
    const cards = parentSection.querySelectorAll('.testimonial-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedFilter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const cardPlatform = card.getAttribute('data-platform');
          if (selectedFilter === 'all' || cardPlatform === selectedFilter) {
            card.classList.remove('is-filtered-out');
          } else {
            card.classList.add('is-filtered-out');
          }
        });

        // Trigger ScrollTrigger refresh if GSAP is loaded
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      });
    });
  });
}

/**
 * Universal Auto-Hydration for Data Components
 */
function initSiteComponents() {
  // Hydrate Testimonials
  const testimonialContainers = document.querySelectorAll('[data-component="testimonials"], .site-testimonials-component');
  testimonialContainers.forEach(container => {
    const options = {
      limit: container.getAttribute('data-limit') || container.dataset.limit,
      badgeNum: container.getAttribute('data-badge-num') || container.dataset.badgeNum,
      badgeLabel: container.getAttribute('data-badge-label') || container.dataset.badgeLabel,
      title: container.getAttribute('data-title') || container.dataset.title,
      subtitle: container.getAttribute('data-subtitle') || container.dataset.subtitle,
      hideHeader: container.getAttribute('data-hide-header') || container.dataset.hideHeader
    };

    container.innerHTML = generateTestimonialsHTML(options);
    if (!container.classList.contains('testimonials-section') && !container.classList.contains('section')) {
      container.classList.add('section', 'testimonials-section', 'dark-section');
    }
  });

  // Initialize testimonial filter tabs
  initTestimonialsFilters(document);

  // Hydrate FAQs
  const faqContainers = document.querySelectorAll('[data-component="faqs"], .site-faqs-component');
  faqContainers.forEach(container => {
    const options = {
      limit: container.getAttribute('data-limit') || container.dataset.limit,
      badgeNum: container.getAttribute('data-badge-num') || container.dataset.badgeNum,
      badgeLabel: container.getAttribute('data-badge-label') || container.dataset.badgeLabel,
      title: container.getAttribute('data-title') || container.dataset.title,
      subtitle: container.getAttribute('data-subtitle') || container.dataset.subtitle,
      hideHeader: container.getAttribute('data-hide-header') || container.dataset.hideHeader
    };

    container.innerHTML = generateFaqsHTML(options);
    if (!container.classList.contains('section-faqs') && !container.classList.contains('section')) {
      container.classList.add('section', 'section-faqs', 'dark-section');
    }
    initFaqAccordion(container);
  });

  // Also initialize any static FAQs that might already be in the DOM
  initFaqAccordion(document);
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteComponents);
} else {
  initSiteComponents();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SITE_TESTIMONIALS_DATA,
    SITE_FAQS_DATA,
    generateTestimonialsHTML,
    generateFaqsHTML,
    initSiteComponents
  };
}
