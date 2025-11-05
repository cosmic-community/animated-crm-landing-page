(function() {
  'use strict';

  // Wait for jQuery to be loaded
  function initAnimations() {
    if (typeof jQuery === 'undefined') {
      setTimeout(initAnimations, 100);
      return;
    }

    const $ = jQuery;

    // Animate hero section
    $(document).ready(function() {
      setTimeout(function() {
        $('.hero-title').css('opacity', '1').addClass('animate-slide-up');
      }, 200);

      setTimeout(function() {
        $('.hero-subtitle').css('opacity', '1').addClass('animate-slide-up');
      }, 400);

      setTimeout(function() {
        $('.hero-buttons').css('opacity', '1').addClass('animate-slide-up');
      }, 600);
    });

    // Animate feature cards on scroll
    $(window).on('scroll', function() {
      $('.feature-card').each(function(index) {
        const elementTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (elementTop < windowBottom - 100) {
          setTimeout(() => {
            $(this).css('opacity', '1').addClass('animate-slide-up');
          }, index * 100);
        }
      });
    });

    // Animate statistics counter
    function animateCounter($element) {
      const target = parseInt($element.data('target'));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        $element.text(Math.floor(current));
      }, duration / steps);
    }

    let statsAnimated = false;
    $(window).on('scroll', function() {
      if (!statsAnimated) {
        const statsSection = $('.stat-number').first().closest('section');
        if (statsSection.length) {
          const sectionTop = statsSection.offset().top;
          const windowBottom = $(window).scrollTop() + $(window).height();

          if (sectionTop < windowBottom - 200) {
            statsAnimated = true;
            $('.stat-number span').each(function() {
              animateCounter($(this));
            });
          }
        }
      }
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
      const target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 800, 'swing');
      }
    });

    // Parallax effect for waves
    $(window).on('scroll', function() {
      const scrolled = $(window).scrollTop();
      $('.parallax use').each(function(index) {
        const speed = (index + 1) * 0.2;
        const yPos = -(scrolled * speed);
        $(this).attr('y', yPos);
      });
    });
  }

  initAnimations();
})();