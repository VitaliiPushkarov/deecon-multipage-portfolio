// when document is fully loaded
   $(document).ready(function () {
    $('.testimonial-slider').slick({
      dots: false,
      speed: 700,
      infinite: true,
      variableWidth: true,
      touchThreshold: 300,
      prevArrow: $('.right-arrow'),
      nextArrow: $('.left-arrow'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: true,
          }
        },
        {
          breakpoint: 479,
          settings: {
            
          }
        }
      ]
    });
  });

    
    
    