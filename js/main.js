// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* Nav */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.navmenu');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
    });
  });

  navOverlay.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
// Contact Form
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if(!form) return;
  var inputs = form.querySelectorAll('input');

  inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
          if (input.value === input.defaultValue) {
              input.value = '';
              input.style.color = '#000'; // Change the text color on focus
          }
      });

      input.addEventListener('blur', function() {
          if (input.value === '') {
              input.value = input.defaultValue;
              input.style.color = '#888'; // Revert to default color
          }
      });
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Simple validation (checking if required fields are filled)
      var isValid = true;
      inputs.forEach(function(input) {
          if (input.required && input.value === input.defaultValue) {
              isValid = false;
              input.style.borderColor = 'red'; // Indicate the error
          }
      });

      if (isValid) {
          // Redirect to the thank you page
          window.location.href = 'thankyou.html';
      }
  });
});


