<template>
    <div class="clients">
        <div class="container">
            <div class="responsive">

                    <div v-for="(client, index) in clients" :key="index" class="">
                        <img :src="require(`@/assets/images/clients/${client.image}`)" :alt="client.name" class="client-image">
                    </div>


            </div> <!-- swiper-responsive -->
        </div> <!-- container -->
    </div> <!-- clients -->
</template>

<script>

    //
    // Imports ----------------------------------------------------------------
    //

    import ClientsJSON from '@/data/clients.json';


    //
	// Export -----------------------------------------------------------------
	//

    export default {
        name: "Clients",
        data() {
            return {
                clients : ClientsJSON.clients
            }
        }
    }
</script>