import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Group from '../views/Group'
import FindGames from '../views/FindGames'
import Product from '../views/Product'
import AllGame from '../components/front_side/AllGame'
import GameHost from '../components/front_side/GameHost'
import Game from '../components/front_side/Game'
import GameStick from '../components/front_side/GameStick'
import Seller from '../views/Seller'

// back_side
import Login from '../views/back_side/Login'
import Editmemberinfo from '../views/back_side/Editmemberinfo'
import ResetPassword from '../views/back_side/ResetPassword'
import EditNewProduct from '../views/back_side/EditNewProduct'

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
    path: '/findGames',
    name: 'FindGames',
    redirect: '/findGames/allGame',
    component: FindGames,
    children: [
      {
        path: 'allGame',
        name: 'AllGame',
        component: AllGame
      },
      {
        path: 'gameHost',
        name: 'GameHost',
        component: GameHost
      },
      {
        path: 'game',
        name: 'Game',
        component: Game
      },
      {
        path: 'gameStick',
        name: 'GameStick',
        component: GameStick
      }
    ]
  },
  {
    path: '/findGames/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/seller/:id',
    name: 'Seller',
    component: Seller
  },
  {
    path: '/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isLogin: false
    }
  },
  {
    path: '/editmemberinfo',
    name: 'Editmemberinfo',
    component: Editmemberinfo,
    meta: {
      isLogin: true
    }
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      isLogin: true
    }
  },
  {
    path: '/editnewproduct',
    name: 'EditNewProduct',
    component: EditNewProduct,
    meta: {
      isLogin: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
