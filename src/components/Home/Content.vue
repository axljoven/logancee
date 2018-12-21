<template>
    <div class="about-us">
        
        <!-- About Us -->
        <div v-for="(content, index) in contents" :key="index" class="section">
            <div class="ui container">
               <h2 class="section-preheader">{{ content.section }}</h2>
               <h3 class="section-header">{{ content.header }}</h3>
               <p class="section-text">{{ content.text }}</p>
               <image :src="@/src/images/ + content.image" />
            </div>
        </div>


    </div>
</template>

<script>
    //
    // Imports ----------------------------------------------------------------
    //

    import ContentsJSON from '@/data/contents.json';


    //
	// Export -----------------------------------------------------------------
	//

    export default {
        name: "Content",
        data() {
            return {
                contents : ContentsJSON.contents
            }
        }
    }
</script>