function swiper_init(){var e=new Swiper(".banner .swiper-container",{spaceBetween:30,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=document.querySelector(".custom-swiper-button-prev a"),n=document.querySelector(".custom-swiper-button-next a");$(i).on("click",function(){e.slidePrev()}),$(n).on("click",function(){e.slideNext()})}function match_height_init(){$(".swiper-container .swiper-slide").matchHeight()}function siteHeaderScroll(e,i){i<=e?$(".site-header").addClass("filled"):$(".site-header").removeClass("filled")}function toggleMobileHeader(){$(".site-header-mobile").toggleClass("open"),$(".site-header").toggleClass("hide")}function mobileHeaderOpen(){$(".burger-menu").on("click",function(){toggleMobileHeader()})}function mobileHeaderClose(){$(".site-header-mobile-close").on("click",function(){toggleMobileHeader()})}$(document).ready(function(){swiper_init(),match_height_init(),mobileHeaderOpen(),mobileHeaderClose()}),$(window).scroll(function(){siteHeaderScroll($(window).scrollTop(),100)});