'use strict'
import Vue from 'vue'

const state = {
  info: {}
}

const mutations = {
  ['USER_INIT'] (state, datasnapshot) {
    state.info = datasnapshot.val() || {}
  },
  ['USER_TOGGLE_EDIT'] (state, panel) {
    //panel.flags.isEditing = !panel.flags.isEditing
  },
  ['USER_CLOSE_EDIT'] (state, key) {
    state.info.hasOwnProperty(key)
    // && state.info[key].flags.isEditing && (state.info[key].flags.isEditing = false)
  },
  ['USER_UPDATE'] (state, userKey, data){
    let user = state.info[userKey]
    for (let field in data) {
      user[field] = data[field]
    }
  },
  ['USER_ADD'] (state, datasnapshot) {
    let key = datasnapshot.key()
    let p = datasnapshot.val()
    //p.flags.isEditing = true
    state.info.hasOwnProperty(key) || Vue.set(state.info, key, p)
  },
  ['USER_UPDATED'] (state, datasnapshot) {
    let key = datasnapshot.key()
    let p = datasnapshot.val()
    //p.flags.isEditing = state.info[key].flags.isEditing
    Vue.set(state.info, key, p)
  },
  ['USER_REMOVE'] (state, datasnapshot) {
    let key = datasnapshot.key()
    state.info.hasOwnProperty(key) && Vue.delete(state.info, key)
  },
  ['USER_ERROR'] (state, err, key){
    state.info.hasOwnProperty(key)
    //&& (state.info[key].flags.isEditing = false)
  }

}

export default {
  state,
  mutations
}
