import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SwitcherMap from '../views/front_side/SwitcherMap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/switcherMap',
    name: 'switcherMap',
    component: SwitcherMap
  }
]

const router = new VueRouter({
  routes
})

export default router
