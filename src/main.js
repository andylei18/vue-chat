import Vue from 'vue'
import Vuex from 'vuex'
import App from './views/app.vue'
import store from './vuex/store'
import WildVue from 'wildvue'
import { getAllMessages } from './vuex/actions'

Vue.use(Vuex)
Vue.use(WildVue)

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
