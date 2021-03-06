import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/index'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI, BootstrapVue, axios)
Vue.prototype.$http = axios

// axios.interceptors.response.use(response => {
//   console.log(response)
//   return response
// }, error => {
//   console.log(error.response)
// })

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  data: {
    ChangeMember: false,
    changeBannerBtn: false,
    productsData: [],
    productSearchData: false,
    menbersData: [],
    sellerData: [],
    sellerOwnData: false,
    userName: '',
    getCarts: [],
    getCartLen: 0,
    cartQuantity: false,
    orderProducts: [],
    orderInfo: {
      buyerName: '',
      totalProducts: 0,
      totalPrice: 0,
      totalDeposit: 0,
      phone: '',
      mail: '',
      seller: '',
      orderDate: ''
    },
    orderResult: ''
  },
  router,
  render: h => h(App)
}).$mount('#app')
