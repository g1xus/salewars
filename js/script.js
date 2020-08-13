$('.header-toggler').on('click', function(){
    $('.header-toggler__element_1').toggleClass('header-toggler__element_1-active');
    $('.header-toggler__element_2').toggleClass('header-toggler__element_2-active');
    $('.header-toggler__element_3').toggleClass('header-toggler__element_3-active');
    $('.header-nav').toggleClass('header-nav_active');
    $('body').toggleClass('body_active');

});
$('.header-nav__link').on('click', function(){
    $('.header-nav').removeClass('header-nav_active');
    $('.header-toggler__element_1').removeClass('header-toggler__element_1-active');
    $('.header-toggler__element_2').removeClass('header-toggler__element_2-active');
    $('.header-toggler__element_3').removeClass('header-toggler__element_3-active');
    $('body').removeClass('body_active');

});
if ($(window).width() > '992'){
    $('body').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.parallax__background_1').css(
            'transform',
            'translate(-' + x * 40 + 'px, -' + y * 40 + 'px'
        )

        $('.parallax__background_2').css(
            'transform',
            'translate(-' + x * 70 + 'px, -' + y * 70 + 'px'
        )
        $('.parallax__background_3').css(
            'transform',
            'translate(' + x * 70 + 'px, ' + y * 70 + 'px'
        )    
    });
}
