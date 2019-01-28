//@prepros-append _slick.js
//@prepros-append _matchHeight.js
//@prepros-append _site-header.js

//
// DOM Ready ------------------------------------------------------------------
//

$(document).ready(function() {

    //
    // Slick.js Sliders
    //

    slick_init();

    //
    // Match Height JS
    //

    match_height_init();

    //
    // Initializes the mobile header
    //

    mobileHeaderInit();
    
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


