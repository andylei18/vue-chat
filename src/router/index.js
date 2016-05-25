import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/chat': {
    component: (resolve) => {
      require(['../views/chat/index.vue'], resolve)
    }
  },
})
export default router
