$(function(){


    $(function(){
        var $header = $('#header'); //헤더를 변수에 넣기
        var $page = $('.cont2'); //색상이 변할 부분
        var $window = $(window);
        var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
        
        $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
          pageOffsetTop = $page.offset().top;
        });
        
        $window.on('scroll', function(){ //스크롤시
          var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
          $header.toggleClass('down', scrolled); //클래스 토글
        });
      });















$(".bar").on("click",function(){
 $(".m_menu").stop().animate({right:"0"},200);
 $(".black_back").css("display","block");
});
$(".black_back").on("click",function(){
 $(".m_menu").stop().animate({right:"-334px"},200);
 $(".black_back").css("display","none")
});    
$(".m_depth1>li").on("click",function(){
    $(this).find(".m_depth2").stop().slideToggle();
   }); 



$(".depth1").on("mouseover focus",function(){
    $(".box_bg").css("display","block");
   });
   $(".depth1").on("mouseleave blur",function(){
    $(".box_bg").css("display","none");
   });  

   $("#header").on("mouseover focus",function(){
    $("#header").css("border-bottom","1px solid rgb(189, 189, 189, 1)");
   });
   $("#header").on("mouseleave blur",function(){
    $("#header").css("border-bottom","0");
   });  














})




