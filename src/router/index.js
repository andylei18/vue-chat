'use strict'
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

})

export default router
