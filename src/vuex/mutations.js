import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, messages) {
    let latestMessage

    messages.forEach((msg) => {
      msg = msg.val()
      if (!state.threads[msg.uid]) {
        createThread(state, msg.uid, msg.nickname)
      }
      if (!latestMessage || msg.crtime > latestMessage.crtime) {
        latestMessage = msg
      }
      addMessage(state, msg)
    })
    setCurrentThread(state, latestMessage.uid)
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

function addMessage (state, msg) {
  // add a `isRead` field before adding the message
  // msg.isRead = msg.threadID === state.currentThreadID
  // // add it to the thread it belongs to
  // const thread = state.threads[msg.threadID]
  // if (!thread.messages.some(id => id === msg.id)) {
  //   thread.messages.push(msg.id)
  //   thread.lastMessage = msg
  // }
  // // add it to the messages map
  // set(state.messages, msg.id, msg)
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  // mark thread as read
  //state.threads[id].lastMessage.isRead = true
}
