import Vue from 'vue'
import WildVue from 'wildvue'
import VueRouter from 'vue-router'
import wilddog from 'wilddog'
import App from './app.vue'

//消息提醒
import Toast from 'vue-toast-mobile'
window.Toast = Toast

window.wilddog = wilddog

Vue.use(VueRouter)
Vue.use(WildVue)

Vue.config.debug = true

const router = new VueRouter({
	//abstract:true,
	//地址栏不会有变化
	//以下设置需要服务端设置
	hashbang: true,
	history: false,//当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
	saveScrollPosition: true,
	transitionOnLoad: true,
	linkActiveClass:'nav-active' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
})

require('./routers')(router);
router.start(App,'app');


