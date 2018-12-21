<template>
	<div class="home">



		<Banner />
		<Content />



  	</div>
</template>

<script>
	//
	// Imports ----------------------------------------------------------------
	//

	import Banner from "@/components/Banner.vue";
	import Content from "@/components/Home/Content.vue";


	//
	// Export -----------------------------------------------------------------
	//

	export default {
		name: "home",
		components: {
			Banner,
			Content
		},
	};
</script>
