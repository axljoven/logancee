<template>
	<div class="home">

		<Banner />

		<div class="main">
			<Content />
			<RecentWorks />
			<Clients />
		</div>

  	</div>
</template>

<script>
	//
	// Imports ----------------------------------------------------------------
	//

	import Banner from "@/components/Banner.vue";
	import Content from "@/components/Home/Content.vue";
	import RecentWorks from "@/components/Home/RecentWorks";
	import Clients from "@/components/Clients";


	//
	// Export -----------------------------------------------------------------
	//

	export default {
		name: "home",
		components: {
			Banner,
			Content,
			RecentWorks,
			Clients,
		},
	};
</script>
