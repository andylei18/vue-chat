<style src="../assets/styles/base.css"></style>

<template>
  <div class="wxchat">
    <!--BEGIN 头部组件-->
    <head-module></head-module>
    <!--END   头部组件-->
    <!--BEGIN 登录注册组件-->
    <modal-module :login.sync ="login"></modal-module>
    <!--BEGIN 登录注册组件-->





  </div>
</template>

<script>
  //加载公用小组件
  //import Loading from '../components/loading.vue'
  import HeadModule from './head.vue'       //头部组件
  import ModalModule from './login.vue'     //登录注册组件

  export default {
      data () {
        return {
          login:{
            show:false,
            isLogin:false
          }
        }
      },
      components:{
        HeadModule,ModalModule
      }
  }
</script>
