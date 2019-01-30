<template>
    <div class="skill">
        <div class="skill-name" :style="width(percentage)">{{ name }}</div>
    </div>
</template>

<script>

    //
    // EXPORT -----------------------------------------------------------------
    //

    export default {
        name: "Skill",
        props: {
            name: String,
            percentage: Number
        },
        methods: {
            width(percentage) {
                return `width: ${percentage}%`
            }
        }
    }
</script>

