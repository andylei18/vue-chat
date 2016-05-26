import Vue from 'vue'
import { set } from 'vue'
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
    let latestMessage
    messages.forEach(message => {
      message = message.val()
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
  ['SWITCH_THREAD'] (state, id) {
    setCurrentThread(state, id)
  },
  ['RECEIVE_MESSAGE'] (state, message) {
    addMessage(state, message)
  },
}

function createThread (state, id, name) {
  set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}

function addMessage (state, message) {
  message.isRead = message.threadID === state.currentThreadID
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  set(state.messages, message.id, message)
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}


export default new Vuex.Store({
  state,
  mutations,
  strict: true
})
