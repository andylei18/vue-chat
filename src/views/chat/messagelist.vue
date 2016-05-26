<template>
  <div class="message-section">
    <h3 class="message-thread-heading"></h3>
    <ul class="message-list" v-el:list>
      <message-module
        v-for="message in messages | orderBy 'timestamp'"
        track-by="id"
        :message="message">
      </message-module>
    </ul>
    <textarea class="message-composer" @keyup.enter="trySendMessage"></textarea>
  </div>
</template>

<script>
  import MessageModule from './message'
  import { sendMessage } from '../../vuex/actions'
  import { currentThread, currentMessages } from '../../vuex/getters'

  export default {
      components:{ MessageModule },
      vuex: {
        getters: {
          thread: currentThread,
          messages: currentMessages
        },
        actions: {
          sendMessage
        }
      },
      watch: {
        'thread.lastMessage': function () {
          this.$nextTick(() => {
            const ul = this.$els.list
            ul.scrollTop = ul.scrollHeight
          })
        }
      },
      methods: {
        trySendMessage (e) {
          const text = e.target.value
          if (text.trim()) {
            this.sendMessage(text, this.thread)
            e.target.value = ''
          }
        }
      }
  }
</script>
