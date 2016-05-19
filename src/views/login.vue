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
            
            <div class="form_wrap"> 
	            <div class="form_mod_wrap mb15">
	            	<div class="form_mod"> <div> 
	            	<input type="text" class="js-uname userselect text" placeholder="昵称/邮箱/手机号"> </div> 
	            </div>
	            <div class="form_mod"> <div> 
	            	<input type="password" class="js-pwd userselect text" placeholder="密码"> </div> 
	            </div> 
            </div> 
            <div class="js-captcha-container"></div> 
	            <div class="login_show"> 
	            	<span class="login_btn">登录</span> 
	            </div>
	            <div class="login_show"> 
	            	<span class="login_btn">注册</span> 
	            </div>  
            </div>

        </div>
        <!--END login_box-->
    </div>
</template>

<script>
    
    //局部业务组件
    
    export default {
        components: {
             
        },
        data () {
            return {
                
            }
        },
        route: {
	        data (transition) {
	          const self = this
	          //请求列表全部数据
	          self.$route.router.app.loading = false
	          //滚动加载
	          //self.scrollList();
	          /*self.$wilddogRefs.anArray.push({
				  text: 'hello'
			  })*/
	        },
	        deactivate (transition) {
	          //$(window).off('scroll');
	          transition.next()
	        }
	    },
	    wilddog: {

	    }
    }

</script>