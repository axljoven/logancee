<template>
  <div id="site-header-mobile" class="site-header-mobile">
		<ul class="mobile-menu">
			<a v-for="(link, index) in links" :key="index" :href="link.url" class="mobile-menu-items">
				<li>{{ link.name }}</li>
			</a>
		</ul>

		<!-- Close -->
		<a href="javascript:void(0)" class="site-header-mobile-close" @click="close_mobile_header()">
			<span class="icon fas fa-times"></span>
		</a>

  </div>
</template>

<script>
	//
	// Export --------------------------------------------------------------------
	//

  	export default {
		name: "MobileHeader",
		
		data() {
			return {
				//
				// Menu links
				//

				links : [
					{ name: 'home', url: '/' },
					{ name: 'projects', url: '/projects' }
				],				
			}
		},

		methods: {
			close_mobile_header() {
				$('.site-header-mobile').toggleClass('open');
			}
		}
  	}
</script>
