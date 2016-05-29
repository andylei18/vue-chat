import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  //入口模块
  '/': {
    name:'index',
    component: (resolve) => {
      require(['../app.vue'], resolve)
    }
  },

  //核心模块
  '/shuo': {
    name:'shuo',
    component: (resolve) => {
      require(['../views/shuo/index.vue'], resolve)
    }
  },

  //chat聊天模块
  '/chat': {
    name:'chat',
    component: (resolve) => {
      require(['../views/chat/index.vue'], resolve)
    }
  },

  // '/login': {
  //   name:'login',
  //   component: (resolve) => {
  //     require(['../views/login.vue'], resolve)
  //   }
  // },

})
export default router
