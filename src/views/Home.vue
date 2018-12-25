<template>
	<div class="home">

		<Banner />
		<Content />
		<RecentWorks />

  	</div>
</template>

<script>
	//
	// Imports ----------------------------------------------------------------
	//

	import Banner from "@/components/Banner.vue";
	import Content from "@/components/Home/Content.vue";
	import RecentWorks from "@/components/Home/RecentWorks";

	//
	// Export -----------------------------------------------------------------
	//

	export default {
		name: "home",
		components: {
			Banner,
			Content,
			RecentWorks
		},
	};
</script>
