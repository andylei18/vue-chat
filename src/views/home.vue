<style>
	.main {
	    height: 80%;
	    min-height: 600px;
	    padding-top: 100px;
	    display: none;
	    -webkit-transition: padding .3s linear;
	    -ms-backface-visibility: hidden;
	    -moz-backface-visibility: hidden;
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	}
	@media (max-width: 1000px),(max-height:800px) {
	    .main {
	        padding-top:0;
	        height: 100%
	    }

	    .main .copyright {
	        display: none
	    }
	}
	.web-app .main {
	    display: block;
	}
	.main_inner {
	    max-width: 1000px;
	    min-width: 800px;
	    height: 100%;
	    margin: 0 auto;
	    border-radius: 3px;
	    -moz-border-radius: 3px;
	    -webkit-border-radius: 3px;
	    overflow: hidden;
	}
</style>
<template>

	<div class="main">

		<!-- <div id="demo">
		  <pre>{{ anObject | json }}</pre>
		  <ul>
		    <li v-for="item in anArray">{{ item.text }}</li>
		  </ul>
		</div> -->
		<div class="main_inner">
			
			<!--BEGIN panel-->
			<panel-module></panel-module>
			<!--END panel-->

			<content-module></content-module>
		</div>

	</div>

</template>

<script>
	
	const AppId = 'vuechat'//野狗数据库ID

	//局部业务组件
	import PanelModule from './panel/index.vue'	//panel组件
	import ContentModule from './content/index.vue'	//content组件

	export default {
		components: {
	         PanelModule,
	         ContentModule
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
		    //简单语法
		    //默认作为数组绑定
		    //anArray: new Wilddog('https://' + AppId + '.wilddogio.com/' ),
		    // 也可以绑定一个查询
		    // anArray: new Wilddog('url/to/my/collection').limitToLast(25)
		    // 完整语法
		    /*anObject: {
		      source: new Wilddog('https://' + AppId + '.wilddogio.com/' ),
		      // 可选，作为对象绑定
		      asObject: true,
		      // 可选，提供一个回调
		      cancelCallback: function () {

		      		console.log()

		      }
		    }*/
		}
	}

</script>