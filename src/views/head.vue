<template>
	<header>
		<div class="container clearfix">
			<ul class="actions">
				<li class="action true">
					<img src="../assets/images/logo.png" class="inline home-logo hide-when-not-large">
					<span class="hide-when-large">Qu聊</span>
				</li>
			</ul>
			<ul class="actions secondary">
				<li class="action" v-show="$parent.login.isLogin"><img :src="session.avatarimg" class="avatar inline"></li>
				<li class="action" @click="this.$parent.login.show =!this.$parent.login.show" v-show="!$parent.login.isLogin"><i class="ion-log-in"></i>
					<span>登录 / 注册</span>
				</li>
				<li class="action action-nav" @click.stop="this.navbar.show =!this.navbar.show" v-show="$parent.login.isLogin">
					<i class="ion-more action-nav-active"></i>
					<ul class="action-list" v-show="navbar.show">
						<li><a href="https://github.com/andylei18" target="_blank">我的GitHub</a></li>
						<li class="hr"></li>
						<li @click="outLogin">登出</li>
					</ul>
				</li>
			</ul>
		</div>
	</header>

</template>
<script>


	export default {
	  data () {
	    return {
	      session:{
            nickname:"",
            avatarimg:""
	      },
	      navbar:{
	      	show:false
	      }
	    }
	  },
	  components:{
	  	
	  },
	  compiled (){
	  	this.getUser()
	  },
	  ready () {
		 document.addEventListener('click', this.navbarClose)
	  },
	  destroy () {
		 document.removeEventListener('click', this.navbarClose)
	  },
	  methods:{
	  	//根据session查询
	  	getUser (){
	  		const isLogin = sessionStorage.getItem("isLogin")
	  		const update = () =>{
	  			const userinsession = JSON.parse(sessionStorage.getItem("user"))
				this.session.nickname = userinsession.nickname
	  			this.session.avatarimg = 'http://o7kxl993s.bkt.clouddn.com/'+ userinsession.avatarid +'.jpg'
	  			this.$parent.login.isLogin = true
	  		}
	  		//已登陆状态
	  		if(isLogin == "true"){
				update()
	  		}
	  		//没有session未登陆状态
	  		else{
	  			this.session.nickname = ""
		  		this.session.avatarimg = ""
	  		}
	  	},
	  	//退出登陆
	  	outLogin (){
			sessionStorage.removeItem("user")
			this.$parent.user = {
		      	uid:"",
		      	isUid:true,
		      	nickname:"",
		      	upwd:"",
		      	avatarid:""	  
	      	}
			this.$parent.login.isLogin = false
			sessionStorage.setItem("isLogin",false)
			this.$parent.creatToast("退出成功!")
	  	},
	  	//关闭navbar
	  	navbarClose (){
	  		this.navbar.show = false
	  	}
	  }
	}
</script>
<style>
	.actions-active:after, 
	.actions-active:before, 
	.categories:after, 
	.categories:before, 
	.clearfix:after, 
	.clearfix:before, 
	.entry-container:after, 
	.entry-container:before, 
	.users-list-item:after, 
	.users-list-item:before,
    header:after, 
    header:before, 
    nav:after, 
    nav:before {
	    content: " ";
	    display: table;
	}
	header {
	    position: fixed;
	    z-index: 5;
	    top: 0;
	    left: 0;
	    right: 0;
	    background: #fff;
	    border-bottom: 1px solid #f1f1f1;
	    color: #909090;
	    height: 4em;
	}
	.container {
	    width: 960px;
	    margin-left: auto;
	    margin-right: auto;
	    position: relative;
	}
	header .actions, nav .actions {
	    display: inline-block;
	    white-space: nowrap;
	}
	.action-list, .actions-active .actions, .alerts, .box-list, .categories, .comments, .entries, .entry-detail-body .recommend-box .entry-list, .home-aside .aside-list, .related-users, .ul-clear, .users-list, header .actions, nav .actions {
	    list-style: none;
	    margin: 0;
	    padding-left: 0;
	}
	header .action {
	    display: inline-block;
	    cursor: pointer;
	}
	header .action {
	    padding: 1em;
	    vertical-align: top;
	    line-height: 2em;
	}
	header .action.true{
		 color: #ff8140;
	}
	img.inline {
	    height: 1.3em;
	    vertical-align: top;
	}
	header .home-logo {
	    height: 1.8em;
	}
	img.inline+span, span+img.inline {
	    margin-left: .5em;
	}
	header .actions.secondary{
		float: right;
	}
	img.avatar.inline {
	    width: 1.3em;
	}
	header .avatar.inline {
	    width: 2em;
	    height: 2em;
	}
	img.avatar {
	    display: inline-block;
	    width: 3em;
	    height: 3em;
	    border-radius: 50%;
	}
	header .action-nav {
	    padding-bottom: 1em;
	}
	.actions-active .action:hover, header .action:hover, nav .action:hover {
	    color: #333;
	}
	.action-nav i {
	    display: inline-block;
	    width: 1em;
	    text-align: center;
	}
	.action-list {
	    position: absolute;
	    z-index: 1;
	    top: 2em;
	    left: 0;
	    color: #666;
	    border: 1px solid #ddd;
	    background: #fff;
	    padding: .2em 0;
	}
	header .action-list {
	    top: 4em;
	    right: 0;
	    left: auto;
	}
	.action-list li {
	    padding: .5em .8em;
	    white-space: nowrap;
	}
	.action-list li:hover {
	    color: #333;
	    background-color: #f1f1f1;
	    -webkit-transition: background,.3s;
	    transition: background,.3s;
	}
	.action-list li a {
	    color: #666;
	    text-decoration: none;
	}
	.action-list li.hr {
	    padding: 0;
	    margin: .2em 0;
	    height: 1px;
	    background-color: #ddd;
	}
</style>
