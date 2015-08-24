// ISTOPE FILTER  --------------

(function(){
"use strict";

  $(function ($) {
      $(window).load(function(){
      
          var $container = $('#iso-wrap');

          $container.isotope({
            // options
            itemSelector: '.iso-block',
            animationEngine: 'best-available',
            layoutMode: 'masonry'
          });

          $container.isotope({
              filter: '*',
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });

         $('.iso-filter-nav a').click(function(){
              $('.iso-filter-nav .current').removeClass('current');
              $(this).addClass('current');
       
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      duration: 750,
                      easing: 'linear',
                      queue: false
                  }
               });
               return false;
          });


          // window resize and layout regenerate
          $(window).resize(function() {
               $container.isotope({
                // options
                itemSelector: '.iso-block',
                layoutMode: 'masonry'
              });
          });
            
      });  
  });


})();
