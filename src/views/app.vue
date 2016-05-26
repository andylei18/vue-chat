<style src="../assets/styles/base.css"></style>
<style src="../assets/styles/chatlist.css"></style>
<template>
  <div class="wxchat">
    <!--BEGIN 头部组件-->
    <head-module v-ref:head></head-module>
    <!--END   头部组件-->

    <!--BEGIN 登录注册组件-->
    <modal-module :login.sync ="login" v-ref:login></modal-module>
    <!--BEGIN 登录注册组件-->

    <div id="chatmodule" v-show="login.isLogin" class="chatapp">
      <!--BEGIN 对话列表组件-->
      <tlist-module></tlist-module>
      <!--BEGIN 对话列表组件-->

      <!--BEGIN 消息列表组件-->
      <mlist-module></mlist-module>
      <!--BEGIN 消息列表组件-->
    </div>

    <!--BEGIN 提示组件-->
    <com-toast :toast="toast"></com-toast>
    <!--BEGIN 提示组件-->

    <!--BEGIN 炸花组件-->
    <com-cover :cover="cover"></com-cover>
    <!--BEGIN 炸花组件-->
  </div>
</template>

<script>
  //加载公用小组件
  import {
    comToast,
    comCover
  } from '../components/index'

  import HeadModule from './head.vue'       //头部组件
  import ModalModule from './login.vue'     //登录注册组件

  import TlistModule from './threadList.vue'     //对话列表组件
  import MlistModule from './messageList.vue'     //消息列表组件

  export default {
      data () {
        return {
          login: {
            show:false,
            isLogin:false,
          },
          toast: {
            message: '',
            show: false
          },
          cover: {
            show:false
          }
        }
      },
      components: {
        HeadModule,ModalModule,MlistModule,TlistModule,
        comToast,comCover
      },
      beforeCompile (){
        this.cover.show = true
      },
      ready (){
        this.cover.show = false
      },
      methods: {
          //统一toast
        creatToast (message){
          this.toast.message = message
          this.toast.show = true
        },
      }
  }
</script>
