<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  },
  mounted() {
    this.$store.dispatch('getAddress')
    // 触发vuex的getUser(), 从后台获取user
    this.$store.dispatch('getUser')
  }


}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
