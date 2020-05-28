import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FindSeller from '../views/FindSeller'
// import SwitcherMap from '../views/front_side/SwitcherMap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/findSeller',
    name: 'FindSeller',
    component: FindSeller
  }
]

const router = new VueRouter({
  routes
})

export default router
