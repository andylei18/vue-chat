import Vue from 'vue'
import App from './views/app.vue'
import Vuex from 'vuex'
import store from './vuex/store'

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
