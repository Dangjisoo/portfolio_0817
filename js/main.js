$(document).ready(function(){
    // fullpage.js 
    $("#fullpage").fullpage({
        autoScrolling: true,
        scrollHorizontally : true,
        navigation : true,
        navigationPosition : "right",
        responsiveWidth: 801
    });
});

$(window).scroll(function(){
    // header scroll 이벤트
    var scroll = $(window).scrollTop();
    if (scroll >= 330){
        $(".header_wrap").addClass("on");
    } else {
        $(".header_wrap").removeClass("on");
    }
});