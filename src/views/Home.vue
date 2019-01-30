<template>
	<div class="home">

		<!-- Hide h1 -->
		<h1 class="d-none">Home</h1>

		<!-- Banner -->
		<Banner />

		<!-- Main content -->
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
