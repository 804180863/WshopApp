<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  },
  mounted () {
    this.$store.dispatch('getAddress')
  }
  
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
