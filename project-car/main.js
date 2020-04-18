import Vue from 'vue'
import App from './App'
import router from './router'
import { RouterMount } from 'uni-simple-router'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
