document.addEventListener('DOMContentLoaded', () => {
  // Function to trigger animations
  const startAnimations = () => {
      const heroSection = document.querySelector('.hero');
      const heroContent = document.querySelector('.hero-content');
      const navbar = document.getElementById('navbar');
      const bottomNavbar = document.querySelector('.bottom-floating-navbar');

      // Remove animations classes before adding them again
      heroSection.classList.remove('animate');
      heroContent.classList.remove('animate');
      navbar.classList.remove('animate');
      bottomNavbar.classList.remove('animate');

      // Force reflow to reset the animations
      void heroSection.offsetWidth;

      // Add animation classes with a slight delay for smooth appearance
      setTimeout(() => {
          heroSection.classList.add('animate');
          heroContent.classList.add('animate');
          navbar.classList.add('animate');
          bottomNavbar.classList.add('animate');
      }, 500); // Adjust timing as needed
  };

  // Run the function to start animations on page load
  startAnimations();
});




  // Grab elements
  document.addEventListener('DOMContentLoaded', () => {
    // Grab elements
    const menuToggleIcon = document.getElementById("menu-toggle-icon");
    const mobileMenu = document.getElementById('menu-container');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('activated');
        menuToggleIcon.classList.toggle('activated');
    };

    menuToggleIcon.addEventListener('click', toggleMenu);
});
  

//botton nav bar slide

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Trigger hero animation
  const heroSection = document.querySelector('.hero');
  heroSection.classList.add('animate');

  // Delay the bottom nav bar animation to sync with hero animation
  setTimeout(() => {
      const bottomNavbar = document.querySelector('.bottom-floating-navbar');
      bottomNavbar.classList.add('animate');
  }, 500); // 2.5s to match the hero animation duration
});




//bottom nav bar clicking popup

// JavaScript to toggle the pop-up window
document.querySelectorAll('.icon-container').forEach((icon) => {
  icon.addEventListener('click', function (event) {
      event.preventDefault();
      const popupId = icon.getAttribute('data-popup');
      const popup = document.getElementById(popupId);

      // Hide all popups
      document.querySelectorAll('.popup-window').forEach(popup => {
          popup.style.display = 'none';
          popup.classList.remove('animate');
      });

      // Toggle the selected popup
      if (popup.style.display === 'block') {
          popup.style.display = 'none';
      } else {
          popup.style.display = 'block';
          popup.classList.add('animate');
      }
  });
});

// Close popup if clicked outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.icon-container') && !event.target.closest('.popup-window')) {
      document.querySelectorAll('.popup-window').forEach(popup => {
          popup.style.display = 'none';
          popup.classList.remove('animate');
      });
  }
});












