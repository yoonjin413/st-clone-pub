$(function() {

    setTimeout(function() {
        //console.log('this is CONPR-32');
    }, 100);

    let sect04_slide = $('.sect04 ul').bxSlider({
        pager: false,
        controls: false,
        auto: true,
        pause: 3000,
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 384,
        slideMargin: 24
    });

    let sect06_slide = $('.sect06 ul').bxSlider({
        pager: false,
        controls: false,
        auto: true,
        pause: 3000,
    });

    /* 원형 차트 script */
    var draw_pie = function(max, className) {
        let i = 1;

        // max 수치까지 원형 그래프 그려질 수 있도록 setInterval 호출
        let func1 = setInterval(function() {
            if(i < max) {
                color_pie(i, className);
                i++;

            } else {
                clearInterval(func1);
            }
        },10);
    };

    /* 원형 차트 그리기 */
    var color_pie = function(i, className) {
        $(className).css({
            "background": "conic-gradient(#172C8D 0% "+i+"%, #F2F2F2 "+i+"% 100%)"
        });
    };

    /* 막대 차트 animate */
    var draw_bar = function() {
        var maxIndex = $(".cont_data li").length;

        for(var i=0; i<maxIndex; i++) {
            var val = $(".cont_data li").eq(i).children('span').attr('rel');

            $(".cont_data li").eq(i).children('span').animate({
                "height": val+"%"
            },1000);
        }
    };


    var isVisible = false;

    $(window).on('scroll',function() {
        if (checkVisible($('.cont_figure .cont_graph')) && !isVisible) {
            draw_pie(95, '.cont_pie:eq(0)');
            draw_pie(87, '.cont_pie:eq(1)');

            draw_bar();

            isVisible = true;
        }
    });

    var checkVisible = function(elm, eval) {
        eval = eval || "object visible";

        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if(eval == "object visible") {
            return ((y + 500 < (viewportHeight + scrolltop)));
        }
    };
});
