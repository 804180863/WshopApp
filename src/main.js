import Vue from 'vue'
import app from './app'
import router from './roter'
import Header from './components/Header/Header.vue'
import ShopList from './components/ShopList/ShopList.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Star from './components/Star/Star.vue'
import store from './store'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper/* { default global options } */)
Vue.component('Header', Header)
Vue.component('ShopList', ShopList)
Vue.component('Star', Star)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
