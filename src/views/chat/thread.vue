<template>

  <li
    class="thread-list-item"
    :class="{ active: thread.id === currentThreadID }"
    @click="switchThread(thread.id)">
    <h5 class="thread-name">{{ thread.name }}</h5>
    <img class="thread-img" :src="thread.img">
    <div class="thread-time">
      <!-- {{ thread.lastMessage.timestamp | time }} -->
    </div>
    <div class="thread-last-message">
      <!-- {{ thread.lastMessage.text }} -->
    </div>
  </li>

</template>

<script>

  import { switchThread } from '../../vuex/chat/action'

  export default {
    props: ['thread'],
    vuex: {
      getters: {
        currentThreadID: state => state.currentThreadID
      },
      actions: {
        switchThread
      }
    }
  }

</script>
