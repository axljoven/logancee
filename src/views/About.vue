<template>
    <div class="about">

        <h1 class="d-none">About</h1>

        <div class="main">
            <div class="container">
                <div class="contents">
                    
                    <!-- Avatar -->
                    <Avatar :avatar="avatar"/>
                    

                    <!-- Heading -->
                    <header class="summary-heading">
                        <h2 class="name">Axl Joven</h2>
                        <p class="position">Front-end Developer</p>
                    </header>


                    <!-- Summary -->
                    <section class="section summary">
                        <h3 class="section-header">Summary</h3>                        
                        <p>
                            A front-end developer who creates 
                            anything from modern static designs to full 
                            dynamic and responsive websites.
                        </p>

                        <p>
                            I love trying and challenging myself with new 
                            trends and technologies. Continually pursuing 
                            to learn and understand more of my chosen profession.
                        </p>

                        <p>
                            I always want to try my own original ideas or improve 
                            existing designs as much as possible. Mostly drove 
                            with this thought in mind: If I'm not satisfied with 
                            it, I know others won't; and iterating or redoing things 
                            until I can see that my work is better than good.
                        </p>
                    </section>


                    <!-- Skills -->
                    <section class="section skills ">
                        <h3 class="section-header">Skills</h3>
                        <Skill v-for="skill in skills" :key="skill.name" 
                            :name="skill.name" 
                            :percentage="skill.percentage" />
                    </section>


                    <!-- Other sample works -->
                    <section class="section works">
                        <h3 class="section-header">Other sample works</h3>
                        <ul class="works-list">
                            <li v-for="work in works" :key="work.name">
                                <a :href="work.url" target="_blank">{{ work.name }}</a>
                            </li>
                        </ul>
                    </section>

                    <!-- Social Accounts -->
                    <section class="section">
                        <h3 class="section-header">Contact</h3>
                        <p>
                            You can contact me at: <br/>
                            <span class="gmail">axlmorenojoven@gmail.com</span>
                        </p>
                        
                    </section>



                </div> <!-- contents -->
            </div> <!-- container -->
        </div> <!-- main -->

    </div> <!-- about -->
</template>

<script>
    //
    // IMPORTS ----------------------------------------------------------------
    //

    import Avatar from "@/components/Avatar.vue"
    import Skill from "@/components/Skill.vue"


    //
    // EXPORT -----------------------------------------------------------------
    //

    export default {
        name: "About",
        data() {
            return {
                skills: [
                    { name: 'HTML5',       percentage: 95 },
                    { name: 'CSS3',        percentage: 93 },
                    { name: 'Sass',        percentage: 92 },
                    { name: 'Javascript',  percentage: 88 },
                    { name: 'JQuery',      percentage: 86 },
                    { name: 'PHP',         percentage: 85 },
                    { name: 'Bootstrap 4', percentage: 89 },
                    { name: 'UIKit',       percentage: 80 },
                    { name: 'Wordpress',   percentage: 89 },
                    { name: 'Laravel',     percentage: 65 },
                    { name: 'Vue JS',      percentage: 75 },
                    { name: 'Photoshop',   percentage: 89 },
                    { name: 'Figma',       percentage: 90 },
                ],
                content : "",
                avatar: {
                    // 'url' : '@/assets/images/avatar.jpg',
                    'url' : require('@/assets/images/avatar.jpg'),
                    'alt' : 'Axl Joven | Front-end Developer'
                },
                works: [
                    {
                        "name" : "Portfolio",
                        "url" : "https://axljoven-ec9e8.firebaseapp.com/"
                    },
                    {
                        "name" : "Logancee",
                        "url" : "https://logancee-dev.firebaseapp.com/"
                    },
                    {
                        "name" : "Devsnook",
                        "url" : "https://devsnook.com/"
                    },
                    {
                        "name" : "M&L Onlineshoppe",
                        "url" : "https://mlonlineshoppe.firebaseapp.com/#/"
                    },
                    {
                        "name" : "Barone International",
                        "url" : "http://baroneintl.com/"
                    },
                ]

            }
        },

        components: {
            Avatar,
            Skill
        }
    }
</script>
