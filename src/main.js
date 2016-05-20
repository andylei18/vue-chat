import Vue from 'vue'
import WildVue from 'wildvue'
import wilddog from 'wilddog'
import App from './views/app.vue'


Vue.use(WildVue)
window.wilddog = wilddog


new Vue({
  el: 'body',
  components: { 'app': App }
})

