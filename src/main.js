import Vue from 'vue'
import App from './views/app.vue'
import Vuex from 'vuex'
import store from './vuex/store'
import { getAllMessages } from './vuex/actions'

Vue.use(Vuex)

Vue.config.debug = true

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

new Vue({
  el: 'body',
  store,
  components: { App }
})

getAllMessages(store)
