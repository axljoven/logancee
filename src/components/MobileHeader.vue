<template>
  <div id="site-header-mobile" class="site-header-mobile" :style="backgroundImage('starry-night.jpg')">
		<ul class="mobile-menu">
			<a v-for="(link, index) in links" :key="index" :href="link.url" class="mobile-menu-items">
				<li>{{ link.name }}</li>
			</a>
		</ul>

		<!-- Close -->
		<a href="javascript:void(0)" class="site-header-mobile-close">
			<img class="icon" :src="require(`@/assets/images/close.svg`)" alt="">
			<span class="text">Close</span>
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
					{ name: 'projects', url: 'javascript:void(0)' },
					{ name: 'about the developer', url: 'javascript:void(0)' }
				],				
			}
		},

		methods: {
			backgroundImage(image) {
				var style = 'background: url(' + require(`@/assets/images/${image}`) + ') center center no-repeat;';
				style += 'background-size: cover';

				return style;
			}
		}
  	}
</script>
