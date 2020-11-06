import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import '@/assets/styles/common.scss'

import vant from 'vant'
import 'vant/lib/index.css'

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
