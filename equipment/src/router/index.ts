import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "Main" */ '../Main.vue')
  },
  {
    path: '/warning',
    name: 'Warning',
    component: () => import(/* webpackChunkName: "Warning" */ '../views/warning/index.vue')
  },
  {
    path: '/abnormal',
    name: 'Abnormal',
    component: () => import(/* webpackChunkName: "Abnormal" */ '../views/abnormal/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
