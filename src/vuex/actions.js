'use strict'
import api from "../api"

export const showConfirm = ({ dispatch }, msg) => {
  dispatch('SHOW_CONFIRM', msg)
}
export const showOverlay = ({ dispatch }) => {
  dispatch('SHOW_OVERLAY')
}

export const checkAuth = ({dispatch}) => {
  api.auth.checkAuth().then(
    () => {
      dispatch('AUTH_SIGN_IN_SUCCESS')
      //dispatch('MODAL_CLOSE', 'LOGIN')
    },
    () => {
      dispatch('AUTH_REQUIRED');
      //dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Please sign in ...'})
    }
  )
}

//登录
export const singIn = ({dispatch}, email, password, faceid ,faceurl) => {

  return api.auth.signIn(email,password,faceid,faceurl).then(
    () => {
      dispatch('AUTH_SIGN_IN_SUCCESS',email, password, faceid ,faceurl)
      //dispatch('HIDE_LOGIN')
    },
    () => {
      dispatch('AUTH_SIGN_IN_FAILED')
      //dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Invalid email or password'})
    }
  )


}

//退出登录
export const signOut = ({dispatch}) => {
  return api.auth.signOut().then(
    () => {
      dispatch('AUTH_REQUIRED')
    }
  )
}
//初始化说说列表
export const initShuo = ({dispatch}) => {
  api.shuos.init(dispatch)
}
//发送说说
export const sendTweet = ({dispatch} , text , shuolist) => {
   api.shuos.creatShuo(dispatch,text,shuolist)
}
//获取所有信息
export const getAllMessages = ({ dispatch }) => {
  api.getAllMessages(messages => {
    dispatch('MESSAGES_ALL', messages)
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

//初始化用户
export const initUser = ({dispatch}) => {
  api.users.init(dispatch)
}
//新增用户信息
export const addUser = ({dispatch},id,url) => {
  api.users.addUser(dispatch,id,url)
}
//更新用户信息
export const updateUser = ({dispatch}, key, user) => {
  api.users.updateUser(dispatch, key, user)
}
