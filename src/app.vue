<template>

  <div id="app">

    <!--BEGIN navBar组件-->
    <nav-bar></nav-bar>
    <!--END   navBar组件-->

    <!--BEGIN loginbox组件-->
    <login-module></login-module>
    <!--END   loginbox组件-->

    <!--BEGIN 路由切换-->
    <router-view class="container"></router-view>
    <!--END   路由切换-->

    <!--BEGIN footer组件-->
    <!-- <footer-bar></footer-bar> -->
    <!--END   footer组件-->
  </div>

</template>

<script>
  //加载vuex store
  import store from './vuex/store'

  //业务模块组件
  import NavBar from './components/navBar'  //navBar组件
  import LoginModule from './views/login'  //login组件
  //import FooterBar from './components/footer'//footer组件

  export default {
    store,
    components: {
      NavBar,
      LoginModule
      //FooterBar
    },
    vuex: {
      getters: {
        threads: state => state.threads
      }
    },
  }
</script>
