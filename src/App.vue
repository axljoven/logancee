<template>
	<div id="app">

		<Header />
		<router-view/>
		<Footer />

  	</div>
</template>

<script>
	//
	// Import Header ----------------------------------------------------------
	//

	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	


	//
	// Export -----------------------------------------------------------------
	//

	export default {
		components: {
			Header,
			Footer
		}  
	}
</script>