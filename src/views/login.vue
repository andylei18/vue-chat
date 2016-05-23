<template>
	<div class="modal" :class="login.show?'open':''">
		<div class="container">
			<div class="modal-close text-a" @click="this.login.show =!this.login.show"><i class="ion-close-round"></i></div>
			<div class="inner">
				<div id="login-form">
					<p class="input-relative">
						<input type="text" name="uid" placeholder="用户名（6位）" maxlength="6" required="required" 
							v-model="user.uid" 
							@keyup="getUid(user.uid)">
						<span class="input-alert tag true fade-transition" v-show="user.uid.trim().length==6" v-text="user.isUid?'用户名已存在':'用户名可注册'"></span>
					</p>
					<p class="fade-right input-relative fade-right-transition" 
						v-show="user.uid.trim().length==6&&!user.isUid">
						<input type="text" name="nickname" placeholder="昵称" required="required" 
							v-model="user.nickname">
						<span class="input-alert tag true fade-transition" 
							v-show="user.nickname.trim().length==0" 
							v-text="user.nickname.trim().length==0?'请正确填写此字段':''">
						</span>
					</p>
					<p class="fade-right input-relative fade-right-transition" 
						v-show="user.uid.trim().length==6">
						<input type="text" style="display:none">
						<input type="password" name="upwd" placeholder="密码（不少于6位）" autocomplete="off" required="required" minlength="6" 
							v-model="user.upwd">
						<span class="input-alert tag true fade-transition" 
							v-show="user.upwd.trim().length<6" 
							v-text="user.upwd.trim().length<6?'请正确填写此字段':''">
						</span>
					</p>
					<div class="fade-right input-relative fade-right-transition avatar-list" 
						v-show="user.uid.trim().length==6&&!user.isUid">
						<img 
						v-for="item in avatar" class="avatar-item" 
						:src="item.url" 
						:id="item.id" 
						@click="ckImgEvent(item)"
						:class="item.ck?'active':''">
					</div>
					<p class="text-right fade-right-transition" 
						v-show="user.uid.trim().length==6">
						<input type="button" value="注册" class="small"
							@click="creatUser" :disabled="this.user.avatarid==''" v-show="!user.isUid"> 
						<input type="button" value="登陆" class="small"
							@click="loginEvent" :disabled="!this.user.isUid"> 
					</p>
				</div>
			</div>
		</div>

		<com-toast :toast="toast"></com-toast>
	</div>
</template>
<script>
	//查询野狗服务
	import { UserList } from '../wilddog'

	//公用组件
	import {
	  comToast,
	} from '../components/index'

	export default {
	  data () {
	    return {
	      avatar:[
	      	{id:"chatAvatar1",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar1.jpg",ck:false},
	      	{id:"chatAvatar2",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar2.jpg",ck:false},
	      	{id:"chatAvatar3",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar3.jpg",ck:false},
	      	{id:"chatAvatar4",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar4.jpg",ck:false},
	      	{id:"chatAvatar5",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar5.jpg",ck:false},
	      	{id:"chatAvatar6",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar6.jpg",ck:false},
	      	{id:"chatAvatar7",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar7.jpg",ck:false},
	      	{id:"chatAvatar8",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar8.jpg",ck:false},
	      	{id:"chatAvatar9",url:"http://o7kxl993s.bkt.clouddn.com/chatAvatar9.jpg",ck:false}
	      ],
	      user:{
	      	uid:"",
	      	isUid:true,
	      	nickname:"",
	      	upwd:"",
	      	avatarid:""	      
	      },
	      toast: {
	        message: '',
	        show: false
	      }
	    }
	  },
	  props:['login'],
	  components:{
	  	comToast
	  },
	  methods:{
	  	//头像选择
	  	ckImgEvent (obj){
	  		this.avatar.forEach(item => {
	  			item.ck = false
            })
            obj.ck = true
            this.user.avatarid = obj.id
	  	},
	  	//查询用户名
	  	getUid (uid){
	  		const self = this
	  		const uidValue = uid.trim()
	  		if(uidValue!=""&&uidValue.length==6){
	  			self.user.isUid = false
	  			UserList.once("value", (snapshot) =>{
				    snapshot.forEach(item => {
			  			if(item.val().uid===uidValue){
			  				self.user.isUid = true
			  			}
		            })
				},(errorObject) => {
				    console.log("The read failed: " + errorObject.code);
				});
	  		}
	  	},
	  	//新建用户
	  	creatUser (){
	  		const uid = this.user.uid.trim()
	  		const nickname = this.user.nickname.trim()
	  		const upwd = this.user.upwd.trim()
	  		const timestamp = Date.now()
  			const timeid = 'wx_' + timestamp

  			if(!this.user.isUid ){

				if(uid.length>0&&uid.length<6){
		  			return false
		  		}
		  		if(nickname.length==0){
		  			return false
		  		}
		  		if(uid.length>0&&uid.length<6){
		  			return false
		  		}

		  		UserList.push({
				    uid:this.user.uid,
			      	nickname:this.user.nickname,
			      	upwd:this.user.upwd,
			      	avatarid:this.user.avatarid,
			      	crtime:timeid
				});
		  		this.creatToast("注册成功!")
  			}
	  	},
	  	//登陆
	  	loginEvent (){
			const uid = this.user.uid.trim()
	  		const upwd = this.user.upwd.trim()

			UserList.orderByChild("uid").limitToFirst(1).on("child_added",(snapshot) =>{
				const userid = 	snapshot.val().uid
				const userpwd = snapshot.val().upwd
				const nickname = snapshot.val().nickname
				const avatarid = snapshot.val().avatarid
				if(userid==uid&&userpwd==upwd){
					const usersession = JSON.stringify(snapshot.val())
					sessionStorage.setItem("user",usersession)
					sessionStorage.setItem("isLogin",true)
					this.creatToast("登陆成功!")
					this.login.isLogin = true
					setTimeout(() => {
				        this.login.show = false
				    }, 2000)
				}else{
					this.creatToast("密码错误,请重新输入!")
					return false
				}
			},(errorObject) => {
			    console.log("The read failed: " + errorObject.code);
			});
	  	},
	  	//统一toast
	  	creatToast (message) {
	      this.toast.message = message
	      this.toast.show = true
	    },

	  }
	}

</script>
<style>
	[v-cloak]{
		display: none;
	}
	.v-cloak--block,.v-cloak--inline,.v-cloak--inlineBlock{
		display: none;
	}
	.modal {
	    position: fixed;
	    z-index: 4;
	    top: -30em;
	    left: 0;
	    right: 0;
	    background: #fff;
	    border-bottom: 1px solid #ddd;
	    padding-top: 4.5em;
	    padding-bottom: 1em;
	    -webkit-transition: -webkit-transform,.3s,ease-in-out;
	    transition: transform,.3s,ease-in-out;
	}
	.modal.open {
	    -webkit-transform: translateY(30em);
	    transform: translateY(30em);
	}
	.modal .container {
	    padding-left: 1em;
	    padding-right: 1em;
	}
	.text-a {
	    cursor: pointer;
	    -webkit-transition: color,.3s;
	    transition: color,.3s;
	}
	.text-a:active, .text-a:hover {
	    color: #007fff;
	}
	.modal-close {
	    position: absolute;
	    top: -1em;
	    padding: 1em;
	    right: 0;
	    cursor: pointer;
	}
	.inner {
	    width: 25vw;
	    min-width: 480px;
	    margin-left: auto;
	    margin-right: auto;
	}
	.input-relative {
	    position: relative;
	}
    input[type=text],input[type=password],input[type=button]{
	    padding: .5em 0;
	    width: 100%;
	    display: block;
	    border: none;
	    box-shadow: none;
	}
	input[type=text], input[type=url], input[type=password],textarea {
	    border-bottom: 1px solid #ddd;
	    -webkit-transition: border,.3s;
	    transition: border,.3s;
	}
	.tag {
	    line-height: 1.5em;
	    display: inline-block;
	    font-size: .8em;
	    padding: 0 .5em;
	    border: 1px solid #f0f0f0;
	    color: #909090;
	    -webkit-transition: color,.3s;
	    transition: color,.3s;
	}
	.input-alert {
	    position: absolute;
	    top: 0;
	    right: 0;
	    padding: .5em 1em;
	    -webkit-transition: opacity,.3s;
	    transition: opacity,.3s;
	}
	.tag.true, .tag:hover {
	    color: #007fff;
	    border-color: rgba(0,127,255,.15);
	    background-color: rgba(0,127,255,.05);
	}
	.text-right {
	    text-align: right;
	}
	.button.small, a.button.small, button.small, input[type=button].small {
	    display: inline-block;
	    width: auto;
	    padding: .5em 1em;
	}
	input[type=button][disabled] {
	    background-color: #ddd;
	    color: #fff;
	}
	input[type=password]:focus, input[type=text]:focus, input[type=url]:focus, textarea:focus {
	    border-color: #007fff;
	}
	.button, a.button, button, input[type=button] {
	    -webkit-appearance: none;
	    background: #007fff;
	    color: #fff;
	    border-radius: 2px;
	}
	.avatar-list {
	    padding:10px;
	}
	.avatar-item {
	    background-size: contain;
	    display: inline-block;
	    height: 60px;
	    width: 60px;
	    margin: 10px;
	    border-radius: 50%;
	}
	.avatar-item:hover,.avatar-item:active,.avatar-item.active{
		cursor: pointer;
		border: 5px solid #eb7350;
    	background: #fff9ec;
	}
</style>
