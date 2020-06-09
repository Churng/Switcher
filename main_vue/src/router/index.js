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
import CartList from '../views/CartList'
import CartContract from '../views/CartContract'

// back_side
import Login from '../views/back_side/Login'
import ResetPassword from '../views/back_side/ResetPassword'
import Editmemberinfo from '../views/back_side/MemberInfo/Editmemberinfo'
import EditNewProduct from '../views/back_side/MemberInfo/EditNewProduct'
import OrderSeller from '../views/back_side/MemberInfo/OrderSeller'
import Inbox from '../views/back_side/MemberInfo/Inbox'
import Chatroom from '../views/back_side/MemberInfo/Chatroom'

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
    path: '/cartList',
    name: 'CartList',
    component: CartList,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'cartContract',
        name: 'CartContract',
        component: CartContract
      }
    ]
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
    meta: { requiresAuth: true }
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/editmemberinfo',
    name: 'Editmemberinfo',
    component: Editmemberinfo
  },
  {
    path: '/editnewproduct',
    name: 'EditNewProduct',
    component: EditNewProduct
  },
  {
    path: '/orderseller',
    name: 'OrderSeller',
    component: OrderSeller
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
    children: [
      {
        path: '/chatroom:id',
        name: 'Chatroom',
        component: Chatroom
      }
    ]
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
