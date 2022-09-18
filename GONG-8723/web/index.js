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


    /* video-js 통한 영상 재생 관련 스크립트 */
    const options = {
        sources: [{
            src: "https://d2j2rcmrtco9nl.cloudfront.net/gongdangipmp/FLV/2021/L307123_01_800k.mp4",
            type: "video/mp4"
        }],
        playbackRates: [.5, .75, 1, 1.25, 1.5],
        poster: "img/sect06_cover.png",
        controls: true,
        preload: "auto",
        width: 900,
        height: 522,
        controlBar: {
            playToggle: true,
            pictureInPictureToggle: false,
            remainingTimeDisplay: true,
            progressControl: true,
            qualitySelector: false,
        }
    };

    const player = videojs('myVideo', options);
    const video = document.querySelector("#myVideo");
    let time = 0;
    let Interval;
    let video_status = false;

    var video_timer = function() {
        //console.log('time', time);
        if(time > 10) {
            player.pause();
            $('.sect06 .cont_pop').css('display', 'block');

            clearInterval(Interval);    //Interval 동작을 중지

        } else {
            time++;
        }
    }

    video.addEventListener("click", function() {
        // console.log('currentTime', player.currentTime());

        if(video_status === false) {
            if(player.currentTime() <= 10) {
                // console.log('11111');
                Interval = setInterval(video_timer, 1000);   //1초마다 timer 동작
                video_status = true;

            } else {
                // console.log('22222');
                clearInterval(Interval);    //Interval 동작을 중지)
                video_status = false;

                player.pause();
                $('.sect06 .cont_pop').css('display', 'block');
            }

        } else if(video_status === true) {
            clearInterval(Interval);    //Interval 동작을 중지)
            video_status = false;

            if(player.currentTime() > 10) {
                player.pause();
                $('.sect06 .cont_pop').css('display', 'block');
            }
        }
    });

    $('.btn_close').on('click', function() {
        $('.sect06 .cont_pop').css('display', 'none');
        clearInterval(Interval);    //Interval 동작을 중지)
    });
});

