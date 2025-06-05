document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navbar.classList.remove('active');
    });
  });

  // Sticky header on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.style.padding = '15px 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '20px 0';
      header.style.boxShadow = 'none';
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }

  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = '';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
});
