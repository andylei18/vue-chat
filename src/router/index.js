import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({

  //chat聊天模块
  '/chat': {
    component: (resolve) => {
      require(['../views/chat/index.vue'], resolve)
    }
  },

  '/login': {
    component: (resolve) => {
      require(['../views/login.vue'], resolve)
    }
  },

})
export default router
