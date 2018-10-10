import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CarList from '@/components/CarList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/car-list',
      name: 'CarList',
      component: CarList
    },
  ]
})
