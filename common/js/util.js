$(function() {
    setTimeout(function() {
        //console.log('this is /common/util.js');
    }, 100);
});

const go_to_area = function(area) {
    $('html, body').animate({
        scrollTop : $(area).offset().top
    }, 'slow');
};
