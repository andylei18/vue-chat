<style>
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
</style>
<style src="../../assets/styles/chatlist.css"></style>
<template>
	
	<div class="nav_view ng-scope">
          <div class="scroll-wrapper chat_list scrollbar-dynamic">
          	<div class="chat_list scrollbar-dynamic scroll-content scroll-scrolly_visible">
          		<p class="ico_loading ng-hide" v-show="chatList.length > 0"><img src="https://res.wx.qq.com/zh_CN/htmledition/v2/images/icon/ico_loading28a2f7.gif" alt="">正在获取最近的聊天...</p>
          		<div class="ng-scope">


          			<!-- 遍历列表for开始 -->
          			<div class="ng-scope">
          				<div class="chat_item slide-left ng-scope">
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
          			</div>
          			<!-- 遍历列表for结束 -->

          		</div>
          	</div>
          </div>
    </div>

</template>
