/**
 * CMC Roof Plumbing - script.js
 * Plain vanilla JS, no external libraries, < 5 KB
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation drawer toggle
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav when clicking a link
    var mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Handle quote request form submission
  var quoteForm = document.getElementById('quoteForm');
  var successMsg = document.getElementById('formSuccess');

  if (quoteForm && successMsg) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Basic validation
      var name = document.getElementById('clientName');
      var phone = document.getElementById('clientPhone');

      if (!name.value.trim() || !phone.value.trim()) {
        alert('Please enter your name and contact phone number.');
        return;
      }

      // Hide form fields & display confirmation
      quoteForm.style.display = 'none';
      successMsg.classList.add('is-active');
    });
  }
});
