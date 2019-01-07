<template>
  <div id="site-header-mobile" class="site-header-mobile">
	  
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
					},
					{
						name: 'login',
						url: '/projects',
					}
				]
			}
		}  
  	}
</script>
