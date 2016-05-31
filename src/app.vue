<template>

  <div id="app">

    <!--BEGIN navBar组件-->
    <nav-bar :login="Login" :action="showLogin"></nav-bar>
    <!--END   navBar组件-->

    <!--BEGIN loginb组件-->
    <login-module v-if="Login.show" :login="Login" :action="doSignIn" :ckface="ckface"></login-module>
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
  import { showConfirm , showOverlay , checkAuth , singIn , addUser } from './vuex/actions'  //注册事件

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
        addUser
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
          },
          face:{
            id:"chatAvatar1",
            url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar1.jpg"
          },
          avatar:[
  	      	{id:"chatAvatar1",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar1.jpg",ck:false},
  	      	{id:"chatAvatar2",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar2.jpg",ck:false},
  	      	{id:"chatAvatar3",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar3.jpg",ck:false},
  	      	{id:"chatAvatar4",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar4.jpg",ck:false},
  	      	{id:"chatAvatar5",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar5.jpg",ck:false},
  	      	{id:"chatAvatar6",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar6.jpg",ck:false},
  	      	{id:"chatAvatar7",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar7.jpg",ck:false},
  	      	{id:"chatAvatar8",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar8.jpg",ck:false},
  	      	{id:"chatAvatar9",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar9.jpg",ck:false}
  	      ]
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
        const faceid = this.Login.face.id
        const faceurl = this.Login.face.url
        const reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/

        //this.$parent.showConfirm('哈哈哈哈')
        //this.$parent.showOverlay()
        if(reg.test(email.trim())&&password.trim()){
          this.singIn(email,password,faceid,faceurl)
          new Promise((resolve, reject) => this.addUser(faceid,faceurl))
          if(this.isLoginOnline){
            this.Login.show = false
            this.$router.go({name:'shuo'})
          }
        }else{
          console.log("错拉错拉")
        }
        this.Login.email.value = ''
        this.Login.password.value = ''
      },
      showLogin () {
        this.Login.show = true
      },
      // ckface (obj) {
      //   const avatar = this.Login.avatar
      //   avatar.forEach(item => {
	  	// 		item.ck = false
      //   })
      //   obj.ck = true
      //   this.Login.face.id = obj.id
      //   this.Login.face.url = obj.url
      // }
    }
  }
</script>
