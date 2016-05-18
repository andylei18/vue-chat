<template>

	<div class="ng-scope" style="height:100%">
		<div id="chatArea" class="box chat ng-scope">
			
			<!--BEGIN HD-->
			<div class="box_hd">
		        <div id="chatRoomMembersWrap"></div>
		        <div class="title_wrap">
		            <div class="title poi" ng-click="currentContact.MMCanCreateChatroom &amp;&amp; showChatRoomMembers($event)">
		                <a class="title_name ng-binding" ng-bind-html="currentContact.getDisplayName()"></a>
		                <i class="web_wechat_down_icon ng-hide" ng-class="{'web_wechat_up_icon': isShowChatRoomMembers, 'web_wechat_down_icon': !isShowChatRoomMembers}" ng-show="currentContact.getDisplayName() &amp;&amp; currentContact.MMCanCreateChatroom"></i>
		            </div>
		        </div>
		    </div>
			<!--END HD-->

		</div>
	</div>

	<!--BEGIN BD-->
	<chatbd-module></chatbd-module>
	<!--END   BD-->

</template>

<script>
	
	//局部业务组件
	import ChatbdModule from './chatbd.vue'	//chatbd组件

	export default {
		components: {
	         ChatbdModule
	    }
	}

</script>