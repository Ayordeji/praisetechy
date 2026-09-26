/**
 * Universal Site Components Controller
 * Manages reusable, synchronized Testimonials and FAQ components across Praise Techy website.
 * Editing data here instantly updates all occurrences across all pages.
 */

const SITE_TESTIMONIALS_DATA = [
  {
    id: 'christacourt',
    name: 'Christacourt',
    role: 'E-Commerce Founder',
    source: 'Fiverr Verified',
    avatar: 'C',
    rating: 5,
    quote: '"Praise did an exceptional job on our website project, demonstrating a high level of technical professionalism and incredible work quality. His cooperation and speed optimization made working with him seamless. Highly recommended!"',
    metric: '⚡ Load time reduced from 6.2s to 1.3s'
  },
  {
    id: 'shawn-boyd',
    name: 'Dr. Shawn Boyd',
    role: 'Educator & Consultant',
    source: 'Direct Client',
    avatar: 'S',
    rating: 5,
    quote: '"Working with Praise has been transformative for our digital platform. He answered every complex requirement promptly, restructured our layout for mobile users, and delivered well ahead of schedule."',
    metric: '💎 +160% Online Document Downloads'
  },
  {
    id: 'tobams-media',
    name: 'Tobams Media',
    role: 'Creative Print Brand',
    source: 'Agency Partner',
    avatar: 'T',
    rating: 5,
    quote: '"Our previous store lagged terribly with hundreds of product variations. Praise re-engineered our platform with deferred asset loading and clean architecture. Our conversion rates spiked almost immediately after launch."',
    metric: '📈 +85% Organic Search Traffic'
  },
  {
    id: 'david-bradley',
    name: 'David Bradley',
    role: 'Chief Technologist, SubRx',
    source: 'Direct Client',
    avatar: 'D',
    rating: 5,
    quote: '"It was our first time taking a B2B website from Figma to live build, and Praise nailed our project. His communication was clear, speed was outstanding, and the final result exceeded expectations."',
    metric: '🚀 99/100 Lighthouse Performance'
  },
  {
    id: 'nicolas-villa',
    name: 'Nicolas Villa',
    role: 'Founder & CEO At Stayvera Inc.',
    source: 'Fiverr Verified',
    avatar: 'N',
    rating: 5,
    quote: '"I had an excellent experience working with Praise for the Stayvera website! The communication was outstanding, he always kept me informed every step of the way. The final result was beyond my expectations."',
    metric: '⚡ Sub-1.2s Page Response'
  },
  {
    id: 'tai-owoka',
    name: 'Tai Owoka',
    role: 'Founder, ZenMomTribe',
    source: 'Direct Client',
    avatar: 'T',
    rating: 5,
    quote: '"Working with Praise has been such a seamless experience. He revamped my website beautifully, handled all the updates with care, and even took the time to train my team so we could manage things confidently on our own."',
    metric: '📱 100% Mobile Optimized'
  },
  {
    id: 'josh-kaplan',
    name: 'Josh Kaplan',
    role: 'Smooth Media CEO',
    source: 'Agency Partner',
    avatar: 'J',
    rating: 5,
    quote: '"Praise did a great job. He was communicative and delivered the webflow and custom edits in a timely fashion. If you\'re looking for a developer who is talented, reliable, and a pleasure to work with, Praise is your guy."',
    metric: '🎯 Zero Layout Shifts (0.00 CLS)'
  },
  {
    id: 'shelley-kemmerer',
    name: 'Shelley Kemmerer',
    role: 'KIM Founder',
    source: 'Direct Client',
    avatar: 'S',
    rating: 5,
    quote: '"Praise was very eager to support the requests and delivered in short time. What truly impressed me was his attention to every detail and his willingness to keep working until even the smallest imperfection was resolved. I was very pleased and will hire again."',
    metric: '✨ 100% Pixel-Perfect Delivery'
  },
  {
    id: 'daniel-delgado',
    name: 'Daniel Delgado',
    role: 'TradeSpace Founder',
    source: 'Direct Client',
    avatar: 'D',
    rating: 5,
    quote: '"Working with Praise on this project was an extremely positive experience. From the start, he demonstrated great technical expertise and a clear understanding of how to implement high-converting, sub-2s performance platforms."',
    metric: '💡 +142% Conversion Boost'
  },
  {
    id: 'kofi-mensah',
    name: 'Kofi Mensah',
    role: 'Managing Director, All Can Thrive',
    source: 'Non-Profit Director',
    avatar: 'K',
    rating: 5,
    quote: '"Praise gave our international foundation an authoritative, world-class web presence. Donors constantly commend our clear structure and rapid load times across mobile networks in West Africa."',
    metric: '🌍 100% Community-Driven Engagement'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Principal Buyers Agent, Codex Property',
    source: 'Real Estate Executive',
    avatar: 'M',
    rating: 5,
    quote: '"Praise designed a high-converting property acquisition funnel that positioned us as leaders in the Australian market. Our qualified investor consultations surged within weeks of going live."',
    metric: '🏢 +175% Qualified Consultations'
  },
  {
    id: 'adeola-bakare',
    name: 'Adeola Bakare',
    role: 'GM, Pearlwood Hotels Ikeja',
    source: 'Hospitality Leader',
    avatar: 'A',
    rating: 5,
    quote: '"Our direct bookings exceeded all forecasts after Praise launched the new portal. Guests love the streamlined mobile room reservation system, and our front desk workload dropped significantly."',
    metric: '🏨 +220% Direct Booking Inquiries'
  }
];

const SITE_FAQS_DATA = [
  {
    id: 'speed-guarantee',
    question: 'What is your sub-3-second speed guarantee?',
    answer: 'Every website I build or optimize is engineered to achieve a sub-3-second load time and a 90%+ Google Lighthouse score on standard connections. If your core pages do not meet this benchmark upon launch, I continue tuning and optimizing at no extra cost until they do.'
  },
  {
    id: 'framer-vs-wordpress',
    question: 'Should I build on Framer or WordPress?',
    answer: 'It depends on your business model. If you need complex e-commerce (WooCommerce), custom user accounts, blogging scalability, and multi-currency checkouts, <strong>WordPress</strong> is ideal. If you want a hyper-fast, design-led marketing site or landing page with zero server maintenance, <strong>Framer</strong> is unbeatable. We’ll choose the right tool on our discovery call.'
  },
  {
    id: 'seo-rankings',
    question: 'Will a redesign or migration hurt my Google rankings?',
    answer: 'No. When executing platform migrations or redesigns, I perform a comprehensive URL inventory, implement 1-to-1 301 redirects, preserve meta titles and schema structures, and submit updated XML sitemaps to Google Search Console to protect your search equity.'
  },
  {
    id: 'timeline',
    question: 'What is your typical project timeline?',
    answer: 'A standard Corporate Business website typically launches within 7 to 14 business days. Comprehensive e-commerce storefronts and custom enterprise builds range from 2 to 4 weeks depending on variant catalog size and custom integrations.'
  },
  {
    id: 'payment-process',
    question: 'How does payment and onboarding work?',
    answer: 'Projects typically run on a structured 50/50 split (50% deposit to initiate architecture & design sprints, and 50% upon final sign-off and deployment). For ongoing retainers and growth sprints, monthly invoicing is available with direct bank or card payments.'
  },
  {
    id: 'post-launch-support',
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes! All custom builds include up to 30 days of dedicated post-launch support covering bug fixes, speed audits, and CMS training. Monthly care and maintenance retainers are also available for continuous security updates, speed audits, and conversion tweaks.'
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
  const title = options.title || 'What founders actually <span class="services-glance-accent">say.</span>';
  const subtitle = options.subtitle || 'Unedited reviews from global brands and founders who trusted Praise Techy with their digital presence.';
  const hideHeader = options.hideHeader === 'true' || options.hideHeader === true;

  const headerHTML = hideHeader ? '' : `
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
  `;

  const cardsHTML = items.map((t, idx) => {
    const delayClass = `reveal-delay-${(idx % 3) + 1}`;
    const stars = '★'.repeat(t.rating);
    return `
      <div class="testimonial-card reveal ${delayClass}">
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
  const title = options.title || 'Frequently asked <span class="services-glance-accent">questions.</span>';
  const subtitle = options.subtitle || 'Everything you need to know about timelines, speed guarantees, platforms, and maintenance.';
  const hideHeader = options.hideHeader === 'true' || options.hideHeader === true;

  const headerHTML = hideHeader ? '' : `
    <div class="section-header-block reveal">
      <div class="section-num-tag">
        <span class="section-num-badge">${badgeNum}</span>
        <span class="section-tag-label">${badgeLabel}</span>
      </div>
      <div class="section-title-wrap">
        <h2 id="faqs-heading">${title}</h2>
        <p>${subtitle}</p>
      </div>
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

    // Prevent duplicate listener binding
    if (questionBtn._hasFaqListener) return;
    questionBtn._hasFaqListener = true;

    questionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentAccordion = item.closest('.faq-accordion');
      const isOpen = item.classList.contains('open');

      if (parentAccordion) {
        // Close siblings
        parentAccordion.querySelectorAll('.faq-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('open');
            const sibBtn = sibling.querySelector('.faq-question');
            const sibIcon = sibling.querySelector('.faq-icon');
            if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
            if (sibIcon) sibIcon.textContent = '+';
          }
        });
      }

      // Toggle clicked item
      const icon = item.querySelector('.faq-icon');
      if (isOpen) {
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = '+';
      } else {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '−';
      }
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
