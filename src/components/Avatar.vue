<template>
    <div class="avatar">
        <img :src="avatar.url" :alt="avatar.alt">
    </div>
</template>

<script>

    //
    // EXPORT -----------------------------------------------------------------
    //

    export default {
        name: "Avatar",
        props: {
            avatar: Object
        }    
    }
</script>

