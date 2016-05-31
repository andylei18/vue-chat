<template>
  <div class="stream-container conversations-enabled">
    <div class="stream-item js-new-items-bar-container"></div>

    <div class="stream">
      <ol class="stream-items js-navigable-stream">
        <li class="js-stream-item stream-item stream-item expanding-stream-item">
          <div class="tweet">
            <div class="context"></div>
            <div class="content">
              <div class="stream-item-header">
                <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/andylei18" data-user-id="737123116598448128">
                  <img class="avatar js-action-profile-avatar" :src="users.info.faceimg" alt="">
                  <strong class="fullname js-action-profile-name show-popup-with-id" data-aria-label-part="">丁磊</strong>
                  <span>‏</span>
                  <span class="username js-action-profile-name" data-aria-label-part=""><s>@</s><b>andylei18</b></span>
                </a>
                <small class="time">
                  <a href="/andylei18/status/737489295083065344" class="tweet-timestamp js-permalink js-nav js-tooltip" data-original-title="下午8:42 - 2016年5月30日"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1464666124" data-time-ms="1464666124000" data-long-form="true" aria-hidden="true">5小时</span><span class="u-hiddenVisually" data-aria-label-part="last">5小时前</span></a>
                </small>
              </div>

              <div class="js-tweet-text-container">
                <p class="TweetTextSize  js-tweet-text tweet-text" lang="da" data-aria-label-part="0">Vuejs is good</p>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>

  export default {
    vuex: {
      getters: {
        users: state => state.users
      }
    },

  }

</script>
