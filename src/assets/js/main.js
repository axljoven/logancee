//@prepros-append _swiper.js
//@prepros-append _matchHeight.js
//@prepros-append _site-header.js

//
// DOM Ready ------------------------------------------------------------------
//

$(document).ready(function() {

    //
    // Swiper Sliders
    //

    swiper_init();

    //
    // Match Height JS
    //

    match_height_init();

    //
    // Initializes the mobile header
    //

    mobileHeaderOpen();

    //
    // Closes the mobile header
    //

    mobileHeaderClose();
    
});



//
// On Scroll ------------------------------------------------------------------
//

$(window).scroll(function() {

    //
    // Site Header Scroll 
    //

    siteHeaderScroll($(window).scrollTop(), 100);
});