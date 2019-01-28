<template>
	<div class="banner">
		<div class="slick-fade">

			
			<!-- Slides -->
			<div v-for="(slide, index) in slides" v-bind:key="index" class="banner-slide" :style="backgroundImage(slide.image)">
				<div class="container">
					<div class="banner-slide-container">
						<h2 class="banner-preheader">{{ slide.preheader }}</h2>
						<h3 class="banner-header">{{ slide.header }}</h3>
						<p class="banner-content">{{ slide.content }}</p>
						
						<!-- Chevron Arrow -->
						<div class="banner-arrow">
							<a v-bind:href="slide.link" data-scroll><span class="fas fa-chevron-down"></span></a>
						</div>
					</div> <!-- banner-slide-container -->
				</div>
			</div> <!-- banner-slide -->

		
		</div> <!-- fade -->


		<!-- Custom navigation buttons -->
		<div class="slider-button-prev"><a href="javascript:void(0)">prev</a></div>
		<div class="slider-button-next"><a href="javascript:void(0)">next</a></div>


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
		},

		methods: {
			backgroundImage(image) {
				var style = 'background: url(' + require(`@/assets/images/banner/${image}`) + ') no-repeat;';
				style += 'background-size: cover';
				style += 'background-position: center center';

				return style;
			}
		}
	};
</script>
