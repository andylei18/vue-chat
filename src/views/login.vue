<template>
  <div class="section modal open" id="loginbox">
    <div class="container">
      <div class="inner">

          <div class="row" id="login-form">
            <p class="text-center">
              <i class="ion-ios-telephone-outline text-blue"></i>
              <span>Sign in to VueChat</span>
            </p>
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input type="text" class="validate" placeholder="邮箱" v-model='email' @keyup.enter="doSignIn">
              <!-- <label for="icon_prefix">First Name</label> -->
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">lock_outline</i>
              <input type="tel" class="validate" placeholder="密码" minlength="6" v-model='password' @keyup.enter="doSignIn">
              <!-- <label for="icon_telephone">Telephone</label> -->
            </div>
            <div class="input-field col s12">
              <button class="btn waves-effect waves-light" type="submit" name="action" @click="doSignIn">
                Sign in
                <i class="material-icons right">send</i>
              </button>
            </div>
            <div class="input-field col s12">
              <a class="waves-effect waves-light btn"><i class="material-icons left">info</i>找回密码</a>
            </div>
          </div>

          <!--BEGIN 注册组件-->
          <!-- <register-module></register-module> -->
          <!--END   注册组件-->

        </div>
    </div>

  </div>
</template>
<script>

  //import RegisterModule from './register'//注册组件

  //Vuex
  import  { isAuthenticated } from '../vuex/getters'
  import { checkAuth , singIn } from '../vuex/actions'  //注册事件

  export default {
    data (){
      return {
        email:"",
        password:""
      }
    },
    components: {
      // RegisterModule,
    },
    vuex: {
      getters: {
        isAuthenticated
      },
      actions: {
        checkAuth,
        singIn
      }
    },
    route: {
      data (transition){
      }
    },
    methods: {
      doSignIn () {
        // const email = e.target.value
        // const reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/
        // if(reg.test()){
        //   //this.singIn(this.email, this.password)
        // }
        const email = this.email
        const password = this.password

        this.$parent.showConfirm('哈哈哈哈')
        this.$parent.showOverlay()

        if(email.trim()){
          console.log(email.trim())
        }else{
          console.log("123")
        }
        // if (text.trim()) {
        //   this.singIn(text, this.thread)
        //   e.target.value = ''
        // }
      }
    },

  }
</script>
<style>
[v-cloak]{
  display: none;
}
.v-cloak--block,.v-cloak--inline,.v-cloak--inlineBlock{
  display: none;
}
#loginbox {
    display: block;
    position: fixed;
    z-index: 4;
    top: -64px;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 0;
    -webkit-transition: -webkit-transform,.3s,ease-in-out;
    transition: transform,.3s,ease-in-out;
}
#loginbox.open {
    -webkit-transform: translateY(64px);
    transform: translateY(64px);
}
</style>
