/**
 * Created by dinglei on 16/4/24.
 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './app.vue'
import store from './vuex/store'
import { getAllMessages } from './vuex/actions'

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
