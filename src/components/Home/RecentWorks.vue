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