document.addEventListener('DOMContentLoaded', () => {
  // Function to trigger animations
  const startAnimations = () => {
      const heroSection = document.querySelector('.work-card');
      const heroContent = document.querySelector('.work-card-wrapper');
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
  const heroSection = document.querySelector('.work-card');
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


//cta section animation

document.addEventListener("DOMContentLoaded", function () {
  const ctaComponent = document.querySelector('.cta-componant');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ctaComponent.classList.add('visible');
        observer.unobserve(ctaComponent); // Stop observing once visible
      }
    });
  }, { threshold: 0.1 }); // Trigger when at least 10% is visible

  observer.observe(ctaComponent); // Start observing the element
});


//work section

document.addEventListener("DOMContentLoaded", () => {
const components = document.querySelectorAll(".work-big-card-wrapper, .work-small-card-wrapper-img-1,.work-small-card-wrapper-img-2, .work-big-card-wrapper");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-float");
        observer.unobserve(entry.target); // Optional: Stop observing once animated
      }
    });
  },
  { threshold: 0.1 } // Trigger when 10% of the element is in view
);

components.forEach((component) => {
  observer.observe(component);
});
});

document.addEventListener("DOMContentLoaded", () => {
  // Trigger sliding color animation for the top image container on page load
  const topSlidingColor = document.querySelector(".work-content-img .sliding-color");
  if (topSlidingColor) {
    topSlidingColor.classList.add("slide-down");
  }

  // Selecting all elements with the class 'work-content-img'
  const components = document.querySelectorAll(".work-content-img");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-down");

          // Trigger sliding color animation when the section is in view
          const slidingColor = entry.target.querySelector(".sliding-color");
          if (slidingColor) {
            slidingColor.classList.add("slide-down");
          }

          // Optional: Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0. } // Adjust threshold value as needed for more precise triggering
  );

  // Start observing each component
  components.forEach((component) => {
    observer.observe(component);
  });
});


//work section button flowing mouse
document.querySelectorAll('.project-container').forEach(container => {
const btn = container.querySelector('.view-project-button');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

container.addEventListener('mouseenter', () => {
    btn.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
    btn.style.display = 'none';
});
});





//last cta text and button float

document.addEventListener("DOMContentLoaded", () => {
  const components = document.querySelectorAll(".text-block, .get-started-button");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-float");
          observer.unobserve(entry.target); // Optional: Stop observing once animated
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is in view
  );

  components.forEach((component) => {
    observer.observe(component);
  });
});


//fix nav bar to top of the footer

window.addEventListener("scroll", function() {
  const bottomNavBar = document.getElementById("bottom-navbar");
  const footer = document.getElementById("footer");

  // Get the distance from the top of the viewport to the footer's top
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Check if the bottom of the navbar is close to the top of the footer
  if (footerTop <= windowHeight) {
      // Stop following the scroll by setting position to absolute
      bottomNavBar.style.position = "absolute";
      bottomNavBar.style.bottom = `${windowHeight - footerTop}px`;
  } else {
      // Make it fixed again when scrolling up
      bottomNavBar.style.position = "fixed";
      bottomNavBar.style.bottom = "0";
  }
});



