<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
// Import Header
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  }  
}
</script>


<style>

</style>
