<template>

  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">
        未读人数: {{ unreadCount }}
      </span>
    </div>

    <ul class="thread-list">
      <thread-module
        v-for="thread in threads"
        track-by="id"
        :thread="thread">
      </thread-module>
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
    vuex: {
      getters: {
        // 一个状态的 getter 函数，将会把 `store.state.threads` 绑定为 `this.count`
        threads: state => state.threads
      }
    },
    computed: {
      unreadCount () {
        const threads = this.threads
        return Object.keys(threads).reduce((count, id) => {
          return threads[id].lastMessage.isRead
            ? count
            : count + 1
        }, 0)
      }
    }

  }

</script>
