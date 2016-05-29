<template>

  <div id="app">

    <!--BEGIN navBar组件-->
    <nav-bar :login="Login" :action="showLogin"></nav-bar>
    <!--END   navBar组件-->

    <!--BEGIN loginb组件-->
    <login-module v-if="Login.show" :login="Login" :action="doSignIn"></login-module>
    <!--END   login组件-->

    <!--BEGIN 路由切换-->
    <router-view class="container bp_container"></router-view>
    <!--END   路由切换-->

    <!--BEGIN footer组件-->
    <!-- <footer-bar></footer-bar> -->
    <!--END   footer组件-->

    <!--BEGIN comFirm组件-->
    <!-- <con-firm :confirm="Confirm"></con-firm> -->
    <!--BEGIN comFirm组件-->

    <!--BEGIN overLay组件-->
    <!-- <over-lay :overlay="overLay"></over-lay> -->
    <!--BEGIN overLay组件-->

  </div>

</template>

<script>
  //通用组件
  import { navBar , conFirm ,  overLay } from './components/index'  //comFirm组件,navBar组件,overLay组件

  //vuex
  import { isLoginOnline } from './vuex/getters'
  import store from './vuex/store'
  import { showConfirm , showOverlay , checkAuth , singIn } from './vuex/actions'  //注册事件

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
        isLoginOnline,
        threads: state => state.threads,
        // Confirm: state => state.Confirm,
        // overLay: state => state.overLay
      },
      actions: {
        checkAuth,
        singIn,
        // showConfirm,
        // showOverlay
      }
    },
    data (){
      return {
        Login: {
          show: false,
          email: {
            value: '',
            placeholder: 'email'
          },
          password: {
            value: '',
            placeholder: 'password'
          }
        }
      }
    },
    compiled (){
      this.checkAuth()
    },
    methods: {
      doSignIn () {
        const email = this.Login.email.value
        const password = this.Login.password.value
        const reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/

        //this.$parent.showConfirm('哈哈哈哈')
        //this.$parent.showOverlay()
        if(reg.test(email.trim())&&password.trim()){
          this.singIn(email , password)
          if(this.isLoginOnline){
            this.Login.show = false
            this.$router.go({name:'chat'})
          }
        }else{
          console.log("错拉错拉")
        }
        this.Login.email.value = ''
        this.Login.password.value = ''
      },
      showLogin () {
        this.Login.show = true
      }
    }
  }
</script>
