import Vue from 'vue'
import Router from 'vue-router'
import Projet from '@/components/Projet'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/projet',
      name: 'Projet',
      component: Projet
    }
  ]
})
