/*================================================
| | | | Preloade
================================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(50).fadeOut('slow');
});


/*================================================
| | | | place
================================================== */

$ (function() {
    $("#img").owlCarousel({
        item: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause : true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
        
        
        
    });
})

$(function(){
    $('#gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery :{
      enabled : true
  }

});
});



/* nav */

$(function(){
    
    showHideNav();
    
    $(window).scroll(function(){
        showHideNav();
    });
    
    
    function showHideNav(){
        
        if( $(window).scrollTop() >50){
            $("nav").addClass("white-nav-top");
            
            $(".navbar-brand img").attr("src", "img/logo/logo-tb1.png");
            
        }
        else{
            
            $("nav").removeClass("white-nav-top");
            
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            
            
        }
         
    }
    
    
});





