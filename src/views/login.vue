<style src="../assets/styles/login.css"></style>
<template>
	<div class="login ng-scope">

        <!--BEGIN logo-->
        <div class="logo">
            <i class="web_wechat_login_logo"></i>
        </div>
        <!--END logo-->

        <!--BEGIN login_box-->
        <div class="login_box">
            
            <div class="form_wrap" v-if="!isLogin"> 
	            <div class="form_mod_wrap mb15">
	            	<div class="form_mod"> 
	            		<div> 
	            			<input type="text" class="js-uname userselect text" placeholder="昵称/邮箱/手机号" v-model="uname"> 
	            		</div> 
	        	</div>
	            <div class="form_mod"> 
	            	<div> 
	            		<input type="text" class="js-pwd userselect text" placeholder="密码" v-model="upwd"> 
	            	</div> 
	            </div> 
            </div> 
            <div class="js-captcha-container"></div> 
	            <div class="login_show"> 
	            	<span class="login_btn" @click="loginEvent">登录</span> 
	            </div>
	            <div class="login_show"> 
	            	<span class="regist_btn" @click="registEvent">注册</span> 
	            </div>  
            </div>

            <a v-else v-link="{name:'home',params:{uid:uid}}">登录过了亲，回到聊天界面了</a>

        </div>
        <!--END login_box-->

    </div>
</template>

<script>
    const AppId = 'wxuser0'
    const myWillog = new Wilddog('https://' + AppId + '.wilddogio.com/')

    export default {
        components: {
             
        },
        data () {
            return {
                uname:"",
                upwd:"",
                uid:"",
                isRegist:false,
                isLogin:false,
            }
        },
        route: {
	        data (transition) {
	          const self = this
	          
	          //请求列表全部数据
	          self.$route.router.app.loading = false
			  
	        },
	        deactivate (transition) {
	          //$(window).off('scroll');
	          transition.next()
	        }
	    },
	    wilddog: {
			userlist: {
			      source:myWillog,
			      // 可选，作为对象绑定
			      asObject: false,
			      // 可选，提供一个回调
			      cancelCallback: function () {}
			}
	    },
	    methods:{
        	//登陆
        	loginEvent () {
        		const name = this.uname
        		const pwd = this.upwd
        		if (name.trim()!=''&&pwd.trim()!='') {
			        this.userlist.forEach(item => {
		                if(item.name == name&&item.pwd == pwd){
		                	sessionStorage.setItem("uid",item.id)
				        	this.$router.go({name:'home',params:{uid:item.id}})
		                }
		            })
			    }else{
		            this.Toast('请输入正确得用户名和密码!')
		            return false
			    }
        	},
        	//注册
        	registEvent (){
        		let num = 0
        		const name = this.uname
        		const pwd = this.upwd
        		if (name.trim()!=''&&pwd.trim()!='') {
        			this.getUserList(name)

        			if(!this.isRegist){
						this.$wilddogRefs.userlist.push({
						  name: name.trim(),
						  pwd:pwd.trim(),
						  id:'WX' + (new Date()).getTime()+(num++)
						})
						this.Toast('注册成功!')
        			}
			    }
        	},
        	//查询用户列表
        	getUserList (name){
        		this.userlist.forEach(item => {
	                if(item.name == name){
			            this.Toast('注册失败,用户已经存在!')
			            this.isRegist = true
			            return false
	                }else{
	                	this.isRegist = false
	                }
	            })
        	},
        	//提示语
        	Toast(text){
        		Toast({
	                message: text,
	                position: 'middle',
	                duration: 3000
	            })
	            return false
        	}
        }
    }

</script>