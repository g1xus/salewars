$('.header-toggler').on('click', function(){
    $('.header-toggler__element_1').toggleClass('header-toggler__element_1-active');
    $('.header-toggler__element_2').toggleClass('header-toggler__element_2-active');
    $('.header-toggler__element_3').toggleClass('header-toggler__element_3-active');
    $('.header-nav').toggleClass('header-nav_active');
    $('.container').toggleClass('.content_blur');

});
if ($(window).width() > '992'){
    $('body').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.header-hero-parallax__background').css(
            'transform',
            'translate(-' + x * 30 + 'px, -' + y * 30 + 'px'
        )

        $('.header-hero-parallax__content').css(
            'transform',
            'translate(' + x * 50 + 'px, ' + y * 50 + 'px'
        )
    });
}