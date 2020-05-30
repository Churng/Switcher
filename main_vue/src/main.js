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
import VueAxios from 'vue-axios'

// const ta = require.context('./assets/JSON/7-11', false, /json$/)
// const city = ta.keys().map(ta)
// console.log(city)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI, BootstrapVue)
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// console.log(ta)
new Vue({
  data: {
    test: false
  },
  created () {
    this.$on('changeToHome', function () {
      this.test = true
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
