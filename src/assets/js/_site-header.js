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



//
// Mobile Header functionality ------------------------------------------------
//

//
// Toggles the mobile header
//

function toggleMobileHeader() {

    //
    // Shows the mobile header
    //

    $('.site-header-mobile').toggleClass('open');

    //
    // Hides the primary header because 
    // it conflicts with the mobile header animation
    //

	$('.site-header').toggleClass('hide');
}

//
// Triggers the toggleMobileHeader() when burger menu is clicked
//

function mobileHeaderOpen() {
    $('.burger-menu').on( 'click', function() {
        toggleMobileHeader();
    })
}

//
// Closes the mobile header
//

function mobileHeaderClose() {
    $('.site-header-mobile-close').on( 'click', function() {
        toggleMobileHeader();
    })
}