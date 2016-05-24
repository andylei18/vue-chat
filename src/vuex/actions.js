import * as api from '../api'
import * as types from './mutation-types'

export const showToast = ({ dispatch }, msg) => {
  dispatch('SHOW_TOAST', msg)
  setTimeout(() => {
    dispatch('HIDE_TOAST')
  }, 3000)
}


//获取所有信息
export const getAllMessages = ({ dispatch }) => {
  api.getAllMessages(messages => {
    dispatch(types.RECEIVE_ALL, messages)
  })
}

//切换用户
export const switchThread = ({ dispatch }, id) => {
  dispatch(types.SWITCH_THREAD, id)
}

//推送消息
export const sendMessage = ({ dispatch }, text, thread) => {
  api.createMessage({ text, thread }, message => {
    dispatch(types.RECEIVE_MESSAGE, message)
  })
}
