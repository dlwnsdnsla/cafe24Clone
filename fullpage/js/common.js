$(window).on('load', function(){

    var deviceSize = 1024
function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}
var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
if (scD>0) {
    deviceSize = deviceSize - scD
}
var ww = $(window).width()
if (ww>deviceSize ) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

        

$(window).on('resize', function(){
    let ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if (ww<=deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})
    
















      //헤더 scroll
$(window).scroll(function(){  
    var num = $(this).scrollTop();  
    if( num > 10 ){  
        $('#header').addClass('on')
    }
    else{
        $("#header").removeClass('on')
    }

});


$(".m_depth1>li").click(function(){
    $(this).toggleClass("on");
 })


 $('.depth1').on('mouseover focus', function(){
    $(".box_bg").css("display","block");
    $(".box_bg").stop().animate({height:"200px"},100);
    $(".depth2").stop().animate({top:"0px"},100);
    $("#header").css("border-bottom","1px solid rgb(189, 189, 189, 0.3)");
})
$('.depth1').on('mouseleave blur', function(){
    $(".box_bg").css("display","none");
    $(".box_bg").stop().animate({height:"0"},100);
    $(".depth2").stop().animate({top:"-50px"},100);
    $("#header").css("border-bottom","0px solid rgb(189, 189, 189, 0.3)");
})









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


   


// $(".depth1").on("mouseover focus",function(){
//     $(".box_bg").css("display","block");
//    });
//    $(".depth1").on("mouseleave blur",function(){
//     $(".box_bg").css("display","none");
//    });  






$('.depth1').on('mouseover focus', function(){
    $(".box_bg").css("display","block");
    $(".box_bg").stop().animate({height:"200px"},100);
    $(".depth2").stop().animate({top:"0px"},100);
    $("#header").css("border-bottom","1px solid rgb(189, 189, 189, 0.3)");
})
$('.depth1').on('mouseleave blur', function(){
    $(".box_bg").css("display","none");
    $(".box_bg").stop().animate({height:"0"},100);
    $(".depth2").stop().animate({top:"-50px"},100);
    $("#header").css("border-bottom","0px solid rgb(189, 189, 189, 0.3)");
})






})




