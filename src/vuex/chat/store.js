import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentThreadID: null,
  threads:{

  },
  messages:{

  }
}

const mutations = {
  ['RECEIVE_ALL'] (state, messages) {
    console.log(state)
    let latestMessage
    messages.forEach(message => {
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      addMessage(state, message)
    })
    setCurrentThread(state, latestMessage.threadID)
  },
}

export default new Vuex.Store({
  state,
  mutations,
  strict: true
})
