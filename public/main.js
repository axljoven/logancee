function swiper_init(){var e=new Swiper(".banner .swiper-container",{spaceBetween:30,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),n=document.querySelector(".custom-swiper-button-prev a"),t=document.querySelector(".custom-swiper-button-next a");$(n).on("click",function(){e.slidePrev()}),$(t).on("click",function(){e.slideNext()})}$(document).ready(function(){swiper_init()});