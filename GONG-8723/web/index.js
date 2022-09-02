$(function() {

    setTimeout(function() {
        console.log('this is GONG-8723');
    }, 100);



    $('.sect01 .cont_quote > ul').bxSlider({
        mode: "vertical",
        auto: true,
        // ticker: true,
        pager: false,
        controls: false,
        speed: 3000,
        // pause: 3000,
        minSlides: 1,
        slideMargin: 96,
        useCSS: true,
    });

    $('.sect01 .cont_review > ul').bxSlider({
        // auto: true,
        // ticker : true,
        // useCSS : true,
        // speed : 3000,
        // // pause: 3000,
        // minSlides:1,
        // maxSlides: 50,
        // moveSlides: 1,
        // slideWidth: 700,

        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth:700,
        useCSS : 3000,
        speed : 40000,
        ticker : true,
        //tickerHover : true
    });
});
