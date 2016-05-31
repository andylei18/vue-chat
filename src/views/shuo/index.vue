<template>
  <div class="container">

    <div class="row">
      <div class="bp_frame">
        <div class="bp_frame_left left">
          <!--BEGIN 左侧菜单组件-->
          <left-module></left-module>
          <!--BEGIN 左侧菜单组件-->
        </div>
        <div class="bp_frame_main content-main top-timeline-tweetbox">
          <!--BEGIN main组件-->
          <main-module></main-module>
          <!--BEGIN main组件-->
        </div>
      </div>
    </div>

    <div class="bp_chat_btn" @click.stop="openChat($event)">
      <div class="bp_fold_bg">
        <p class="bp_fold_cont clearfix">
          <i class="material-icons chat_icons bp_ficon left">chat_bubble_outline</i>
          <em class="bp_fold_font left">私信聊天</em>
        </p>
      </div>
    </div>

    <!--BEGIN chat组件-->
    <chat-module v-show="Chat.show" :chat="Chat" transition="chat"></chat-module>
    <!--BEGIN chat组件-->

  </div>
</template>
<script>
  import '../../assets/styles/shuo.css'

  //vuex
  import { isLoginOnline } from '../../vuex/getters'
  import store from '../../vuex/store'
  import { initUser } from '../../vuex/actions'  //注册事件

  //业务模块组件
  import ChatModule from '../../views/chat/index'  //chat组件
  import LeftModule from './left'  //左侧菜单组件
  import MainModule from './main'  //main组件

  export default {
    components: {
      ChatModule,
      LeftModule,
      MainModule
    },
    data () {
      return {
        Chat: {
          show:false
        }
      }
    },
    vuex: {
      getters: {
        isLoginOnline
      },
      actions: {
        initUser
      }
    },
    created () {
      if (isLoginOnline) this.initUser()
    },
    ready (){
      document.addEventListener('click', this.componentsClose)
    },
    destroy (){
      document.removeEventListener('click', this.componentsClose)
    },
    methods: {
      //打开chat组件
      openChat (e) {
        //console.log(e)
        const bodyWidth = document.body.offsetWidth
        //this.Chat.style.width = bodyWidth/3.4
        this.Chat.show = true
      },
      componentsClose () {
        this.Chat.show = false
      }
    }
  }


</script>
