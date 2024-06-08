window.addEventListener('DOMContentLoaded', () => {
    VANTA.HALO({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  
    // Fixed expiration time in UNIX timestamp (seconds)
    const fixedExpiryTime = 1717886176 + 167 * 60 * 60; // Add 167 hours
  
    // Countdown timer
    const countdownElement = document.getElementById('countdown');
  
    function updateCountdown() {
      const now = Math.floor(Date.now() / 1000); // Current time in seconds
      const distance = fixedExpiryTime - now;
  
      const days = Math.floor(distance / (60 * 60 * 24));
      const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((distance % (60 * 60)) / 60);
      const seconds = Math.floor(distance % 60);
  
      countdownElement.innerHTML = `Expires in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Link expired, tell me to renew it :3';
      }
    }
  
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  });
  