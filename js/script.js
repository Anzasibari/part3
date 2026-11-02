// ===== TRIO - Main JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  console.log('TRIO · Hospitality. Elevated. — Welcome!');

  // Example: Smooth scroll for internal anchor links (if any)
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Example: "Bookings" button alert (for demo purposes)
  const bookingBtn = document.querySelector('.btn-outline');
  if (bookingBtn) {
    bookingBtn.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        alert('📅 Thank you for your interest! Please visit our Bookings page for a personalised consultation.');
      }
    });
  }
});