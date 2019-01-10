<template>
	<header id="site-header" class="site-header">


			<!-- Logo -->
			<div class="logo">
				<a href class="brand">Logancee</a>
			</div>


			<!-- Hamburger Menu -->
			<div class="burger-menu-container">
				<a href="javascript:void(0)" class="burger-menu" @click="toggle_mobile_header">
					<span class="fas fa-bars fa-lg"></span>
				</a>
			</div>


			<!-- Mobile Header -->
			<MobileHeader v-bind:is_open="is_mobile_header_open" />


	</header> <!-- site-header -->
</template>

<script>
	//
	// Imports ----------------------------------------------------------------
	//

	import MobileHeader from '@/components/MobileHeader.vue';
	

	//
	// Export -----------------------------------------------------------------
	//
	
	export default {
        name: "Header",
            
		data() {
			return {
				
				//
				// CHecks if the mobile header is open
				//

				is_mobile_header_open: false
			}
        },
            
		methods: {
			//
			// Toggles the Mobile header
			//

			toggle_mobile_header() {
				this.is_mobile_header_open = !this.is_mobile_header_open
				console.log(this.is_mobile_header_open)
				
			}
		}
	}
</script>
