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
// import VueI18n from 'vue-i18n'
import { ValidationProvider } from 'vee-validate'

Vue.config.productionTip = false
Vue.use(ElementUI, BootstrapVue, axios)
// Vue.use(VueI18n)
Vue.prototype.$http = axios
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('ValidationProvider', ValidationProvider)
// const i18n = new VueI18n({
//   locale: 'zhTW'
// })
// Vue.use(ValidationProvider, {
//   i18n,
//   dictionary: {
//     zhTW
//   }
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
  // i18n,
  router,
  render: h => h(App)
}).$mount('#app')
