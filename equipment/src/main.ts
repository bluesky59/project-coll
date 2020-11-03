import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import '@/assets/styles/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
