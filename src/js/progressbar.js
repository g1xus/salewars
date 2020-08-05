function progressBar1() {
    $('#circle33').attr('data-progress', 33);
}
function progressBar2() {
    $('#circle66').attr('data-progress', 66);
}
function progressBar3() {
    $('#circle100').attr('data-progress', 100);
}

let barPos1 = Math.floor($('#circle33').offset().top, 1);
let barPos2 = Math.floor($('#circle66').offset().top, 1);
let barPos3 = Math.floor($('#circle100').offset().top, 1);

let clientHeight = screen.height;

$( document ).scroll(function() {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(posTop > barPos1 - clientHeight) {
        setTimeout(progressBar1, 100);
    }
    if(posTop > barPos2 - clientHeight) {
        setTimeout(progressBar2, 100);
    }
    if(posTop > barPos3 - clientHeight) {
        setTimeout(progressBar3, 100);
    }
});




