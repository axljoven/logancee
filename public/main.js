function slick_init(){$(".banner .slick-fade").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",draggable:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1});var e=document.querySelector(".banner .slider-button-prev a"),i=document.querySelector(".banner .slider-button-next a");$(e).on("click",function(){$(".banner .slick-fade").slick("slickPrev")}),$(i).on("click",function(){$(".banner .slick-fade").slick("slickNext")}),$(".clients .responsive").slick({arrows:!1,infinite:!0,speed:300,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,infinite:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:285,settings:{slidesToShow:1,slidesToScroll:1}}]})}function match_height_init(){$(".swiper-container .swiper-slide").matchHeight()}function siteHeaderScroll(e,i){i<=e?$(".site-header").addClass("filled"):$(".site-header").removeClass("filled")}function toggleMobileHeader(){$(".site-header-mobile").toggleClass("open"),$(".site-header").toggleClass("hide")}function mobileHeaderOpen(){$(".burger-menu").on("click",function(){toggleMobileHeader()})}function mobileHeaderClose(){$(".site-header-mobile-close").on("click",function(){toggleMobileHeader()})}$(document).ready(function(){slick_init(),match_height_init(),mobileHeaderOpen(),mobileHeaderClose()}),$(window).scroll(function(){siteHeaderScroll($(window).scrollTop(),100)});