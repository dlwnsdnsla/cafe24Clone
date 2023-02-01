$(function(){




$(".bar").on("click",function(){
    $(".close").css("display","block");
    });









$(".bar").on("click",function(){
 $(".m_menu").stop().animate({right:"0"},200);
 $(".black_back").css("display","block");
});
$(".close").on("click",function(){
 $(".m_menu").stop().animate({right:"-334px"},200);
 $(".black_back").css("display","none")
 $(".close").css("display","none")
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















})




