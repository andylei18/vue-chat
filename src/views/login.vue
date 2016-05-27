<template>
  <div class="section modal open" id="loginbox">
    <div class="container">
      <div class="modal-close text-a"><i class="ion-close-round"></i></div>
      <div class="inner">

          <div class="row" id="login-form">
            <p class="text-center">
              <i class="ion-ios-telephone-outline text-blue"></i>
              <span>Sign in to VueChat</span>
            </p>
            <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input type="text" class="validate" placeholder="邮箱" v-model='uemail'>
              <!-- <label for="icon_prefix">First Name</label> -->
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">phone</i>
              <input type="tel" class="validate" placeholder="密码" minlength="6" v-model='upwd'>
              <!-- <label for="icon_telephone">Telephone</label> -->
            </div>
            <div class="input-field col s12">
              <button class="btn waves-effect waves-light" type="submit" name="action" @click="doSignIn">
                Sign in
                <i class="material-icons right">send</i>
              </button>
            </div>
            <p class="text-right fade-right-transition" style="display: none;"><span class="button gray">找回密码</span></p>
          </div>

          <!--BEGIN 注册组件-->
          <register-module></register-module>
          <!--END   注册组件-->

        </div>
    </div>
  </div>
</template>
<script>

  import RegisterModule from './register'//注册组件

  import { checkAuth , singIn } from '../vuex/actions'  //注册事件

  export default {
    data (){
      return {
        uemail:"",
        upwd:""
      }
    },
    components: {
      RegisterModule,
    },
    vuex: {
      actions: {
        checkAuth,
        singIn
      }
    },
    route: {
      data (transition){
        console.log(this.$loadingRouteData)
      }
    },
    methods: {
      doSignIn () {
        this.singIn(this.uemail, this.upwd)
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
#loginbox .container {
    padding-left: .1rem;
    padding-right: .1rem;
}
.text-a {
    cursor: pointer;
    -webkit-transition: color,.3s;
    transition: color,.3s;
}
.text-a:active, .text-a:hover {
    color: #007fff;
}
.modal-close {
    position: absolute;
    top: -.1rem;
    padding: .1rem;
    right: 0;
    cursor: pointer;
}
.inner {
    width: 25vw;
    min-width: 480px;
    margin-left: auto;
    margin-right: auto;
}
.input-relative {
    position: relative;
}
input[type=text],input[type=password],input[type=button]{
  padding: .5em 0;
  width: 100%;
  display: block;
  border: none;
  box-shadow: none;
}
input[type=text], input[type=url], input[type=password],textarea {
    border-bottom: 1px solid #ddd;
    -webkit-transition: border,.3s;
    transition: border,.3s;
}
.text-right {
    text-align: right;
}
.button.small, a.button.small, button.small, input[type=button].small {
    display: inline-block;
    width: auto;
    padding: .5em 1em;
}
input[type=button][disabled] {
    background-color: #ddd;
    color: #fff;
}
input[type=password]:focus, input[type=text]:focus, input[type=url]:focus, textarea:focus {
    border-color: #007fff;
}
.button, a.button, button, input[type=button] {
    -webkit-appearance: none;
    background: #007fff;
    color: #fff;
    border-radius: 2px;
}
</style>
