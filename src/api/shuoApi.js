'use strict'

import { Shuo } from './classObject'

export default function (ref) {
  let shuoRef
  //初始化用户信息
  const init = (dispatch) => {
    let authData = ref.getAuth()
    let uid = authData.uid.split('simplelogin:').join('')
    shuoRef = ref.child(uid).child('shuolist')//说说列表
    let shuoRefQuery = shuoRef.orderByChild('nickname')

    shuoRefQuery.off('value')
    shuoRefQuery.off('child_added')
    shuoRefQuery.off('child_changed')
    shuoRefQuery.off('child_removed')

    shuoRefQuery.once('value', datasnapshot => {
      dispatch('SHUOS_INIT', datasnapshot)
    })
    shuoRefQuery.on('child_added', datasnapshot => {
      dispatch('SHUOS_ADD', datasnapshot)
    })

  }
  //创建用户信息
  const creatShuo = (dispatch) => {
    let shuo = new Shuo()
    shuoRefQuery.once("value", function(snapshot) {
      //查询用户信息是否存在
      if(snapshot.exists()){
        shuoRefQuery.set(shuo, err => err && dispatch('SHUOS_ERROR', err))
      }else{
        shuoRefQuery.push(shuo, err => err && dispatch('SHUOS_ERROR', err))
      }
    })
  }

  return {
    init,
    creatShuo
  }
}
