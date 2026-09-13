/**
 * Project Data & Interactive Case Study Modal Controller
 * Praise Techy - Selected Works & Case Studies
 */

const portfolioProjects = [
  {
    id: 'collxx',
    title: 'Collxx Studio',
    category: 'E-Commerce & Fashion',
    tagline: 'High-converting luxury e-commerce experience with sub-2s load times',
    description: 'Collxx required a sophisticated, high-performance digital storefront capable of blending luxury brand storytelling with ultra-fast, frictionless mobile checkout.',
    challenge: 'The original store suffered from high cart abandonment, bloated legacy scripts, and slow mobile render speeds exceeding 6.4 seconds.',
    solution: 'Engineered an ultra-lean custom architecture with optimized asset pipelines, instant predictive search, and high-converting, mobile-first product pages.',
    metrics: [
      { value: '98/100', label: 'Lighthouse Speed Score' },
      { value: '1.2s', label: 'Average Load Time' },
      { value: '+142%', label: 'Mobile Conversion Rate' }
    ],
    techStack: ['WordPress', 'WooCommerce', 'Custom CSS/JS', 'Performance Optimization'],
    image: 'images/collxx.webp',
    liveUrl: 'https://praisetechy.com/collxx/'
  },
  {
    id: 'all-can-thrive',
    title: 'All Can Thrive Foundation',
    category: 'Non-Profit & Global Impact',
    tagline: 'Empowering communities through life-course health, dignity, and sustainable development',
    description: 'ACT Foundation advances integrated, community-driven solutions across health, livelihoods, and sustainable development from Cameroon to the global stage.',
    challenge: 'Needed a trustworthy, world-class advocacy and fundraising platform with interactive initiative pillars, launch countdowns, and seamless partner onboarding systems.',
    solution: 'Designed and engineered an authoritative, human-centric web platform with multi-pillar navigation, strategic milestone tracking, and seamless partner onboarding.',
    metrics: [
      { value: '100%', label: 'Community Owned' },
      { value: '< 1.4s', label: 'Global Load Speed' },
      { value: '4 Pillars', label: 'Integrated Impact' }
    ],
    techStack: ['WordPress', 'Custom UI/UX', 'SEO Optimization', 'Responsive Architecture'],
    image: 'images/all-can-thrive.png',
    liveUrl: 'https://allcanthrive.com/'
  },
  {
    id: 'codex-property',
    title: 'Codex Property Buyers Agent',
    category: 'Real Estate Advocacy · Australia',
    tagline: 'High-converting property advocacy and buyers agent lead generation engine',
    description: 'Codex Property helps home buyers, investors, and SMSF clients secure premium off-market properties across Australia at optimal prices.',
    challenge: 'Converting casual property seekers into high-intent consultation bookings required clear trust signaling, service segmentation, and friction-free inquiry funnels.',
    solution: 'Engineered an elite, high-trust digital platform featuring targeted inquiry segmentation (Home Buyer, Investing, SMSF, Commercial), client trust badges, and automated lead capture.',
    metrics: [
      { value: '$150M+', label: 'Property Purchased' },
      { value: '1000+', label: 'Inspections Completed' },
      { value: '+175%', label: 'Qualified Inquiries' }
    ],
    techStack: ['WordPress', 'Conversion Architecture', 'Interactive Lead Forms', 'Speed Optimization'],
    image: 'images/codex-property.png',
    liveUrl: 'https://codexproperty.com.au/'
  },
  {
    id: 'tobams-colors',
    title: 'Tobams Colors',
    category: 'E-Commerce & Creative Print',
    tagline: 'Vibrant, bespoke print platform with seamless custom product workflows',
    description: 'A global custom print and creative media brand delivering bespoke design products and merchandise worldwide.',
    challenge: 'Complex variant configurators and heavy product mockups were slowing down page interactions and causing customer drop-off on mobile devices.',
    solution: 'Engineered a streamlined visual configurator with deferred heavy assets, optimized image delivery pipelines, and high-impact visual design.',
    metrics: [
      { value: '96/100', label: 'Performance Score' },
      { value: '1.4s', label: 'First Contentful Paint' },
      { value: '+85%', label: 'Organic Search Traffic' }
    ],
    techStack: ['Framer', 'Custom Integrations', 'SEO Strategy', 'UI/UX Design'],
    image: 'images/tobams-colors.webp',
    liveUrl: 'https://praisetechy.com/tobams-colors/'
  },
  {
    id: 'gho-media',
    title: 'GHO Media & Publications',
    category: 'B2B Digital Media & Publishing',
    tagline: 'High-performance publishing hub for investigative digital journalism',
    description: 'The multimedia editorial arm of Global Health Otherwise, delivering in-depth reports, interviews, and investigative digital series across global health topics.',
    challenge: 'High-resolution editorial media and rich multimedia embeds were creating layout shifts and dragging page performance on mobile readers.',
    solution: 'Implemented responsive image srcset handling, deferred media hydration, and an editorial magazine layout with reading time estimates and smooth category navigation.',
    metrics: [
      { value: '0.00', label: 'Cumulative Layout Shift (CLS)' },
      { value: '1.2s', label: 'First Meaningful Paint' },
      { value: '+95%', label: 'Reader Retention' }
    ],
    techStack: ['WordPress', 'Editorial Design', 'Performance Tuning', 'SEO'],
    image: 'images/gho-media.webp',
    liveUrl: 'https://globalhealthotherwisemedia.org/'
  },
  {
    id: 'global-health-otherwise',
    title: 'Global Health Otherwise',
    category: 'B2B Healthcare & Non-Profit',
    tagline: 'Authoritative digital platform for global health research & advocacy',
    description: 'A forward-thinking global health organization dedicated to transforming health equity through research and community initiatives.',
    challenge: 'The organization had a dense library of publications, podcasts, and research papers that were difficult to navigate on mobile devices.',
    solution: 'Designed an intuitive content architecture with streamlined category filtering, lightning-fast document access, and accessible typography.',
    metrics: [
      { value: '< 1.5s', label: 'Document Load Speed' },
      { value: '97/100', label: 'Accessibility Score' },
      { value: '+160%', label: 'Resource Downloads' }
    ],
    techStack: ['WordPress', 'Custom Theme', 'SEO Optimization', 'Responsive Architecture'],
    image: 'https://praisetechy.com/wp-content/uploads/2025/10/GHO-scaled.jpg',
    liveUrl: 'https://praisetechy.com/global-health-otherwise/'
  },
  {
    id: 'quantum-leap',
    title: 'Quantum Leap Data Consult',
    category: 'B2B Analytics & Consulting',
    tagline: 'High-authority digital presence for elite enterprise data consultancy',
    description: 'An enterprise data consulting firm helping corporations turn raw numbers into strategic growth insights and automated intelligence.',
    challenge: 'Needed a sleek, high-trust corporate identity that positioned the firm as premier data consultants for institutional decision-makers.',
    solution: 'Built a dark modern aesthetic with interactive service breakdowns, lead capture funnels, and clear case study presentations.',
    metrics: [
      { value: '3.5x', label: 'Lead Inquiry Increase' },
      { value: '98/100', label: 'SEO & Performance' },
      { value: '100%', label: 'Mobile Optimized' }
    ],
    techStack: ['Framer', 'UI/UX Design', 'Lead Funnels', 'Brand Identity'],
    image: 'https://praisetechy.com/wp-content/uploads/2025/10/quantum-leap-scaled-1.webp',
    liveUrl: 'https://praisetechy.com/quantum-leap-data-consult/'
  },
  {
    id: 'alluring-beauty',
    title: 'Alluring Beauty Solutions',
    category: 'B2B Aesthetics & Wellness',
    tagline: 'Premium brand experience and automated booking for clinical beauty',
    description: 'A medical-grade aesthetics and wellness brand offering advanced skincare, cosmetic solutions, and personalized consultations.',
    challenge: 'Client bookings were handled manually via fragmented chat channels, leading to missed client inquiries and schedule conflicts.',
    solution: 'Engineered an integrated booking workflow with automated calendar confirmations, mobile service menus, and luxury visual storytelling.',
    metrics: [
      { value: '+185%', label: 'Direct Online Bookings' },
      { value: '0', label: 'Scheduling Friction' },
      { value: '95+', label: 'Performance Rating' }
    ],
    techStack: ['WordPress', 'Booking Engine', 'Custom CSS', 'Speed Tuning'],
    image: 'images/alluring-beauty.png',
    liveUrl: 'https://praisetechy.com/alluring-beauty-solutions/'
  },
  {
    id: 'pearlwood-hotels',
    title: 'Pearlwood Hotels Ikeja',
    category: 'Hospitality & Luxury Travel',
    tagline: 'Modern luxury comfort minutes from Murtala Muhammed International Airport',
    description: 'Pearlwood Hotels LTD is a premium hospitality brand in Ikeja, Lagos, offering world-class rooms, warm service, and an elevated guest experience for business and leisure travellers.',
    challenge: 'The hotel needed a professional digital presence that could drive direct bookings, showcase room categories, and build trust with corporate and international guests.',
    solution: 'Engineered a full-service hotel website with interactive room galleries, integrated booking functionality, guest testimonials, restaurant features, and seamless contact workflows.',
    metrics: [
      { value: '+220%', label: 'Direct Booking Inquiries' },
      { value: '< 1.3s', label: 'Global Load Speed' },
      { value: '4.9★', label: 'Guest Satisfaction Rating' }
    ],
    techStack: ['WordPress', 'Booking Engine', 'Custom UI/UX', 'Performance Optimization'],
    image: 'images/pearlwood-hotels.png',
    liveUrl: 'https://pearlwoodhotelsikeja.com/'
  }
];

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const modalBackdrop = modal.querySelector('.modal-backdrop');
  const modalCloseBtn = modal.querySelector('.modal-close-btn');
  const modalContainer = modal.querySelector('.modal-body');

  function openProject(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;

    modalContainer.innerHTML = `
      <div class="modal-banner-wrap">
        <img src="${project.image}" alt="${project.title}" class="modal-banner-img" onerror="this.src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'" />
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin: 20px 0 16px;">
        <div>
          <span style="font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; color: var(--accent-amber); text-transform: uppercase; letter-spacing: 0.1em;">${project.category}</span>
          <h2 style="font-family: var(--font-serif); font-size: 2.3rem; margin-top: 4px; color: var(--text-primary);">${project.title}</h2>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="https://cal.com/praisetechy/30min" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 10px 18px; font-size: 0.85rem;">Discuss Similar Project</a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 10px 18px; font-size: 0.85rem;">View Live Site ↗</a>
        </div>
      </div>

      <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px;">${project.tagline}</p>

      <div class="modal-grid-stats">
        ${project.metrics.map(m => `
          <div class="modal-stat-box">
            <span>${m.value}</span>
            <p>${m.label}</p>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 20px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="margin-bottom: 8px; font-family: var(--font-display); font-size: 1.05rem; color: var(--text-primary);">The Challenge</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${project.challenge}</p>
      </div>

      <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="margin-bottom: 8px; font-family: var(--font-display); font-size: 1.05rem; color: var(--text-primary);">The Solution & Architecture</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${project.solution}</p>
      </div>

      <div>
        <h5 style="font-family: var(--font-display); font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Technologies & Services</h5>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${project.techStack.map(t => `<span class="tech-badge" style="background: rgba(255,255,255,0.06); color: var(--text-primary); padding: 6px 14px; border: 1px solid var(--border-subtle);">${t}</span>`).join('')}
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Event Listeners
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-project-id]');
    if (card) {
      e.preventDefault();
      const id = card.getAttribute('data-project-id');
      openProject(id);
    }
  });

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', initProjectModals);
