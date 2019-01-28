//
// Sliders --------------------------------------------------------------------
//

function slick_init() {

    //
    // Banner slider ----------------------------------------------------------
    //

    $('.banner .slick-fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      draggable: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    })



    //
    // Custom controls
    //

    var prevButton = document.querySelector('.banner .slider-button-prev a');
    var nextButton = document.querySelector('.banner .slider-button-next a');

    $(prevButton).on('click', function() {
        $('.banner .slick-fade').slick('slickPrev');
    });

    $(nextButton).on('click', function() {
        $('.banner .slick-fade').slick('slickNext');
    });




    //
    // Clients Slider ---------------------------------------------------------
    //

    $('.clients .responsive').slick({
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 285,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
}
