<template>
	<header id="site-header" class="site-header">


			<!-- Logo -->
			<div class="logo">
				<a href class="brand">Logancee</a>
			</div>


			<!-- Hamburger Menu -->
			<div class="burger-menu-container">
				<a href="javascript:void(0)" class="burger-menu" @click="open_mobile_header">
					<span class="fas fa-bars fa-lg"></span>
				</a>
			</div>


	</header> <!-- site-header -->
</template>

<script>
	

	//
	// Export -----------------------------------------------------------------
	//
	
	export default {
        name: "Header",
            
		data() {
			return {
				
			}
		},
		         
		methods: {
			//
			// Toggles the Mobile header
			//

			open_mobile_header() {
				$('.site-header-mobile').toggleClass('open');
			}
		}
	}
</script>
