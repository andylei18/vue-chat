<template>

  <div id="app">

    <!--BEGIN navBar组件-->
    <nav-bar></nav-bar>
    <!--END   navBar组件-->

    <!--BEGIN loginbox组件-->
    <login-module
      :confirm="Confirm"
      :overlay="overLay"></login-module>
    <!--END   loginbox组件-->

    <!--BEGIN 路由切换-->
    <router-view class="container"></router-view>
    <!--END   路由切换-->

    <!--BEGIN footer组件-->
    <!-- <footer-bar></footer-bar> -->
    <!--END   footer组件-->

    <!--BEGIN comFirm组件-->
    <con-firm :confirm="Confirm"></con-firm>
    <!--BEGIN comFirm组件-->

    <!--BEGIN overLay组件-->
    <over-lay :overlay="overLay"></over-lay>
    <!--BEGIN overLay组件-->

  </div>

</template>

<script>
  //通用组件
  import { navBar , conFirm ,  overLay } from './components/index'  //comFirm组件,navBar组件,overLay组件

  //vuex
  import store from './vuex/store'
  import { showConfirm , showOverlay } from './vuex/actions'  //注册事件

  //业务模块组件
  import LoginModule from './views/login'  //login组件

  export default {
    store,
    components: {
      conFirm,
      overLay,
      navBar,
      LoginModule
      //FooterBar
    },
    vuex: {
      getters: {
        threads: state => state.threads,
        Confirm: state => state.Confirm,
        overLay: state => state.overLay
      },
      actions: {
        showConfirm,
        showOverlay
      }
    },
  }
</script>
