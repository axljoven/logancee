<template>
    <div class="recent-works">
        <div class="ui container">
            
            <!-- Headers -->
            <h2 class="preheader">Recent Works</h2>
            <h3 class="header">Art is not what you see!</h3>

            <!-- Menu -->
            <div class="ui text menu">
                <a v-for="(category, index) in categories" :key="index" class="item">
                    {{ category }}
                </a>
            </div>

            <!-- Projects -->
            <div class="projects">
                
            </div>

            <!-- View All Projects link -->
            <a href="#" class="cta cta_link">
                View All Projects <span class="cta-icon fas fa-long-arrow-alt-right"></span>
            </a>


        </div> <!-- .ui.container -->
    </div> <!-- .recent-works -->
</template>

<script>

    //
    // Imports ----------------------------------------------------------------
    //

    import ProjectsJSON from '@/data/projects.json';



    //
    // Export -----------------------------------------------------------------
    //

    export default {
        name: 'Recent Works',
        data() {
            return {
                projects : ProjectsJSON.projects,
                categories : [
                    'all',
                    'photography',
                    'branding',
                    'web design',
                    'animation'
                ]
            }
        }
    }

</script>