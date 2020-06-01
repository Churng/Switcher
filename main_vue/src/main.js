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
// 載入 vue2-leaflet，依照自己需要載入組件
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet'
// 載入 css
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

// 啟用載入的各組件
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)
Vue.component('l-icon', LIcon)

// 設定預設 icon
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false
Vue.use(ElementUI, BootstrapVue, axios, VueAxios)
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  data: {
    test: false,
    productsData: []
  },
  created () {
    this.$on('changeToHome', function () {
      this.test = true
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
