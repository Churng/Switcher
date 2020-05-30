import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FindSeller from '../views/FindSeller'
// import SwitcherMap from '../views/front_side/SwitcherMap'
// back_side
import Login from '../views/back_side/Login'
import Editmemberinfo from '../views/back_side/Editmemberinfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/findSeller',
    name: 'FindSeller',
    component: FindSeller
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/editmemberinfo',
    name: 'Editmemberinfo',
    component: Editmemberinfo
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
