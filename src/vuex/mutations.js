import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, messages) {
    let latestMessage

    for(let i in messages){
      const message = messages[i]

      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }

      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      addMessage(state, message)

    }
    
    setCurrentThread(state, latestMessage.threadID)
  },

  [types.RECEIVE_MESSAGE] (state, message) {
    addMessage(state, message)
  },

  [types.SWITCH_THREAD] (state, id) {
    setCurrentThread(state, id)
  }
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
  // add a `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  // add it to the messages map
  set(state.messages, message.id, message)
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  // mark thread as read
  state.threads[id].lastMessage.isRead = true
}
