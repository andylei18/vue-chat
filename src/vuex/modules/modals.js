'use strict'

// initial state
const state = {
  // CONFIRM: {
  //   isActive: null,
  //   msg: 'default confirm msg.',
  //   onConfirm: null,
  //   onCancel: null
  // },
  LOGIN: {// login modal
    isActive: null,
    errorMsg: null
  },
  Confirm: {
    message:'',
    show:false
  }
}

// mutations
const mutations = {
  ['MODAL_OPEN'](state, type, otherAttrs){
    let modal = state[type]
    modal.isActive = true
    for (let k in otherAttrs) {
      modal.hasOwnProperty(k) && (modal[k] = otherAttrs[k])
    }
  },
  ['MODAL_CLOSE'](state, type){
    state[type].isActive = false
  },
  '[UPDATE_LINK_NAME]'(state, name){
    state.FAVLINK.link.name = name
  },
  '[UPDATE_LINK_URL]'(state, url){
    state.FAVLINK.link.url = url
  },
  // confirm
  '[CONFIRM_OPEN]'(state, data){
    state.CONFIRM.isActive = true;
    for (let k in data) {
      state.CONFIRM.hasOwnProperty(k) && (state.CONFIRM[k] = data[k])
    }
  },
  '[CONFIRM_CLOSE]'(state){
    state.CONFIRM.isActive = false
    state.CONFIRM.onConfirm = null
    state.CONFIRM.onCancel = null
  },

  //conFirm
  ['SHOW_CONFIRM'] (state, msg) {
    console.log(state)
    state.Confirm.message = msg
    state.Confirm.show = true
  },
  ['HIDE_ALERT'] (state, msg) {
    state.Alert.message = ''
    state.Alert.show = false
  },
}

export default {
  state,
  mutations
}
