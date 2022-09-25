$(function() {
    setTimeout(function() {
        console.log('this is BUPGUM-1432');

        $('.tab_menu li:eq(0) a').trigger('click');
    }, 100);

    $('.cont_why ul').bxSlider({
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        auto: true,
        pager: false,
        controls: true,
        slideMargin: 30,
        onSliderLoad: function () {
            $('.cont_why ul > li:not(.bx-clone)').eq(0).addClass('active-slide');
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('.cont_why ul > li').removeClass('active-slide');
        },
        onSlideAfter: function(el, oldIndex, newIndex) {
            $('.cont_why ul > li').eq(newIndex+5).addClass('active-slide');
        },
    });

    $('.cont_hit ul').bxSlider({
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        auto: true,
        pager: false,
        controls: true,
    });

    $('.tab_menu > li a').on('click', function() {
        const idx = $(this).parent('li').index();

        $('.tab_menu > li').removeClass('on');
        $('.tab_cont > li').removeClass('on');

        $('.tab_menu > li').eq(idx).addClass('on');
        $('.tab_cont > li').eq(idx).addClass('on');
    });
});
