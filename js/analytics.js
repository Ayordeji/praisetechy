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

/**
 * Real-Time Visitor Alert System
 * Dispatches an instant notification email to praisetechy001@gmail.com
 * when a new human visitor arrives on praisetechy.com.
 * 
 * Features:
 * - Session Deduplication: 1 email per browsing session (no inbox spamming)
 * - Bot & Crawler Exclusion: Discards search crawlers, automated scrapers, and headless browsers
 * - Admin Bypass: Appending ?admin=1 sets a permanent local flag to ignore your own visits
 * - Rich Details: Geolocation (City/Region/Country), ISP/Org, Device, Referrer, Page, Timezone
 */
(function() {
  const hostname = window.location.hostname;
  const isProduction = hostname === 'praisetechy.com' || hostname === 'www.praisetechy.com';
  const urlParams = new URLSearchParams(window.location.search);
  const isTestAlert = urlParams.has('test_alert');

  // Handle Admin exclusion toggles
  if (urlParams.has('admin') || urlParams.has('ignore')) {
    localStorage.setItem('praise_ignore_analytics', 'true');
    console.info('[Analytics] Admin mode active: visitor alert emails are disabled for this device.');
  } else if (urlParams.has('admin_reset')) {
    localStorage.removeItem('praise_ignore_analytics');
    console.info('[Analytics] Admin mode cleared: visitor alerts re-enabled.');
  }

  // Abort if not in production and not testing
  if (!isProduction && !isTestAlert) {
    return;
  }

  // Abort if this device is marked as admin
  if (localStorage.getItem('praise_ignore_analytics') === 'true' && !isTestAlert) {
    return;
  }

  // Abort if visitor has already triggered an alert in this session
  if (sessionStorage.getItem('praise_visitor_alert_sent') && !isTestAlert) {
    return;
  }

  // Bot & Crawler Detection
  if (navigator.webdriver) {
    return;
  }
  const ua = navigator.userAgent || '';
  const botPattern = /bot|crawl|spider|slurp|googlebot|bingbot|yandex|baidu|duckduckbot|facebot|facebookexternalhit|twitterbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkshare|w3c_validator/i;
  if (botPattern.test(ua)) {
    return;
  }

  // Detect Device & Platform
  function getDeviceType() {
    const width = window.innerWidth;
    if (/Mobi|Android|iPhone|iPod/i.test(ua)) return 'Mobile Phone';
    if (/iPad|Tablet/i.test(ua) || (width >= 768 && width <= 1024 && 'ontouchstart' in window)) return 'Tablet';
    return 'Desktop / Laptop';
  }

  function getPlatform() {
    if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';
    if (/Android/i.test(ua)) return 'Android';
    if (/Macintosh|Mac OS X/i.test(ua)) return 'macOS';
    if (/Windows/i.test(ua)) return 'Windows';
    if (/Linux/i.test(ua)) return 'Linux';
    return 'Unknown OS';
  }

  function getBrowser() {
    if (/Edg\//i.test(ua)) return 'Microsoft Edge';
    if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) return 'Google Chrome';
    if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) return 'Apple Safari';
    if (/Firefox\//i.test(ua)) return 'Mozilla Firefox';
    return 'Other Browser';
  }

  // Resolve referrer nicely
  function getReferrer() {
    const ref = document.referrer;
    if (!ref) return 'Direct Visit / Bookmark';
    try {
      const refUrl = new URL(ref);
      if (refUrl.hostname === window.location.hostname) return 'Internal Navigation';
      if (/t\.co|twitter\.com|x\.com/i.test(refUrl.hostname)) return 'X / Twitter (' + ref + ')';
      if (/linkedin\.com/i.test(refUrl.hostname)) return 'LinkedIn (' + ref + ')';
      if (/google\./i.test(refUrl.hostname)) return 'Google Search (' + ref + ')';
      if (/facebook\.com|instagram\.com/i.test(refUrl.hostname)) return 'Meta (' + ref + ')';
      return ref;
    } catch (e) {
      return ref;
    }
  }

  // Wait 1.5s after load to avoid competing with page rendering
  setTimeout(async function() {
    try {
      const referrer = getReferrer();
      if (referrer === 'Internal Navigation') {
        return;
      }

      // Mark session early to prevent duplicate calls
      sessionStorage.setItem('praise_visitor_alert_sent', 'true');

      let locationStr = 'Resolving location...';
      let ispStr = 'Standard ISP';

      // Geolocation lookup with 3.5s timeout
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        const geoRes = await fetch('https://free.freeipapi.com/api/v1/json', { signal: controller.signal });
        clearTimeout(timeoutId);

        if (geoRes.ok) {
          const geo = await geoRes.json();
          const parts = [geo.cityName, geo.regionName, geo.countryName].filter(Boolean);
          locationStr = parts.length > 0 ? parts.join(', ') : (geo.countryName || 'Unknown');
          if (geo.asnOrganization) {
            ispStr = geo.asnOrganization;
          }
        }
      } catch (geoErr) {
        locationStr = 'Unknown (Timezone: ' + (Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A') + ')';
      }

      const payload = {
        _subject: '⚡ New Visitor on praisetechy.com!',
        _template: 'table',
        _captcha: 'false',
        'Landing Page': window.location.pathname + window.location.search,
        'Page Title': document.title,
        'Referrer / Traffic Source': referrer,
        'Visitor Location': locationStr,
        'Network / ISP': ispStr,
        'Device': getDeviceType() + ' (' + getPlatform() + ' - ' + getBrowser() + ')',
        'Screen Resolution': window.screen.width + 'x' + window.screen.height + ' (Viewport: ' + window.innerWidth + 'x' + window.innerHeight + ')',
        'Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
        'Language': navigator.language || 'N/A',
        'Timestamp (UTC)': new Date().toUTCString(),
        'Timestamp (Local)': new Date().toLocaleString()
      };

      await fetch('https://formsubmit.co/ajax/praisetechy001@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      // Fail silently to never interfere with user experience
    }
  }, 1500);
})();
