$(function() {

    setTimeout(function() {
        console.log('this is CONPR-32');

        pie_draw(95, '.cont_pie:eq(0)');
        pie_draw(87, '.cont_pie:eq(1)');
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
    var pie_draw = function(max, className) {
        let i = 1;

        // max 수치까지 원형 그래프 그려질 수 있도록 setInterval 호출
        let func1 = setInterval(function() {
            if(i < max) {
                pie_color(i, className);
                i++;

            } else {
                clearInterval(func1);
            }
        },10);
    };

    /* 원형 차트 그리기 */
    var pie_color = function(i, className) {
        $(className).css({
            "background": "conic-gradient(#172C8D 0% "+i+"%, #F2F2F2 "+i+"% 100%)"
        });
    };
});
