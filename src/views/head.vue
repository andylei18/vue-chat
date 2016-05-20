<template>
	<header>
		<div class="container clearfix">
			<ul class="actions">
				<li class="action true">
					<img src="../assets/images/logo.png" class="inline home-logo hide-when-not-large">
					<span class="hide-when-large">andylei18</span>
				</li>
			</ul>
			<ul class="actions secondary">
				<li class="action"><i class="ion-log-in"></i>
				<span>登录 / 注册</span>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
	
</script>
<style>
	.actions-active:after, 
	.actions-active:before, 
	.categories:after, 
	.categories:before, 
	.clearfix:after, 
	.clearfix:before, 
	.entry-container:after, 
	.entry-container:before, 
	.users-list-item:after, 
	.users-list-item:before,
    header:after, 
    header:before, 
    nav:after, 
    nav:before {
	    content: " ";
	    display: table;
	}
	header {
	    position: fixed;
	    z-index: 5;
	    top: 0;
	    left: 0;
	    right: 0;
	    background: #fff;
	    border-bottom: 1px solid #f1f1f1;
	    color: #909090;
	    height: 4em;
	}
	.container {
	    width: 960px;
	    margin-left: auto;
	    margin-right: auto;
	    position: relative;
	}
	header .actions, nav .actions {
	    display: inline-block;
	    white-space: nowrap;
	}
	header .action {
	    display: inline-block;
	    cursor: pointer;
	}
	header .action {
	    padding: 1em;
	    vertical-align: top;
	    line-height: 2em;
	}
	header .action.true{
		 color: #007fff;
	}
	img.inline {
	    height: 1.3em;
	    vertical-align: top;
	}
	header .home-logo {
	    height: 1.8em;
	}
	img.inline+span, span+img.inline {
	    margin-left: .5em;
	}
	header .actions.secondary{
		float: right;
	}
</style>
