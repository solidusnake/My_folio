import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Projet from '@/components/Projet'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/projet',
      name: 'Projet',
      component: Projet
    }
  ]
})
