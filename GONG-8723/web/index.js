$(function() {

    setTimeout(function() {
        console.log('this is GONG-8723');
    }, 100);



    $('.sect01 .cont_quote > ul').bxSlider({
        mode: "vertical",
        auto: true,
        pager: false,
        controls: false,
        speed: 2500,
        minSlides: 1,
        slideMargin: 96,
        useCSS: true,
    });

    $('.sect01 .cont_review > ul').bxSlider({
        pager: false,
        controls: false,
        ticker : true,
        speed : 25000,
        slideMargin: 18,
    });

    $('.sect03 .slide_review').bxSlider({
        pager: false,
        controls: false,
        speed: 25000,
        ticker: true,
    });
});
