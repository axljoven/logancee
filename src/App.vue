<template>
	<div id="app">

		<Header />
		<MobileHeader />
		<router-view/>
		<Footer />

  	</div>
</template>

<script>
	//
	// Import Header ----------------------------------------------------------
	//

	import Header from '@/components/Header.vue';
	import MobileHeader from '@/components/MobileHeader.vue';
	import Footer from '@/components/Footer.vue';
	


	//
	// Export -----------------------------------------------------------------
	//

	export default {
		components: {
			Header,
			MobileHeader,
			Footer
		}  
	}
</script>