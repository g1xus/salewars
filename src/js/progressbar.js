function progressBar() {
    $('#circle33').attr('data-progress', 33);
    $('#circle66').attr('data-progress', 66);
    $('#circle100').attr('data-progress', 100);
}
$( document ).scroll(function() {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(posTop < $('.ko-progress-circle').offset().top) {
        setTimeout(progressBar, 200);
    }
});