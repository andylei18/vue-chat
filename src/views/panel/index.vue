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