<template>
  <div class="bp_chat container" :style="{width:chat.style.width + 'px'}">
    <div class="row">

      <!--BEGIN 对话列表组件-->
      <threadlist-module></threadlist-module>
      <!--END  对话列表组件-->

      <!--BEGIN 消息列表组件-->
      <messagelist-module></messagelist-module>
      <!--END  消息列表组件-->

    </div>
  </div>
</template>

<script>
  //加载chat组件css文件
  import '../../assets/styles/chat.css'

  //业务模块组件
  import ThreadlistModule from './threadlist'//对话列表组件
  import MessagelistModule from './messagelist'//消息列表组件

  //加载vuex store
  import store from '../../vuex/store'
  import { getAllMessages } from '../../vuex/actions'
  getAllMessages(store)

  export default {
      replace:true,
      components: {
        ThreadlistModule,
        MessagelistModule
      },
      props:['chat'],
      vuex: {

      },
      store,
      route: {
        data (transition){

        }
      }
  }

</script>
