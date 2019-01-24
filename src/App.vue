<template>
	<div id="app">

		<Header />
		<MobileHeader />
		<router-view />
		<Footer />

  	</div>
</template>

<script>
	//
	// Import -----------------------------------------------------------------
	//

	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	import MobileHeader from '@/components/MobileHeader.vue';


	//
	// Export -----------------------------------------------------------------
	//

	export default {
		components: {
			Header,
			MobileHeader,
			Footer
		},

		created() {
			//
			// Smooth scrolling to anchor tags
			//

			let scroll = new SmoothScroll('.banner a[href*="#"]', {
				speed: 500
			});
		}
	}
</script>