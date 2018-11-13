import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import CarList from '@/components/CarList'
import AddVehicle from '@/components/AddVehicle'
import EditVehicle from '@/components/EditVehicle'
import BookedVehicles from '@/components/BookedVehicles'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/car-list',
      name: 'CarList',
      component: CarList
    },
    {
      path: '/add-vehicle',
      name: 'AddVehicle',
      component: AddVehicle
    },
    {
      path: '/edit-vehicle/:vehicle_slug',
      name: 'EditVehicle',
      component: EditVehicle
    },
    {
      path: '/booked-vehicles',
      name: 'BookedVehicles',
      component: BookedVehicles
    },
  ]
})
