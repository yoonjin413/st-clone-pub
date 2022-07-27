$(function() {
    setTimeout(function() {
        //console.log('this is GONG-8394');
    }, 100);

    $('.user_slider').bxSlider({
        mode: "vertical",
        ticker: true,
        pager: false,
        controls: false,
        minSlides: 25,
        maxSlides: 25,
        speed: 60000,
        slideMargin: 40
    });

});

/* 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!! */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어) */
var player;
var onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
        height: '574',  //변경가능-영상 높이
        width: '1105',  //변경가능-영상 너비
        videoId: 'I02ULETFESI',  //변경-영상ID
        //playerVars: {
        //    'rel': 0,                   // 연관동영상 표시여부(0:표시안함)
        //    'controls': 0,              // 플레이어 컨트롤러 표시여부(0:표시안함)
        //    'autoplay': 1,              // 자동재생 여부(1:자동재생 함, mute와 함께 설정)
        //    'mute': 1,                  // 음소거여부(1:음소거 함)
        //    'loop': 1,                  // 반복재생여부(1:반복재생 함)
        //    'playsinline': 1,           // iOS환경에서 전체화면으로 재생하지 않게
        //    'playlist': 'I02ULETFESI',  // 재생할 영상 리스트
        //},
        events: {
            'onReady': onPlayerReady,               //onReady 상태일 때
            'onStateChange': onPlayerStateChange,   //onStateChange 상태일 때
        }
    });
};

/* API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다. */
var onPlayerReady = function(event) {
    event.target.playVideo();
};

/*
API는 플레이어의 상태가 변화될 때 아래의 function을 불러올 것이다.
이 function은 비디오가 재생되고 있을 때를 가르킨다.(state=1),
*/
var done = false;
var onPlayerStateChange = function(event) {
    //console.log('data', event.data);

    // 재생 상태에 따라 썸네일 혹은 iframe 영상 호출 영역 설정
    //if(event.data < 1) {
    //    // 재생 전 혹은 재생 종료
    //    $('.cont_cover').css('display', 'block');
    //    $('iframe#player').css('display', 'none');
    //
    //} else {
    //    // 재생 중 혹은 일시정시
    //    $('.cont_cover').css('display', 'none');
    //    $('iframe#player').css('display', 'block');
    //}

    if(event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        done = true;
    }
};

var stopVideo = function() {
    player.stopVideo();
};
