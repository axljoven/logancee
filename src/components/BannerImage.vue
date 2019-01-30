<template>
    <div class="banner-image" :style="backgroundImage(url)"></div>
</template>

<script>

    //
    // EXPORT -----------------------------------------------------------------
    //

    export default {
        name: "BannerImage",
        props: {
            url: String
        },
        methods: {
            backgroundImage(url) {
				var style = `background: url('${url}') center center no-repeat;`;
				style += 'background-size: cover';

				return style;
			}
        }
    }
</script>

