<template>
  <div class="container">
    <div class="row">

    </div>

    <div class="bp_chat_btn" @click.stop="openChat($event)">
      <div class="bp_fold_bg green darken-3">
        <p class="bp_fold_cont clearfix">
          <!-- <span class="fold_icon W_fl"></span> -->
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

  //业务模块组件
  import ChatModule from '../../views/chat/index'  //chat组件

  export default {
    components: {
      ChatModule
    },
    data () {
      return {
        Chat: {
          show:false,
          style:{
            width:560,
          }
        }
      }
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
