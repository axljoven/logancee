<template>
  <div id="site-header-mobile" class="site-header-mobile open">
		<ul class="mobile-menu">
			<a v-for="(link, index) in links" :key="index" :href="link.url" class="mobile-menu-items">
				<li>{{ link.name }}</li>
			</a>
		</ul>

		<!-- Close -->
		<a href="javascript:void(0)" class="site-header-mobile-close"><span class="icon fas fa-times"></span></a>

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
				links : [
					{
						name: 'home',
						url: '/',
					},
					{
						name: 'projects',
						url: '/projects',
					}
				]
			}
		}  
  	}
</script>
