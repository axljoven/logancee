<template>
    <div class="recent-works">
        <div class="container">
            
            <!-- Headers -->
            <h2 class="preheader">Recent Works</h2>
            <h3 class="header">Art is not what you see!</h3>

            <!-- Menu -->
            <nav class="nav category-nav">
                <a href="javascript:void(0)" v-for="(category) in categories" :key="category" class="nav-link item" v-on:click="setFilter(category)">
                    {{ category }}
                </a>
            </nav>

            <!-- Projects -->
            <div class="projects">
                    
                    <transition-group name="fade" tag="div" class="row" mode="in-out">
                        <!-- <div v-for="project in filteredProjects" :key="project.name" class="col-12 col-md-6 col-lg-4"> -->
                        <div v-for="project in filteredProjects" :key="project.name" class="project-single col-12 col-md-6 col-lg-4">
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
                        </div> <!-- .col-12 -->
                    </transition-group>

            </div> <!-- projects -->

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
                // defaultProjects : ProjectsJSON.projects,
                filteredProjects: ProjectsJSON.projects,
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
                    this.filteredProjects = ProjectsJSON.projects
                } else {
                    this.filteredProjects = ProjectsJSON.projects.filter(proj => proj.category === this.currentFilter)
                }

                console.clear()
                console.log(this.currentFilter)
                console.log(this.filteredProjects)
            },

        },

    }

</script>