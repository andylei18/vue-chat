<template>
	
	<div class="header">
        <div class="avatar">
            <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=1462042549&amp;username=@bc91171ebbd6e608c71c88d796f2af7f&amp;skey=@crypt_732c6026_785ebdd59fc918ba0e87b02136d17d02" mm-src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=1462042549&amp;username=@bc91171ebbd6e608c71c88d796f2af7f&amp;skey=@crypt_732c6026_785ebdd59fc918ba0e87b02136d17d02" ng-click="showProfile($event)">
        </div>
        <div class="info">
            <h3 class="nickname">
                <span ng-bind-html="account.NickName" class="display_name ng-binding">aNdy🚴🏻</span>
                <a class="opt" href="javascript:;" ng-show="account.HeadImgUrl" ng-click="toggleSystemMenu()"><i class="web_wechat_add"></i></a>
            </h3>
            <!--<p class="signature" ng-bind-html="account.Signature" title="{{account.Signature|emojiHideFilter}}"></p>-->
        </div>
    </div>

</template>