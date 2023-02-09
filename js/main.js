$(window).on('load', function(){





    $('.slide-group').slick({
        autoplay:true,        
        autoplaySpeed:3000,  
        dots:true,          
        arrows:true,          
        prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [ 
        {  
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          } 
        },
        { 
          breakpoint: 768,
          settings: {    
            slidesToShow: 1
          } 
        }
      ]
    
    })




    $(window).scroll( function(){
      $('#section>.cont').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight()/3;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
            $(this).addClass('animate');
          }else {
            $(this).removeClass('animate');
          }
      }); 
  });
  
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.gotop').fadeIn();
    } else {
        $('.gotop').fadeOut();
    }
    });
    $('.gotop').click(function(){
    $('html, body').animate({scrollTop : 0},600);
    return false;
    });
});