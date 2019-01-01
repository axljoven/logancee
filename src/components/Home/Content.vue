<template>
    <div class="about-us">
        
        <!-- About Us -->
        <div v-for="(content, index) in contents" :key="index" class="section">
            <div class="container">
                <div class="section-container">
                    
                    <!-- Contents -->
                    <div class="section-contents">
                        <h2 class="section-preheader preheader">{{ content.section }}</h2>
                        <h3 class="section-header header">{{ content.header }}</h3>
                        <p class="section-text">{{ content.text }}</p>

                        <!-- index -->
                        <div class="section-counter">{{ index | padding }}</div>
                        
                    </div> <!-- .section-contents -->

                    <!-- Image -->
                    <div class="section-image">
                        <img v-if="content.image" :src="require(`@/assets/images/${content.image}`)" 
                            class="w-100" />
                    </div> <!-- .section-image -->


                </div> <!-- .section-container -->
            </div> <!-- .ui.container -->
        </div> <!-- .section -->


    </div> <!-- .about-us -->
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
        },
        filters: {

            //
            // Prepend zeros at the beginning of an index
            // 

            padding : function(index) {
                index++;
                return index.toString().padStart(2, '0') + '.';
            }
        }
    }
</script>