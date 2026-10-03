/**
 * Project Data & Interactive Case Study Modal Controller
 * Praise Techy - Selected Works & Case Studies
 */

const portfolioProjects = [
  {
    id: 'collxx',
    title: 'Collxx',
    category: 'E-Commerce & Fashion',
    tagline: 'How I converted a Figma design into a secure, high performing WordPress store that showcases COLLXX’s curated collections',
    description: 'COLLXX needed a site that showcased products from many local designers, with clean navigation so users could easily browse categories like Clothing, Accessories, Fragrance, etc.',
    challenge: 'Convert complex Figma components into reliable WordPress templates, organize 100+ products with filters, integrate secure payment options, and improve mobile SEO performance.',
    solution: 'Collaborated within a three-person delivery team to build responsive WordPress templates, 100+ product catalog structure, payment gateways, and SEO improvements.',
    metrics: [
      { value: '98/100', label: 'Lighthouse Speed Score' },
      { value: '1.2s', label: 'Average Load Time' },
      { value: '100+', label: 'Products Structured' }
    ],
    techStack: ['WordPress', 'WooCommerce', 'Figma to WordPress', 'SEO & Performance'],
    image: 'images/collxx.webp',
    liveUrl: 'https://collxx.com/'
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
    image: 'images/all-can-thrive.webp',
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
    image: 'images/codex-property.webp',
    liveUrl: 'https://codexproperty.com.au/'
  },
  {
    id: 'tobams-colors',
    title: 'Tobams Colors',
    category: 'E-Commerce & African Fashion',
    tagline: 'How I transformed a vibrant Figma design into a secure, SEO-ready WordPress shop for a modern African fashion brand',
    description: 'Tobams Colors is a bold and colorful fashion label inspired by African heritage and modern design. Turned a static Figma design into a fast, secure, and visually expressive WordPress website.',
    challenge: 'Bring a bold Figma design to life, structure over 50 products for easy browsing, integrate secure payment gateways, and optimize for Google search visibility.',
    solution: 'Built responsive templates directly from Figma, organized 50+ products with smart filtering, integrated secure checkout, and applied caching and compression.',
    metrics: [
      { value: '96/100', label: 'Performance Score' },
      { value: '50+', label: 'Products Structured' },
      { value: '+85%', label: 'Search Traffic Growth' }
    ],
    techStack: ['WordPress', 'WooCommerce', 'Figma to WordPress', 'SEO & Speed Optimization'],
    image: 'images/tobams-colors.webp',
    liveUrl: 'https://tobamscolors.com/'
  },
  {
    id: 'gho-media',
    title: 'Global Health Otherwise Media',
    category: 'B2B Digital Media & Publishing',
    tagline: 'How I built a dynamic media platform that amplifies African voices in global health, policy, and data storytelling',
    description: 'Global Health Otherwise needed a dedicated home for their growing media and storytelling arm, a place to publish articles, podcasts, and research-driven stories.',
    challenge: 'Create a separate platform maintaining parent visual identity, support podcasts/videos/reports, meet tight editorial deadlines, and build a flexible structure.',
    solution: 'Designed a media-focused WordPress site with category-specific layouts, podcast/video support, SEO & analytics, and ongoing platform management.',
    metrics: [
      { value: '100%', label: 'Brand Alignment' },
      { value: '1.2s', label: 'First Contentful Paint' },
      { value: 'Full', label: 'Podcast & Media Support' }
    ],
    techStack: ['WordPress', 'Editorial Design', 'Podcast Integration', 'SEO & Analytics'],
    image: 'images/gho-media.webp',
    liveUrl: 'https://globalhealthotherwisemedia.org/'
  },
  {
    id: 'global-health-otherwise',
    title: 'Global Health Otherwise',
    category: 'B2B Healthcare & Non-Profit',
    tagline: 'How I transformed Global Health Otherwise into a sleek, user-friendly website that strengthens their voice in global health research and awareness',
    description: 'Global Health Otherwise needed an urgent redesign of their website to better reflect their mission and improve user experience.',
    challenge: 'Cluttered layout, non-functional links/buttons, incomplete publications and donate pages, with an urgent 10-day launch timeline.',
    solution: 'Rebuilt the experience on WordPress with clean intuitive layout, functional donation/publication flows, SEO optimization, and full ongoing website management.',
    metrics: [
      { value: '10 Days', label: 'Turnaround Time' },
      { value: '97/100', label: 'Accessibility Score' },
      { value: '100%', label: 'Link Integrity & Uptime' }
    ],
    techStack: ['WordPress', 'UI Redesign', 'Donation Integration', 'Website Management'],
    image: 'https://praisetechy.com/wp-content/uploads/2025/10/GHO-scaled.jpg',
    liveUrl: 'http://globalhealthotherwise.com/'
  },
  {
    id: 'quantum-leap',
    title: 'Quantum Leap Data Consult',
    category: 'B2B Analytics & Consulting',
    tagline: 'How I helped Quantum Leap Data Consult establish a strong digital presence with a sleek one-page WordPress site',
    description: 'Quantum Leap Data Consult needed a professional online space to showcase their expertise in data analytics and consulting.',
    challenge: 'No prior online presence, needing a clean, one-page website that presents services clearly, loads fast, and provides long-term maintainability.',
    solution: 'Designed and developed a modern one-page WordPress site guiding visitors from awareness to contact, with performance, SEO, and ongoing maintenance.',
    metrics: [
      { value: '1-Page', label: 'Seamless Flow' },
      { value: '98/100', label: 'Performance Score' },
      { value: '100%', label: 'Managed & Maintained' }
    ],
    techStack: ['WordPress', 'One-Page Design', 'SEO Foundations', 'Website Management'],
    image: 'https://praisetechy.com/wp-content/uploads/2025/10/quantum-leap-scaled-1.webp',
    liveUrl: 'https://quantumleapdataconsult.com/'
  },
  {
    id: 'alluring-beauty',
    title: 'Alluring Beauty Solutions',
    category: 'Project Management & Government Contracting',
    tagline: 'Bringing a government contracting brand to life with modern animations and sleek one-page design',
    description: 'Alluring Beauty Solutions is a project management and government contracting firm that needed a refreshed website to match its professionalism.',
    challenge: 'Redesign an existing one-page site with smooth scroll effects and refined animations inspired by finologee.com while optimizing for all devices.',
    solution: 'Reworked the layout for clear visual hierarchy, integrated smooth scroll-based animations, updated typography and colors, and optimized responsiveness.',
    metrics: [
      { value: 'Sleek', label: 'Modern Animations' },
      { value: '100%', label: 'Responsive Flow' },
      { value: 'Premium', label: 'Brand Experience' }
    ],
    techStack: ['WordPress', 'Custom Animations', 'Scroll Effects', 'Responsive UI'],
    image: 'images/alluring-beauty.webp',
    liveUrl: 'https://www.alluringbeautysolutions.com/'
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
    image: 'images/pearlwood-hotels.webp',
    liveUrl: 'https://pearlwoodhotelsikeja.com/'
  },
  {
    id: 'emily-sparkles',
    title: 'Emily Sparkles',
    category: 'E-Commerce & Fashion',
    tagline: 'How I turned a dropshipping vision into a full brand experience and seamless WordPress store',
    description: 'Emily Sparkles started as an idea to make trendy fashion and accessories accessible through dropshipping with a full brand identity from scratch.',
    challenge: 'Create a cohesive brand guide and logo from scratch, build a WooCommerce dropshipping store with AliExpress integration, secure payments, and SEO fundamentals.',
    solution: 'Designed logo and brand guide, developed WooCommerce store with AliExpress product imports, simplified checkout flow, and conducted SEO optimization.',
    metrics: [
      { value: 'Full', label: 'Brand Identity Built' },
      { value: 'WooCommerce', label: 'AliExpress Dropship' },
      { value: 'Optimized', label: 'SEO & Checkout Flow' }
    ],
    techStack: ['WordPress', 'WooCommerce', 'AliExpress Dropshipping', 'Brand Identity & SEO'],
    image: 'images/emily-sparkles.webp',
    liveUrl: null
  }
];

// Export portfolio data for application usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects };
}
