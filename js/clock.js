/**
 * Real-time Lagos, Nigeria Time Engine
 * Displays live Lagos time (GMT+1 / WAT) with live status pill
 */

function initLagosClock() {
  const clockElement = document.getElementById('lagos-time');
  const statusElement = document.getElementById('availability-status');
  
  if (!clockElement) return;

  function updateTime() {
    try {
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      
      const lagosFormatter = new Intl.DateTimeFormat('en-US', options);
      const timeString = lagosFormatter.format(new Date());
      clockElement.textContent = timeString;

      // Check business hours in Lagos (9 AM to 8 PM)
      const hourOptions = { timeZone: 'Africa/Lagos', hour: 'numeric', hour12: false };
      const currentHour = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(new Date()), 10);
      
      if (statusElement) {
        if (currentHour >= 8 && currentHour < 21) {
          statusElement.textContent = 'Available for freelance and full time';
        } else {
          statusElement.textContent = 'Lagos (WAT) • Responding soon';
        }
      }
    } catch (e) {
      // Fallback
      const now = new Date();
      clockElement.textContent = now.toLocaleTimeString();
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', initLagosClock);
