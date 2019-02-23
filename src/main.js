import Vue from 'vue'
import app from './app'
import router from './roter'
import Header from './components/Header/Header.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper/* { default global options } */)
Vue.component('Header', Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
