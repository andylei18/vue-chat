<template>
	<div class="modal open">
		<div class="container">
			<div class="modal-close text-a"><i class="ion-close-round"></i></div>
			<div class="inner">
				<form id="login-form">
					<p class="input-relative">
						<input type="text" name="uname" placeholder="用户名（6位）" maxlength="6" required="required">
						<span class="input-alert tag true fade-transition" style="display: none;"></span>
					</p>
					<p class="input-relative">
						<input type="text" name="upsw" placeholder="密  码（11位）" maxlength="11" required="required">
						<span class="input-alert tag true fade-transition" style="display: none;"></span>
					</p>
					<p class="text-right fade-right-transition" style="display: none;"><span class="button small gray">找回密码</span></p>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
      data () {
        return {
          
        }
      },
      components:{
      	
      }
  }
</script>
<style>
	.modal {
	    position: fixed;
	    z-index: 4;
	    top: -30em;
	    left: 0;
	    right: 0;
	    background: #fff;
	    border-bottom: 1px solid #ddd;
	    padding-top: 4.5em;
	    padding-bottom: 1em;
	    -webkit-transition: -webkit-transform,.3s,ease-in-out;
	    transition: transform,.3s,ease-in-out;
	}
	.modal.open {
	    -webkit-transform: translateY(30em);
	    transform: translateY(30em);
	}
	.container {
	    width: 960px;
	    margin-left: auto;
	    margin-right: auto;
	    position: relative;
	}
	.modal .container {
	    padding-left: 1em;
	    padding-right: 1em;
	}
	.text-a {
	    cursor: pointer;
	    -webkit-transition: color,.3s;
	    transition: color,.3s;
	}
	.text-a:active, .text-a:hover {
	    color: #007fff;
	}
	.modal-close {
	    position: absolute;
	    top: -1em;
	    padding: 1em;
	    right: 0;
	    cursor: pointer;
	}
	.inner {
	    width: 25vw;
	    min-width: 480px;
	    margin-left: auto;
	    margin-right: auto;
	}
	.input-relative {
	    position: relative;
	}
    input[type=text]{
	    padding: .5em 0;
	    width: 100%;
	    display: block;
	    border: none;
	    box-shadow: none;
	}
	input[type=text], input[type=url], textarea {
	    border-bottom: 1px solid #ddd;
	    -webkit-transition: border,.3s;
	    transition: border,.3s;
	}
	.tag {
	    line-height: 1.5em;
	    display: inline-block;
	    font-size: .8em;
	    padding: 0 .5em;
	    border: 1px solid #f0f0f0;
	    color: #909090;
	    -webkit-transition: color,.3s;
	    transition: color,.3s;
	}
	.input-alert {
	    position: absolute;
	    top: 0;
	    right: 0;
	    padding: .5em 1em;
	    -webkit-transition: opacity,.3s;
	    transition: opacity,.3s;
	}
	.tag.true, .tag:hover {
	    color: #007fff;
	    border-color: rgba(0,127,255,.15);
	    background-color: rgba(0,127,255,.05);
	}
</style>
