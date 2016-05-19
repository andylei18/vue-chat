<style>
	.system_menu {
	    width: 180px;
	}
	.system_menu {
	    background: transparent!important;
	    z-index: 102!important;
	}
	.mmpop {
	    position: absolute;
	    background-color: #fff;
	    z-index: 99;
	    top: 0;
	    left: 0;
	    outline: 0;
	}
	.dropdown_menu {
	    background-color: #fff;
	    border-radius: 4px;
	    -moz-border-radius: 4px;
	    -webkit-border-radius: 4px;
	    overflow: hidden;
	    border: 1px solid #d6d6d6;
	    box-shadow: rgba(0,0,0,.1) 2px 3px 10px;
	    -moz-box-shadow: rgba(0,0,0,.1) 2px 3px 10px;
	    -webkit-box-shadow: rgba(0,0,0,.1) 2px 3px 10px;
	    min-width: 125px;
	}
	.dropdown_menu li a {
	    display: block;
	    text-decoration: none;
	    color: #000;
	    font-size: 14px;
	    padding: 8px;
	    border-bottom: 1px solid #f1f1f1;
	    text-align: left;
	}
	.dropdown_menu li.last_child a {
	    border-bottom: 0;
	}
	.dropdown_menu li a:hover {
	    background-color: #f5f5f5
	}
	.menuicon_chat {
	    background: url(../../../src/assets/images/panel/head/sprite.png) 0 -66px;
	    width: 34px;
	    height: 34px;
	    vertical-align: middle;
	    display: inline-block;
	}
	.dropdown_menu li i {
	    margin-right: 8px;
	}

</style>
<template>
	
	<div class="mmpop ng-scope system_menu" id="mmpop_system_menu" v-show="menu.show" style="left:85px;top:60px">
		<ul class="dropdown_menu">
		    <li>
		        <a tabindex="-1" href="javascript:;" ng-click="createChatroom()" title="发起聊天">
		            <i class="menuicon_chat"></i>发起聊天        
		        </a>
		    </li>
		    <li>
		        <!-- ngIf: !isNotifyOpen -->
		        <!-- ngIf: isNotifyOpen -->
		        <a tabindex="-1" href="javascript:;" ng-if="isNotifyOpen" ng-click="closeNotify()" title="关闭桌面通知" class="ng-scope">
		            <i class="menuicon_push_on"></i>关闭桌面通知        
		        </a><!-- end ngIf: isNotifyOpen -->
		    </li>
		    <li>
		        <!-- ngIf: !isSoundOpen -->
		        <!-- ngIf: isSoundOpen -->
		        <a tabindex="-1" href="javascript:;" ng-if="isSoundOpen" ng-click="closeSound()" title="关闭声音" class="ng-scope">
		            <i class="menuicon_volume_on"></i>关闭声音        
		        </a><!-- end ngIf: isSoundOpen -->
		    </li>
		    <li>
		        <a tabindex="-1" href="javascript:;" ng-click="feedback()" title="意见反馈">
		            <i class="menuicon_feedback"></i>意见反馈        
		        </a>
		    </li>
		    <li class="last_child">
		        <a tabindex="-1" href="javascript:;" ng-click="loginout()" title="退出">
		            <i class="menuicon_quit"></i>退出        
		        </a>
		    </li>
		</ul>

	</div>

</template>

<script>
    
    //局部业务组件
    


    export default {
        replace:true,
        props:['menu'],
        ready () {
	      document.addEventListener('click', this.menuClose)
	    },
	    destroy () {
	      document.removeEventListener('click', this.menuClose)
	    },
	    methods:{
	    	//关闭菜单
	    	menuClose () {
	    		this.menu.show = false
	    	}
	    }
    }

</script>