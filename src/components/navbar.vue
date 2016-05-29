<template>
  <header class="white bp_top_nav" @click.stop>
    <div class="nav-wrapper bp_top_header container">

      <!-- logo -->
      <div class="bp_top_logo">
        <a href="http://vuejs.org" class="box">
        	<span class="logo"></span>
        </a>
      </div>
      <!-- logo -->

      <!-- <a id="logo-container" href="#" class="brand-logo"><img src="../assets/images/logo.png" style="height:2rem"></a> -->

      <!-- <ul class="right hide-on-med-and-down">
        <li v-if="login.show">
          <button class="waves-effect waves-light btn" type="button">
            <i class="material-icons right">input</i>
          </button>
        </li>
        <li v-if="!login.show">
          <button class="waves-effect waves-light btn" type="button">
            <i class="material-icons right">perm_identity</i>
          </button>
        </li>
      </ul> -->

      <div class="bp_top_position">
        <div class="bp_nav">
          <ul class="bp_top_nav_list">
            <li v-if="!isLoginOnline">
                <a href="javascript:void(0);" class="bp_top_name bp_ficon" @click="action">
                  登录
                </a>
            </li>
            <li v-if="isLoginOnline">
                <a href="/1840902741/profile?topnav=1&amp;wvr=6" class="bp_top_name">
                  <i class="material-icons user_icons bp_ficon">perm_identity</i>
                  <em class="bp_txt1">aNdy_小磊</em>
                </a>
            </li>
          </ul>
        </div>

        <div class="bp_set bp_line1">
          <div class="bp_set_list">
            <a href="javascript:void(0);" @click="this.setList.show =! this.setList.show">
              <i class="material-icons set_icons bp_ficon">settings</i>
            </a>
            <div class="bp_topmenulist bp_topmenulist_set" v-show="setList.show">
              <ul>
                <li><a href="#">帐号设置</a></li>
                <li><a target="_top" href="#">帐号安全</a></li>
                <li class="bp_line bp_line1"></li>
                <li class="bp_func"><a target="_top" href="javascript:void(0);" @click="doSignOut">退出</a></li>
              </ul>
              <div class="bp_layer_arrow"><span class="bp_arrow_bor bp_arrow_bor_t"><i class="bp_line3"></i><em class="bp_bg2_br"></em></span></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </header>
</template>
<script>

  //vuex
  import { isLoginOnline } from '../vuex/getters'
  import { signOut } from '../vuex/actions'  //注册事件

  export default {
    replace:true,
    data (){
      return {
        setList: {
          show:false
        }
      }
    },
    props: ['login','action'],
    vuex: {
      getters: {
        isLoginOnline,
      },
      actions: {
        signOut
      }
    },
    ready (){
      document.addEventListener('click', this.componentsClose)
    },
    destroy (){
      document.removeEventListener('click', this.componentsClose)
    },
    methods: {
      //关闭窗口
      componentsClose (){
        this.setList.show = false
        this.login.show = false
      },
      //退出登录
      doSignOut (){
        this.signOut()
        setTimeout(() => {
          this.setList.show = false
          this.$router.go({name:'index'})
        }, 16)
      }
    }
  }
</script>
<style>
.bp_top_nav{
  position: fixed;
  _position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 48px;
  border-top: 2px solid #26a69a;
  box-shadow: 0 0 1px 0px rgba(0,0,0,0.3),0 0 6px 2px rgba(0,0,0,0.15);
  background: rgba(255,255,255,0.94);
}
.bp_top_header{
  height: 48px;
}
.bp_top_nav .bp_top_logo {
    left: auto;
    top: auto;
    margin: 0;
    background: none;
}
.bp_top_nav .bp_top_logo {
    float: left;
    position: relative;
    width: 140px;
    height: 48px;
}
.bp_top_nav .bp_top_logo .box {
    width: 190px;
    height: 48px;
    cursor: pointer;
}
.bp_top_nav .bp_top_logo .box {
    position: absolute;
    left: -50px;
    top: 0;
}
.bp_top_nav .bp_top_logo .box .logo {
    display: block;
    margin-left: 50px;
    margin-top: 3px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: url("../assets/images/logo.png") no-repeat 0 0 transparent;
    background-size: 100%;
}
.bp_top_position{
    float: right;
    margin-left: -11px;
}
.bp_nav{
    float: left;
    margin: 11px 20px 11px 0;
}
.bp_top_nav .bp_top_nav_list li {
    float: left;
    display: inline;
    position: relative;
    max-width: 139px\0;
    margin-left: 30px;
    font-size: 14px;
}
.bp_top_nav .bp_top_nav_list li a {
    display: block;
    _display: inline;
    height: 26px;
    line-height: 26px;
    white-space: nowrap;
}
.bp_nav .user_icons{
    font-size: 26px;
    width: 26px;
    vertical-align: top;
}
.bp_nav .bp_txt1{
    color: #333;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-family:'Microsoft YaHei';
}
.bp_nav .bp_top_nav_list li a .bp_txt1 {
    display: inline-block;
    overflow: hidden;
}
.bp_nav .bp_top_nav_list li .bp_top_name .bp_txt1 {
    text-overflow: ellipsis;
    max-width: 112px;
    _width: 112px;
    white-space: nowrap;
}

@media screen and (min-width: 1295px)
.bp_top_nav .bp_set {
    margin-right: 10px;
}
.bp_top_nav .bp_set {
    float: left;
    margin: 12px 0 12px 0;
    border-left-width: 1px;
    border-left-style: solid;
}
.bp_top_nav .bp_set_list {
    float: left;
    display: inline;
    position: relative;
    height: 24px;
    line-height: 24px;
    margin: 0 0 0 21px;
}
.bp_top_nav .bp_line1 {
    border-color: #d9d9d9;
}
.bp_top_nav .ficon_set{
    width: 20px;
    vertical-align: -3px;
    color: #696e78;
}
.bp_top_nav .bp_topmenulist {
    position: absolute;
    z-index: 9998;
    background: #fff;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 2px;
    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.2);
}
.bp_top_nav .bp_topmenulist_set {
    width: 94px;
    top: 34px;
    right: -17px;
}
.bp_top_nav .bp_topmenulist ul li {
    position: static;
    float: none;
    margin: 0;
    padding: 0;
    display: inline;
}
.bp_top_nav .bp_topmenulist ul li a {
    white-space: nowrap;
    min-width: 50px;
    padding: 9px 13px;
    line-height: 1em;
    color: #333;
    display: block;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bp_top_nav .bp_topmenulist ul li.cur a, .bp_top_nav .bp_topmenulist ul li a:hover {
    position: relative;
    background-color: #f2f2f5;
    text-decoration: none;
    color: #26a69a;
}
.bp_top_nav .bp_topmenulist .bp_layer_arrow .bp_arrow_bor {
    position: absolute;
    overflow: hidden;
    display: block;
}
.bp_top_nav .bp_topmenulist .bp_layer_arrow .bp_arrow_bor_t {
    top: -15px;
    right: 20px;
}
.bp_top_nav .bp_arrow_bor_t i, .bp_top_nav .bp_arrow_bor_t em {
    _border-style: dashed dashed solid dashed;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
}
.bp_top_nav .bp_bg2_br {
    border-color: #fff;
}
.bp_top_nav .bp_topmenulist ul li.bp_line {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding: 0;
    height: 2px;
    position: relative;
    top: -1px;
    display: block;
    margin: 0 -2px;
}
</style>
