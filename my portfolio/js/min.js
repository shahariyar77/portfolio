// WOW active
new WOW().init();

$(document).ready(function(){
    var typed = new Typed('.typing', {
        strings: [
            'Developer', 'Freelancer', 'Designer'],
            typeSpeed:100,
            backSpeed:100,
            loop:true,
        smartBackspace: true // Default value
        

      });
    var typed = new Typed('.typing-2', {
        strings: [
            'Developer', 'Freelancer', 'Designer'],
            typeSpeed:100,
            backSpeed:100,
            loop:true,
        smartBackspace: true // Default value
      });

      // manu scrool
    $(window).on('scroll', function (){   
        var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

      });



// project isotope
      $(".project-list").isotope();
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".project-list").isotope({
            filter: selector,
            
        });
    });











    $(".burger-tst").owlCarousel({
        items:1,
        nav:false,
        dots:false,
        autoplay:false,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
    
            }
        }

    });
    $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close, .offcanvas-overylay").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
      });







    
  });