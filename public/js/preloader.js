/*=====================================
	  Preloader JS
	======================================*/

//After 2s preloader is fadeOut
$('.preloader').delay(700).fadeOut('slow');
setTimeout(function() {
    //After 2s, the no-scroll class of the body will be removed
    $('body').removeClass('no-scroll');
}, 700); //Here you can change preloader time