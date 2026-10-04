# Ayodeji Praise Eluyemi (Praise Techy) — Portfolio & Platform

> **Live Website:** [praisetechy.com](https://praisetechy.com)  
> High-performance, handcrafted web portfolio and 15-project multi-page case study platform built with semantic HTML5, modular CSS3 design tokens, modern ES6+ JavaScript, and deployed on Cloudflare Pages.

---

## ⚡ Highlights & Engineering Philosophy

- **Zero-Framework Speed**: Handcrafted without heavy React, Vue, or WordPress runtimes for instantaneous global loading, sub-100ms TTFB, and crisp 60fps scrolling.
- **Editorial Aesthetic & Noir Theming**: Dark obsidian canvas (`#000000` / `#0C0C0C`) with emerald accents (`#02A855`), bespoke glassmorphic navigation, fluid typography (`DM Sans`, `Manrope`, `Outfit`), and rolling link interactions.
- **15 In-Depth Case Studies**: Detailed breakdowns spanning e-commerce, healthcare advocacy, digital media publishing, and AI tooling with interactive Vimeo facades and high-resolution WebP mockups.
- **Enterprise SEO & Structured Data**: Multi-entity linked data graph (`Person`, `WebSite`, `ProfessionalService`, `ItemList`, `CreativeWork`) with canonical URLs, Open Graph / Twitter Cards, and XML sitemaps.
- **Telemetry & Booking Gating**: Google Analytics 4 (`G-1P6627E2T2`) with strict production-hostname gating (zero dev/preview pollution) and custom Cal.com booking intent tracking.
- **Static Edge Delivery**: Optimized for Cloudflare Pages with custom `_headers`, `_redirects`, automated 404 fallbacks, and a lightweight Node.js build pipeline (`build.js`).

---

## 📁 Directory & File Architecture

```text
PORTFOLIO/
├── index.html              # Main Showcase & Hero Experience
├── about.html              # Biography, Engineering Philosophy & Credentials (/about)
├── pricing.html            # Transparent Pricing Packages & Add-ons (/pricing)
├── contact.html            # Direct Inquiries & Booking Hub (/contact)
├── style-guide.html        # Design Tokens, Color Palette & UI Elements (/style-guide)
├── 404.html                # Custom 404 Error Page
│
├── work/                   # Portfolio & Case Studies Hub
│   ├── index.html          # Works Grid & Filter Hub (/work/)
│   ├── collxx.html         # Collxx Luxury Storefront (/work/collxx)
│   ├── gho-media.html      # GHO Media Digital Publication (/work/gho-media)
│   ├── crevian-studios.html# Crevian Studios Digital Agency (/work/crevian-studios)
│   ├── tobams-colors.html  # Tobams Colors Custom Print Platform (/work/tobams-colors)
│   ├── luchuo-engelbert-bain.html # Dr. Luchuo Global Health Platform (/work/luchuo-engelbert-bain)
│   ├── data-with-bimmy.html# DatawithBimmy Career Platform (/work/data-with-bimmy)
│   ├── pearlwood-hotels.html # Pearlwood Hotels Luxury Booking (/work/pearlwood-hotels)
│   ├── all-can-thrive.html # All Can Thrive Foundation Portal (/work/all-can-thrive)
│   ├── prime-global-initiatives.html # Prime Global Initiatives Portal (/work/prime-global-initiatives)
│   ├── alluring-beauty.html# Alluring Beauty Brand & Store (/work/alluring-beauty)
│   ├── emily-sparkles.html # Emily Sparkles WooCommerce Store (/work/emily-sparkles)
│   ├── global-health-otherwise.html # Global Health Otherwise Portal (/work/global-health-otherwise)
│   ├── quantum-leap.html   # Quantum Leap Data Consult (/work/quantum-leap)
│   ├── no-border-thoughts.html # No Border Thoughts Coaching (/work/no-border-thoughts)
│   ├── codex-property.html # Codex Property Buyers Agent (/work/codex-property)
│   └── template.html       # Master Case Study Blueprint (Authoring reference)
│
├── css/
│   ├── main.css            # Base tokens, theme variables, reset & rolling link utilities
│   ├── components.css      # Floating header, mobile drawer, buttons, cards, modals & footer
│   ├── pages.css           # Subpage heroes, 2-column breakdowns, pricing cards & FAQs
│   └── animations.css      # Masked typography reveals, keyframes & smooth transitions
│
├── js/
│   ├── analytics.js        # Hostname-gated GA4 tracking & booking click intent engine
│   ├── main.js             # Intersection observers, reveal animations & DOM coordinator
│   ├── interactions.js     # Offcanvas drawer, video facades & interactive accordion controls
│   ├── site-components.js  # Universal testimonials carousel & FAQ accordion engine
│   ├── smooth-scroll.js    # Lenis momentum smooth scrolling coordinator
│   └── vendor/             # GSAP, ScrollTrigger & Lenis dependencies
│
├── images/                 # WebP/PNG project case studies, avatars & hero imagery
├── _headers                # Cloudflare Pages security & cache headers
├── _redirects              # Clean URL rewrite rules & legacy redirects
├── robots.txt              # Production crawling rules & sitemap declaration
├── sitemap.xml             # Search engine canonical XML sitemap (20 URLs)
├── package.json            # NPM project scripts & metadata
├── build.js                # Static site compiler targeting dist/
└── dev-server.js           # Zero-dependency local Node.js development server
```

---

## 🛠️ Development & Build Commands

### 1. Run Local Development Server
Start the built-in local development server:
```bash
npm run dev
# or: node dev-server.js
```
Open: [http://localhost:8080](http://localhost:8080)

### 2. Compile Production Bundle
Build all static assets and configuration files into the `dist/` distribution folder:
```bash
npm run build
# or: node build.js
```

---

## 🚀 Deployment

The project is configured for continuous static deployment via **Cloudflare Pages**:
1. Every commit pushed to the `main` branch automatically triggers a deployment build.
2. Cloudflare Pages serves files from `dist/` or the repository root with edge caching, HTTP/3, and global SSL.

---

## 📄 License & Ownership

Designed, developed, and maintained by **Ayodeji Praise Eluyemi (Praise Techy)**.  
All brand assets, project designs, and case studies are proprietary.
