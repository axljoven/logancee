<template>
	<div class="banner">
		<div class="container">

				<div class="slick-fade">

			
					<!-- Slides -->
					<div v-for="(slide, index) in slides" v-bind:key="index" class="banner-slide">
						<div class="banner-slide-container">
							<h2 class="banner-preheader">{{ slide.preheader }}</h2>
							<h3 class="banner-header">{{ slide.header }}</h3>
							<p class="banner-content">{{ slide.content }}</p>

							<!-- Chevron Arrow -->
							<div class="banner-arrow">
								<a v-bind:href="slide.link" data-scroll><span class="fas fa-chevron-down"></span></a>
							</div>

						</div>
					</div>


				</div> <!-- fade -->


			<!-- Custom navigation buttons -->
			<div class="slider-button-prev"><a href="javascript:void(0)">prev</a></div>
			<div class="slider-button-next"><a href="javascript:void(0)">next</a></div>


			
			<!-- Pagination -->
			<!-- <div class="swiper-pagination"></div> -->



		</div> <!-- container -->
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
