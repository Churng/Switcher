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
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// export default new Vuex.Store({
//   productsData: [],
//   plugins: [createVuexAlong()]
// })

new Vue({
  data: {
    ChangeMemberinfo: false,
    productsData: [],
    productSearchData: false
  },
  created () {
    this.$on('changeToHome', function () {
      this.ChangeMemberinfo = true
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
