<style>
	.header {
	    padding: 18px;
	    position: relative;
	}
	.header .avatar {
	    display: table-cell;
	    vertical-align: middle;
	    word-wrap: break-word;
	    word-break: break-all;
	    white-space: nowrap;
	    padding-right: 10.625px;
	}
	.header .avatar .img {
	    width: 40px;
	    height: 40px;
	    border-radius: 2px;
	    -moz-border-radius: 2px;
	    -webkit-border-radius: 2px;
	    display: block;
	    cursor: pointer;
	}
	.header .info {
	    display: table-cell;
	    vertical-align: middle;
	    word-wrap: break-word;
	    word-break: break-all;
	    width: 2000px;
	}
	.header .info .nickname .display_name {
	    display: inline-block;
	    font-weight: 400;
	    width: 156px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	    color: #fff;
	    font-size: 18px;
	    vertical-align: top;
	    line-height: 31px;
	    text-decoration: none;
	}
	.header .info .nickname .opt {
	    display: inline-block;
	    vertical-align: top;
	}
	.web_wechat_add {
	    background: url(../../../src/assets/images/panel/head/sprite.png) 0 -406px;
	    width: 30px;
	    height: 30px;
	    vertical-align: middle;
	    display: inline-block;
	}
</style>
<template>
	
	<div class="header">
        <div class="avatar">
            <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=1462042549&amp;username=@bc91171ebbd6e608c71c88d796f2af7f&amp;skey=@crypt_732c6026_785ebdd59fc918ba0e87b02136d17d02" mm-src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=1462042549&amp;username=@bc91171ebbd6e608c71c88d796f2af7f&amp;skey=@crypt_732c6026_785ebdd59fc918ba0e87b02136d17d02" ng-click="showProfile($event)">
        </div>
        <div class="info">
            <h3 class="nickname">
                <span ng-bind-html="account.NickName" class="display_name ng-binding">aNdy🚴🏻</span>
                <a class="opt" href="javascript:;" @click.stop="toggleSystemMenu($event)"><i class="web_wechat_add"></i></a>
            </h3>
        </div>
    </div>
    
</template>
<script>
    
    //局部业务组件
    


    export default {
        
        methods:{
        	//打开系统菜单
        	toggleSystemMenu (e) {
        		this.$parent.menu.show =!this.$parent.menu.show
        	}
        }
    }

</script>