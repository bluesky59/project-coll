import modules from './modules'
import Vue from 'vue'
import Router from 'uni-simple-router'

Vue.use(Router)
const router = new Router({
    routes: [...modules]
});

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
})
export default router;