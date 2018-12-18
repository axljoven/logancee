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
	// Export -----------------------------------------------------------------
	//
	
	export default {
		name: "Banner",
		data() {
			return {

				//
				// Slides -----------------------------------------------------
				//

				slides: [
					{
						preheader : "Welcome",
						header    : "Logan Creative Studio",
						content   : "Best digital solutions for your business! Let we bring amazing for you."
					},
					{
						preheader : "Welcome 2",
						header    : "Web Design Philippines",
						content   : "Best digital solutions for your business! Let we bring amazing for you."
					},
					{
						preheader : "Welcome 3",
						header    : "VueJS and Firebase",
						content   : "Best digital solutions for your business! Let we bring amazing for you."
					},
					{
						preheader : "Welcome 4",
						header    : "Future of Javascript Development",
						content   : "Best digital solutions for your business! Let we bring amazing for you."
					}
				]
			};
		}
	};
</script>
