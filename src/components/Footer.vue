<template>
    <footer id="site-footer" class="site-footer">
        <div class="container">

            <!-- Social Accounts -->
            <ul class="nav justify-content-center social-accounts">
                <li v-for="(social, index) in socials" :key="index" class="nav-item">
                    <a class="nav-link" :href="social.link"><span :class="`${social.icon} fa-fw`"></span></a>
                </li>
            </ul>


            <!-- Footer text -->
            <p class="copyright">
                &copy; {{ env['begin-year'] }} 
                <a :href="env['url']">{{ env['name'] }}</a>. 
                All rights reserved.
            </p>

        </div>
    </footer>
</template>

<script>

    //
    // Imports ----------------------------------------------------------------
    //

    import ENV from '@/data/env.json';
    import SocialJSON from '@/data/social-accounts.json';


    //
    // Export -----------------------------------------------------------------
    //

    export default {
        name : "Footer",
        data() {
            return {
                env : ENV,
                socials : SocialJSON['social-accounts']
            }
        },

        created() {
            console.log(ENV);
        }
    }

</script>
