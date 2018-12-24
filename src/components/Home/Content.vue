<template>
    <div class="about-us">
        
        <!-- About Us -->
        <div v-for="(content, index) in contents" :key="index" class="section">
            <div class="ui container">
                <div class="ui stackable two column relaxed grid section-container">
                    
                    <!-- Contents -->
                    <div class="column">
                        <h2 class="section-preheader">{{ content.section }}</h2>
                        <h3 class="section-header">{{ content.header }}</h3>
                        <p class="section-text">{{ content.text }}</p>
                    </div>

                    <!-- Image -->
                    <div class="column">
                        <img v-if="content.image" :src="require(`@/assets/images/${content.image}`)" 
                            class="section-image ui fluid image" />
                    </div>


                </div>
                    
               
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