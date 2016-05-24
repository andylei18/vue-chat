import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

// const state = {
//   Toast: {
//     message: '',
//     show: false
//   }
// }

// const mutations = {
//   ['SHOW_TOAST'] (state, msg) {
//     state.Toast.message = msg
//     state.Toast.show = true
//   },
//   ['HIDE_TOAST'] (state, msg) {
//     state.Toast.message = ''
//     state.Toast.show = false
//   }
// }

export default new Vuex.Store({
  state :{
    currentThreadID: null,
    threads:{

    }
  },
  mutations,
  strict: true
})
