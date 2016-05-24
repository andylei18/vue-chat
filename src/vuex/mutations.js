import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, messages) {
    let latestMessage

    messages.forEach((msg) => {
      msg = msg.val()
      if (!state.threads[msg.threadID]) {
        createThread(state, msg.threadID, msg.authorName , msg.authorImg)
      }
      if (!latestMessage || msg.crtime > latestMessage.crtime) {
        latestMessage = msg
      }
      //addMessage(state, msg)
    })
    setCurrentThread(state, latestMessage.threadID)
  },

  [types.RECEIVE_MESSAGE] (state, message) {
    addMessage(state, message)
  },

  [types.SWITCH_THREAD] (state, id) {
    setCurrentThread(state, id)
  }
}

function createThread (state, id, name , img) {
  set(state.threads, id, {
    id,
    name,
    img,
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
  //state.threads[id].lastMessage.isRead = true
}
