import * as api from '../../api'

//获取所有信息
export const getAllMessages = ({ dispatch }) => {
  api.getAllMessages(messages => {
    dispatch('RECEIVE_ALL', messages)
  })
}

//切换用户
export const switchThread = ({ dispatch }, id) => {
  dispatch('SWITCH_THREAD', id)
}

//发送消息
export const sendMessage = ({ dispatch }, text, thread) => {
  api.createMessage({ text, thread }, message => {
    dispatch('RECEIVE_MESSAGE', message)
  })
}
