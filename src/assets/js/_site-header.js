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
// Open mobile header
//

function openMobileHeader() {
    $('.site-header-mobile').addClass('open');
    $('.site-header').addClass('hide');
}

//
// Close mobile header
//

function closeMobileHeader() {
    $('.site-header-mobile').removeClass('open');
    $('.site-header').removeClass('hide');
}



//
// Initialized the mobile header functions
//

function mobileHeaderInit() {

    //
    // Open the mobile header
    //

    $('.burger-menu').on( 'click', function() {
        openMobileHeader();
    })

    //
    // Closes the mobile header
    //

    $('.site-header-mobile-close').on( 'click', function() {
        closeMobileHeader();
    })
    
    //
    // Close the mobile header On Resize
    //
    
    $(window).resize(function() {
        closeMobileHeader();
    });
}
