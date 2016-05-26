<template>

  <div id="app">

    <!--BEGIN navBar组件-->
    <nav-bar></nav-bar>
    <!--END   navBar组件-->

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
  //加载materialize作为公用css
  import "materialize-css/bin/materialize.css"



  //业务模块组件
  import NavBar from './components/navBar'  //navBar组件
  //import FooterBar from './components/footer'//footer组件

  export default {
    store,
    components :{
      NavBar,
      //FooterBar
    },
    vuex: {
      getters: {
        threads: state => state.threads
      }
    },
  }
</script>
