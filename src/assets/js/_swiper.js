//
// Sliders --------------------------------------------------------------------
//

function swiper_init() {

    //
    // Banner slider ----------------------------------------------------------
    //

    var mySwiper = new Swiper('.banner .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    //
    // Custom controls --------------------------------------------------------
    //

    var prevButton = document.querySelector('.custom-swiper-button-prev a');
    var nextButton = document.querySelector('.custom-swiper-button-next a');

    $(prevButton).on('click', function() {
        mySwiper.slidePrev();
    });

    $(nextButton).on('click', function() {
        mySwiper.slideNext();
    });
}
