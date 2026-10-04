/**
 * Google Analytics 4 (GA4) Production Tracker
 * Measurement ID: G-1P6627E2T2
 * 
 * Strict Environment Gate:
 * Analytics events are ONLY loaded and dispatched on production domains:
 * - praisetechy.com
 * - www.praisetechy.com
 * 
 * Excludes localhost, 127.0.0.1, and Cloudflare Pages (*.pages.dev) preview environments.
 * No personally identifiable information (PII) is captured or transmitted.
 */
(function() {
  const hostname = window.location.hostname;
  const isProduction = hostname === 'praisetechy.com' || hostname === 'www.praisetechy.com';

  if (!isProduction) {
    return;
  }

  const GA_ID = 'G-1P6627E2T2';

  // Prevent duplicate script injection
  if (document.querySelector(`script[src*="${GA_ID}"]`)) {
    return;
  }

  // Inject Google Tag Manager gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_ID, {
    send_page_view: true
  });

  // Track Booking Link Click Intent (records click intent, not completed bookings; no PII)
  document.addEventListener('click', function(e) {
    const bookingLink = e.target.closest('a[href*="cal.com/praisetechy"]');
    if (bookingLink) {
      gtag('event', 'booking_click_intent', {
        event_category: 'engagement',
        event_label: bookingLink.getAttribute('aria-label') || bookingLink.textContent.trim() || 'Book a call'
      });
    }
  }, { passive: true });
})();
