'use strict'

import { User } from './classObject'

export default function (ref) {
  let userRef
  //初始化用户信息
  const init = (dispatch) => {
    let authData = ref.getAuth()
    let uid = authData.uid.split('simplelogin:').join('')
    userRef = ref.child(uid)
    let userRefQuery = userRef.orderByChild('nickname')

    userRefQuery.off('value')
    userRefQuery.off('child_added')
    userRefQuery.off('child_changed')
    userRefQuery.off('child_removed')

    userRefQuery.once('value', datasnapshot => {
      dispatch('USER_INIT', datasnapshot)
    })
    userRefQuery.on('child_added', datasnapshot => {
      dispatch('USER_ADD', datasnapshot)
    })
    userRefQuery.on('child_changed', datasnapshot => {
      dispatch('USER_UPDATED', datasnapshot)
    })
    userRefQuery.on('child_removed', datasnapshot => {
      dispatch('USER_REMOVE', datasnapshot)
    })

    if(uid!=""){
      addUser()
    }
  }
  //创建用户信息
  const addUser = (dispatch) => {
    let user = new User()
    userRef.once("value", function(snapshot) {
      //查询用户信息是否存在
      if(snapshot.exists()){
        userRef.set(user, err => err && dispatch('USERS_ERROR', err))
      }else{
        userRef.push(user, err => err && dispatch('USERS_ERROR', err))
      }
    })
  }

  const getuserinfo = (dispatch) => {
    userRef.once("value",function(snapshot){
      dispatch('USER_INFO_GET',snapshot.val())
    })
  }

  //更新用户信息
  const updateUser = (dispatch, key, user) => {
    userRef.child(key).update({
      nickname: user.nickname,
      faceimg: user.faceimg
    }, err => err ? dispatch('USERS_ERROR', err, key) : dispatch('PANELS_CLOSE_EDIT', key))
  }
  //删除用户信息
  const removeUser = (dispatch, key) => {
    userRef.child(key).remove(err => err ? dispatch('USERS_ERROR', err) : dispatch('CONFIRM_CLOSE'))
  }

  return {
    init,
    addUser,
    updateUser,
    removeUser
  }
}
