<style>
    .panel {
        position: relative;
        width: 280px;
        height: 100%;
        float: left;
        background: #2e3238;
    }
    .search_bar {
        position: relative;
        width: 244px;
        margin: 0 auto 6px;
    }
    .web_wechat_search {
        background: url(../../../src/assets/images/panel/head/sprite.png) 0 -1946px;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        display: inline-block;
    }
    .search_bar .web_wechat_search {
        position: absolute;
        z-index: 101;
        top: 1px;
    }
    .search_bar .frm_search {
        width: 214px;
        height: 32px;
        line-height: 32px;
        border: 0;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        background-color: #26292E;
        color: #fff;
        padding-left: 30px;
        font-size: 12px;
    }
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
    .web_wechat_tab_friends {
        background: url(../../../src/assets/images/panel/head/sprite.png) 0 -2140px;
        width: 35px;
        height: 35px;
        vertical-align: middle;
        display: inline-block;
    }
</style>
<template>

	<div class="panel">
        
        <!--BEGIN header-->
        <head-module></head-module>
        <!--BEGIN header-->

        <!--BEGIN search-->
        <div class="search_bar" id="search_bar">
            <i class="web_wechat_search"></i>
            <input mm-action-track="" track-type="['focus']" track-opt="{'target':'顶部搜索'}" class="frm_search ng-isolate-scope ng-pristine ng-valid" type="text" ng-model="keyword" ng-input="search($event)" ng-keydown="searchKeydown($event)" ng-blur="focus = false;" placeholder="搜索">
        </div>
        <!--END  search-->

        <!--BEGIN tab-->
        <div class="tab" ng-class="{no_reader: !isShowReader}">
            <div class="tab_item">
                <a class="chat" ui-sref="chat" ng-dblclick="dblclickChat()" title="聊天" href="#"><i class="web_wechat_tab_chat web_wechat_tab_chat_hl" ng-class="{web_wechat_tab_chat_hl: $state.includes('chat')}"></i></a>
            </div>
            <!-- ngIf: isShowReader --><div class="tab_item ng-scope" ng-if="isShowReader">
                <a class="chat" ui-sref="read" title="阅读" href="#"><i class="web_wechat_tab_public" ng-class="{web_wechat_tab_public_hl: $state.includes('read')}"></i></a>
            </div><!-- end ngIf: isShowReader -->
            <div class="tab_item no_extra">
                <a class="chat" ui-sref="contact" title="通讯录" href="#"><i class="web_wechat_tab_friends" ng-class="{web_wechat_tab_friends_hl: $state.includes('contact')}"></i></a>
            </div>
        </div>
        <!--END tab-->

        <!--BEGIN chat list-->
        <list-module></list-module>
        <!--END  chat list-->



        <!--BEGIN menu-->
        <menu-module :menu="menu"></menu-module>
        <!--END menu-->

    </div>
	

</template>

<script>
    
    //局部业务组件
    import HeadModule from './head.vue' //head组件
    import MenuModule from './systemmenu.vue' //systemmenu组件
    import ListModule from './chatlist.vue' //chatlist组件


    export default {
        components: {
             HeadModule,
             MenuModule,
             ListModule
        },
        data () {
            return {
                menu:{
                    show:false
                }
            }
        },
    }

</script>