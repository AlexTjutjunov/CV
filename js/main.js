$(document).ready(function () {
    $('.works-menu-link').click(function (e) {
        e.preventDefault();
        let value = $(this).attr('data-filter');
        if (value === 'all') {
           $('.works-img').fadeIn(1000);
        } else {
           $('.works-img').not('.' + value).hide(1000);
           $('.works-img').filter('.' + value).fadeIn(1000);
        };
     })
     $('.works-menu-item a').click(function () {
        $('.works-menu-item a').removeClass('active');
        $(this).addClass('active');
     })


      $('.burger').click (function () {
        $('.burger').toggleClass("active")
         $('.nav').toggleClass("open")
         $('body').toggleClass("hidden")
      })
 
 });