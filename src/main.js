// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from '@/components/Header'
import App from './App'
import Footer from '@/components/Footer'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#header',
  router,
  template: '<Header/>',
  components: { Header }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
new Vue({
  el: '#footer',
  router,
  template: '<Footer/>',
  components: { Footer }
})
