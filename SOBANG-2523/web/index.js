$(function() {

    setTimeout(function() {
        console.log('this is SOBANG-2523');

        $('.tab_menu li:eq(0) > a').trigger('click');
    }, 100);

    $('.tab_menu > li > a').on('click', function() {
        const idx = $(this).parent('li').index();

        $('.sect03 ul[class*="tab_"] > li').removeClass('active');

        $('.tab_menu > li:eq('+idx+')').addClass('active');
        $('.tab_cont > li:eq('+idx+')').addClass('active');
    });
});


