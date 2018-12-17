<template>
  <div class="banner">
    <div class="ui container">

      <!-- Slider main container -->
      <div class="swiper-container">
        
		<!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div v-for="(slide, index) in slides" v-bind:key="index" class="swiper-slide">
            <h2 class="banner_preheader">{{ slide.preheader }}</h2>
            <h3 class="banner_header">{{ slide.header }}</h3>
            <p class="banner_content">{{ slide.content }}</p>
          </div>
        </div>

        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="custom-swiper-button-prev"><a href="javascript:void(0)">prev</a></div>
        <div class="custom-swiper-button-next"><a href="javascript:void(0)">next</a></div>

      </div> <!-- swiper container -->

    </div> <!-- ui container -->
  </div> <!-- banner -->
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      //
      // Slides ---------------------------------------------------------------
      //

      slides: [
        {
          preheader: "Welcome",
          header: "Logan Creative Studio",
          content:
            "Best digital solutions for your business! Let we bring amazing for you."
        },
        {
          preheader: "Welcome",
          header: "Logan Creative Studio",
          content:
            "Best digital solutions for your business! Let we bring amazing for you."
        },
        {
          preheader: "Welcome",
          header: "Logan Creative Studio",
          content:
            "Best digital solutions for your business! Let we bring amazing for you."
        },
        {
          preheader: "Welcome",
          header: "Logan Creative Studio",
          content:
            "Best digital solutions for your business! Let we bring amazing for you."
        }
      ]
    };
  }
};
</script>
