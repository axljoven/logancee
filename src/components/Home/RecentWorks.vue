<template>
    <div class="recent-works">
        <div class="container">
            
            <!-- Headers -->
            <h2 class="preheader">Recent Works</h2>
            <h3 class="header">Art is not what you see!</h3>

            <!-- Menu -->
            <nav class="nav category-nav">
                <a href="javascript:void(0)" v-for="(category, index) in categories" :key="index" class="nav-link item" v-on:click="setFilter(category)">
                    {{ category }}
                </a>
            </nav>

            <!-- Projects -->
            <div class="projects">
                <div class="row">
                    <div v-for="project in defaultProjects" :key="project.name" class="col-12 col-md-6 col-lg-4">
                        
                        <!-- <div v-if="currentFilter === project.category || currentFilter === 'all'" > -->
                            <a href="#">
                                <article class="reveal">

                                    <!-- Image -->
                                    <div class="reveal-image">
                                        <img class="" :src="require(`@/assets/images/projects/${project['thumbnail-image']}`)" :alt="project.name">
                                    </div>

                                    <!-- Content -->
                                    <div class="reveal-content">
                                        <h1 class="reveal-title">{{ project.name }}</h1>
                                        <p class="reveal-meta">{{ project.category }}</p>
                                    </div>


                                </article>
                            </a>
                        <!-- </div>  -->

                    </div> <!-- .four.wide.column -->
                </div> <!-- .ui.stackable.grid.container -->
            </div>

            <!-- View All Projects link -->
            <a href="#" class="cta cta_link">
                View All Projects <span class="cta-icon fas fa-angle-right"></span>
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
        name: 'RecentWorks',
        data() {
            return {
                defaultProjects : ProjectsJSON.projects,
                filteredProjects: null,
                categories : [
                    'all',
                    'photography',
                    'branding',
                    'web design',
                    'animation'
                ],
                currentFilter: 'all'
            }
        },

        methods: {
            setFilter: function(category) {
                this.currentFilter = category
                let filtered = null

                if (category === 'all') {
                    this.filteredProjects = this.defaultProjects
                } else {
                    this.filteredProjects = this.defaultProjects.filter(proj => proj.category === this.currentFilter)
                }

                
                console.clear()
                console.log(this.currentFilter)
                console.log(this.filteredProjects)
            },

        },

        computed: {
            // filteredProjects() {
            //     let newProjects = this.projects.filter(function(project) {
            //         return project.category == this.currentFilter
            //     })

            //     console.log(newProjects)
            // }
        }
    }

</script>