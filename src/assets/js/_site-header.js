//
// Site header ----------------------------------------------------------------
//
// NOTE: 
// This adds a background color on the header when scrolled
// after a certain point
//
// @param: (int) scroll - scrollTop position
//

function siteHeaderScroll(scroll, offset) {

    // 
    // Add .filled class
    // 

    if (scroll >= offset) {
        $('.site-header').addClass('filled');
    }


    //
    // Remove .filled class
    //

    else {
        $('.site-header').removeClass('filled');
    }
}