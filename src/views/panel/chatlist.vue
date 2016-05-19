<style>
	.tab {
        overflow: hidden;
        position: relative;
        padding-bottom: 4px
    }

    .tab .tab_item {
        float: left;
        width: 33.33333333%;
        position: relative
    }

    .tab .tab_item:after {
        content: '';
        position: absolute;
        top: 7px;
        right: 0;
        width: 0;
        height: 20px;
        border-right: 1px solid #24272C
    }

    .tab .tab_item.no_extra:after {
        border-right: 0
    }

    .tab .tab_item a {
        display: block;
        text-align: center
    }

    .tab.no_reader .tab_item {
        width: 50%
    }

    .tab:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #24272C;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0
    }
    .web_wechat_tab_chat {
        background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2048px;
        width: 35px;
        height: 35px;
        vertical-align: middle;
        display: inline-block;
    }
    .web_wechat_tab_chat_hl {
        background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2083px;
        width: 35px;
        height: 35px;
        vertical-align: middle;
        display: inline-block;
    }
    .web_wechat_tab_public {
        background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2232px;
        width: 35px;
        height: 35px;
        vertical-align: middle;
        display: inline-block;
    }
    .web_wechat_tab_public_hl {
	    background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2267px;
	    width: 35px;
	    height: 35px;
	    vertical-align: middle;
	    display: inline-block;
	}
    .web_wechat_tab_friends {
        background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2140px;
        width: 35px;
        height: 35px;
        vertical-align: middle;
        display: inline-block;
    }
    .web_wechat_tab_friends_hl {
	    background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2175px;
	    width: 35px;
	    height: 35px;
	    vertical-align: middle;
	    display: inline-block;
	}
	.nav_view {
	    position: absolute;
	    top: 154px;
	    right: 0;
	    bottom: 0;
	    left: 0;
	}
	.chat_list {
	    height: 100%;
	}
	.chat_list .ico_loading {
	    text-align: center;
	    margin: 30px auto;
	    font-size: 14px;
	    color: #6b6f7c;
	}
	.chat_list .ico_loading img {
	    vertical-align: -3px;
	    margin-right: 5px;
	}
	.chat_item {
	    overflow: hidden;
	    padding: 12px 18px 11px;
	    border-bottom: 1px solid #292C33;
	    cursor: pointer;
	    position: relative
	}

	.chat_item.top {
	    background-color: #2e3641
	}

	.chat_item.active {
	    background: #3A3F45
	}

	.chat_item.active .info .msg {
	    color: #FFF
	}

	.chat_item.active .ext {
	    color: #FFF
	}

	.chat_item .avatar {
	    float: left;
	    margin-right: 10px;
	    position: relative
	}

	.chat_item .avatar .img {
	    display: block;
	    width: 40px;
	    height: 40px;
	    border-radius: 2px;
	    -moz-border-radius: 2px;
	    -webkit-border-radius: 2px
	}

	.chat_item .avatar .icon {
	    position: absolute;
	    top: -6px;
	    right: -6px;
	    color: #FFF;
	    font-style: normal;
	    font-size: 12px;
	    text-align: center
	}

	.chat_item .info {
	    overflow: hidden
	}

	.chat_item .info .nickname {
	    font-weight: 400;
	    font-size: 13px;
	    color: #FFF;
	    line-height: 20px
	}

	.chat_item .info .nickname_text {
	    display: inline-block;
	    *display: inline;
	    *zoom:1;vertical-align: top;
	    width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal
	}

	.chat_item .info .nickname_count {
	    display: inline-block;
	    *display: inline;
	    *zoom:1;vertical-align: top
	}

	.chat_item .info .msg {
	    color: #989898;
	    font-size: 13px;
	    width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	    height: 1.5em
	}

	.chat_item .ext {
	    float: right;
	    color: #6b6f7c;
	    font-size: 13px;
	    text-align: right
	}

	.chat_item .ext .attr {
	    height: 19px;
	    line-height: 1.5
	}
	.read_list {
	    height: 100%;
	}
</style>
<style src="../../assets/styles/chatlist.css"></style>
<template>
	
	<!--BEGIN tab-->
    <div class="tab">
        <div class="tab_item" v-for="item in tab.list" track-by="$index">
            <a class="chat" @click="clickChat(item,tab.list)" :title="item.name">
            	<i class="{{'web_wechat_tab_'+ item.type}} {{item.ck?'web_wechat_tab_' + item.type +'_hl':''}}"></i>
            </a>
        </div>
        
    </div>
    <!--END tab-->

    <!--BEGIN 聊天列表-->
	<div class="nav_view" id="wx_chat">
        <div class="scroll-wrapper chat_list scrollbar-dynamic">
          	<div class="chat_list scrollbar-dynamic scroll-content scroll-scrolly_visible" >
          		<p class="ico_loading ng-hide"><img src="https://res.wx.qq.com/zh_CN/htmledition/v2/images/icon/ico_loading28a2f7.gif" alt="">正在获取最近的聊天...</p>
          		<!-- 遍历列表for开始 -->
  				<div class="chat_item slide-left">
  					<div class="ext">
		                <p class="attr ng-binding"></p>
		            </div>

		            <div class="avatar">
		                <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=640915228&amp;username=@c14b7e94f9f1e7b0721fe513aa6c1988&amp;skey=@crypt_732c6026_715c222f1dadd830d556c580efd4c242" mm-src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=640915228&amp;username=@c14b7e94f9f1e7b0721fe513aa6c1988&amp;skey=@crypt_732c6026_715c222f1dadd830d556c580efd4c242" alt="">
		            </div>

		            <div class="info">
		                <h3 class="nickname">
		                    <span class="nickname_text ng-binding" ng-bind-html="chatContact.getDisplayName()">饶培泽</span>
		                </h3>

		            </div>
  				</div>
      			<!-- 遍历列表for结束 -->
          	</div>
        </div>
    </div>
	<!--END 聊天列表-->

	<!--BEGIN 阅读-->
	<div class="nav_view" id="wx_read">
		<div class="scroll-wrapper read_list scrollbar-dynamic">
			<div class="read_list scrollbar-dynamic scroll-content scroll-scrolly_visible">
				<p class="ico_loading ng-hide" ng-show="subscribeMsgs.defaultValue"><img src="https://res.wx.qq.com/zh_CN/htmledition/v2/images/icon/ico_loading28a2f7.gif" alt="">加载中...</p>
				<p class="ico_loading ng-hide" ng-show="!subscribeMsgs.defaultValue &amp;&amp; subscribeMsgs.length == 0">暂无文章...</p>


				<div class="just_for_bg ng-scope first">
		            <div class="read_item_hd">
		                <p class="date ng-binding">11:58</p>
		                <div class="avatar">
		                    <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=0&amp;username=@114ecbfdbf93ba30160952eab3ad6877&amp;skey=@crypt_732c6026_43d5461d163adfb63b95f7c3ed213c3c" mm-src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=0&amp;username=@114ecbfdbf93ba30160952eab3ad6877&amp;skey=@crypt_732c6026_43d5461d163adfb63b95f7c3ed213c3c" alt="">
		                </div>
		                <p class="info">
		                    <span class="username ng-binding">奇舞周刊</span>
		                </p>
		            </div>
		        </div>


			</div>
		</div>
	</div>
	<!--END 阅读-->
</template>
<script>
    
    //局部业务组件
    


    export default {
    	replace:true,
        data () {
        	return {
        		tab:{
        			list:[
        				{name:'聊天',type:'chat',ck:false},
        				{name:'阅读',type:'public',ck:true},
        				{name:'通讯录',type:'friends',ck:false}
        			]
        		}
        	}
        },
        methods:{
        	//切换聊天，阅读，通讯录
        	clickChat (obj,parent) {
        		parent.forEach(item => {
	                item.ck = false
	            })
	            obj.ck = true
        	}
        }
    }

</script>
