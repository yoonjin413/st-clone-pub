$(function() {

    setTimeout(function() {
        console.log('this is CONPR-32');

    }, 100);

    $('.sect04 ul').bxSlider({
        pager: false,
        controls: false,
        auto: true,
        pause: 3000,
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 384,
        slideMargin: 24
    });
});
