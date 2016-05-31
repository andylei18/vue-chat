'use strict'
import Vue from 'vue'

const state = {
  shuolist: {


  }
}

const mutations = {
  ['USER_INIT'] (state, datasnapshot) {
    state.info = datasnapshot.val() || {}
  },
  ['RECEIVE_SHUO'] (state ,  datasnapshot) {
    let key = datasnapshot.key()
    let p = datasnapshot.val()
    state.shuolist.hasOwnProperty(key) || Vue.set(state.shuolist, key, p)
  },
  ['ERROR_SHUO'] (state) {

  }

}

export default {
  state,
  mutations
}
