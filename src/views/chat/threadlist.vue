<template>

  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span>
    </div>

    <ul class="thread-list">
      <thread-moudle
        v-for="thread in threads"
        track-by="id"
        :thread="thread">
      </thread-moudle>
    </ul>
  </div>

</template>

<script>

  //业务模块组件
  import ThreadModule from './thread'//对话列表明细组件

  export default {

    data (){
      return {

      }
    },
    components:{ ThreadModule },
    vuex :{
      getters :{
        threads : state.threads
      },
    },
    computed: {
      unreadCount () {
        // const threads = this.threads
        // return Object.keys(threads).reduce((count, id) => {
        //   return threads[id].lastMessage.isRead
        //     ? count
        //     : count + 1
        // }, 0)
      }
    }

  }

</script>
