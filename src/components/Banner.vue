<template>
	<div class="banner">
		<div class="ui container">



			<!-- Slider main container -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
	
					<!-- Slides -->
					<div v-for="(slide, index) in slides" v-bind:key="index" class="swiper-slide">
						<div class="swiper-slide-contents">
							<h2 class="banner_preheader">{{ slide.preheader }}</h2>
							<h3 class="banner_header">{{ slide.header }}</h3>
							<p class="banner_content">{{ slide.content }}</p>

							<!-- Chevron Arrow -->
							<div class="banner_arrow">
								<a v-bind:href="slide.link"><span class="fas fa-chevron-down"></span></a>
							</div>

						</div>
					</div>


				</div>
			</div> <!-- swiper container -->



			<!-- Custom navigation buttons -->
			<div class="custom-swiper-button-prev"><a href="javascript:void(0)">prev</a></div>
			<div class="custom-swiper-button-next"><a href="javascript:void(0)">next</a></div>


			
			<!-- Pagination -->
			<div class="swiper-pagination"></div>



		</div> <!-- ui container -->
	</div> <!-- banner -->
</template>

<script>
	//
	// Import Slides.json -----------------------------------------------------
	//

	import SlidesJSON from '@/data/slides.json';
	

	//
	// Export -----------------------------------------------------------------
	//
	
	export default {
		name: "Banner",
		data() {
			return {
				slides : SlidesJSON.slides
			};
		}
	};
</script>
