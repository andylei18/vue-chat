'use strict'
import Vue from 'vue'
import { set } from 'vue'
import Vuex from 'vuex'
import users from "./modules/users"

Vue.use(Vuex)

const state = {
  isLoginOnline: false,
  currentThreadID: null,
  threads: {

  },
  messages: {

  },
  //login
  login:{
    show:true
  },
  //overLay
  overLay: {
    show:false
  },
  //Confirm
  Confirm: {
    message:'',
    show:false
  },

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





  //login
  ['HIDE_LOGIN'] (state) {
    state.login.show = false
  },
  //overLay
  ['SHOW_OVERLAY'] (state) {
    state.overLay.show = true
  },
  //conFirm
  ['SHOW_CONFIRM'] (state, msg) {
    state.Confirm.message = msg
    state.Confirm.show = true
  },
  ['HIDE_CONFIRM'] (state, msg) {
    state.Confirm.message = ''
    state.Confirm.show = false
  },

  //退出登录
  ['AUTH_REQUIRED'] (state) {
    state.isLoginOnline = false
  },
  //登录成功
  ['AUTH_SIGN_IN_SUCCESS'] (state) {
    state.isLoginOnline = true
  },
  //登录失败
  ['AUTH_SIGN_IN_FAILED'] (state) {
    state.isLoginOnline = false
  },
}

function createThread (state, id, name) {
  Vue.set(state.threads, id, {
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
  Vue.set(state.messages, message.id, message)
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}


export default new Vuex.Store({
  state,
  mutations,
  modules: {
    users
  },
  strict: true
})
