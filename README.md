# Ayodeji Praise Eluyemi (Praise Techy) — Portfolio & Multi-Page Platform

High-performance, handcrafted web portfolio and multi-page platform built with vanilla HTML5, modern CSS3 (Custom Properties & Design Tokens), and modular JavaScript.

---

## 📁 Directory & File Architecture

```text
PORTFOLIO/
├── index.html            # Main Landing / Home Page
│
├── pages/                # Dedicated Website Subpages
│   ├── about.html        # Dedicated About Praise Page
│   ├── work.html         # Dedicated Selected Works & Case Studies Page
│   ├── contact.html      # Dedicated Contact & 30-min Strategy Call Page
│   ├── pricing.html      # Dedicated Transparent Pricing Page
│   ├── style-guide.html  # Design tokens and style preview
│   ├── project-template.html # Master Case Study Template Blueprint
│   └── project-*.html    # Individual Case Studies (Collxx, Tobams Colors, etc.)
│
├── css/
│   ├── main.css          # Design tokens, color palette, @font-face rules, typography & resets
│   ├── components.css    # Header, navigation, cards, footer, accordion, modal & buttons
│   ├── pages.css         # Inner subpage heroes, breadcrumbs, and subpage layout grids
│   └── animations.css    # Masked heading reveals, keyframes, and micro-interactions
│
├── js/
│   ├── main.js           # DOM orchestrator & scroll intersection observer
│   ├── interactions.js   # Mobile drawer, active link spy, currency switch, FAQ accordions
│   ├── site-components.js# Universal Testimonials & FAQ components manager
│   ├── smooth-scroll.js  # GSAP + Lenis butter-smooth momentum scrolling
│   ├── projects.js       # Case study catalog data & dynamic interactive modal viewer
│   └── vendor/           # GSAP, ScrollTrigger & Lenis smooth scroll libraries
│
├── fonts/
│   ├── TiemposFine-Light.woff   # Editorial serif headline font
│   └── Manrope-Medium.ttf       # Modern body & UI font
│
└── images/               # Optimized WebP/PNG project case studies & portrait assets
```

---

## 🎨 Design Tokens & Palette System

The site uses a unified emerald palette configured in `css/main.css`:

- **Canvas Background**: `#FFFFFF` (pure clean white)
- **Surface Background**: `#E0EFE5` (toned sage/emerald surface for alternating sections)
- **Primary Brand Green**: `#02A855`
- **Text Headings**: `#000000` / `#0A2316` (deep forest obsidian)
- **Text Secondary / Muted**: `#4B5563` / `#244734`
- **Header & Footer**: Clean `#FFFFFF` studio white with subtle `rgba(0, 0, 0, 0.08)` borders.
- **Watermark Text**: Animated flowing emerald & deep forest gradient (`#02A855` ↔ `#0A2316` ↔ `#059669` ↔ `#56ba79` ↔ `#047857`).

---

## 🚀 Adding New Pages

To create a new subpage:
1. Duplicate `about.html` or `contact.html`.
2. Update the `<title>`, `<meta name="description">`, and `.page-breadcrumb`.
3. Keep the shared `<header class="site-header">` and `<footer class="site-footer">`.
4. Include the stylesheet links:
   ```html
   <link rel="stylesheet" href="css/main.css">
   <link rel="stylesheet" href="css/components.css">
   <link rel="stylesheet" href="css/pages.css">
   <link rel="stylesheet" href="css/animations.css">
   ```
5. Include the scripts at the bottom:
   ```html
   <script src="js/interactions.js"></script>
   <script src="js/main.js"></script>
   ```

---

## 💻 Local Development Server

Run local preview using Python:
```bash
python3 -m http.server 8080
```
Open: `http://localhost:8080`
