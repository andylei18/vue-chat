<template>
  <div class="timeline-tweet-box">
    <div class="home-tweet-box tweet-box component tweet-user">
      <img class="top-timeline-tweet-box-user-image avatar size32" :src="users.info.faceimg" alt="">
      <form class="t1-form tweet-form" method="post" target="tweet-post-iframe" data-condensed-text="有什么新鲜事?" action="#" enctype="multipart/form-data" data-poll-composer-rows="3" data-poll-duration="true">
        <img class="inline-reply-user-image avatar size32" :src="users.info.faceimg"alt="">

        <div class="tweet-content">

          <div class="RichEditor">
            <div class="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
            <div class="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
            <div class="RichEditor-scrollContainer">
              <div aria-labelledby="tweet-box-home-timeline-label" name="tweet" id="tweet-box-home-timeline" class="tweet-box rich-editor" contenteditable="true" spellcheck="true" role="textbox" aria-multiline="true" data-placeholder-default="有什么新鲜事?" data-placeholder-poll-composer-on="提问..." dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-4">
                <div>喂喂喂</div>
              </div>
              <div class="RichEditor-pictographs" aria-hidden="true"></div>
            </div>
            <div class="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
            <div class="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
          </div>

          <textarea aria-hidden="true" class="tweet-box-shadow hidden" name="status"></textarea>
        </div>

        <div class="TweetBoxToolbar">
          <div class="TweetBoxExtras tweet-box-extras">
            <!--BEGIN 拍照-->
            <span class="TweetBoxExtras-item TweetBox-mediaPicker">
              <div class="photo-selector">
                <button aria-hidden="true" class="btn icon-btn js-tooltip" type="button" tabindex="-1" data-original-title="添加照片或视频">
                  <span class="tweet-camera Icon Icon--camera"></span>
                  <span class="text add-photo-label u-hiddenVisually">添加照片或视频</span>
                </button>
                <div class="image-selector">
                  <input type="hidden" name="media_data_empty" class="file-data">
                  <div class="multi-photo-data-container hidden">
                  </div>
                  <label class="t1-label">
                    <span class="visuallyhidden">添加照片或视频</span>
                    <input type="file" name="media[]" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" class="file-input js-tooltip" data-original-title="添加照片或视频" data-delay="150">
                  </label>
                  <div class="swf-container"></div>
                </div>
              </div>
            </span>
            <!--END 拍照-->
            <!--END 拍照-->
            <span class="TweetBoxExtras-item">
              <div class="geo-picker dropdown">
                <button class="btn js-geo-search-trigger geo-picker-btn icon-btn js-tooltip" type="button" data-delay="150" data-original-title="">
                  <span class="Icon Icon--geo"></span>
                  <span class="text geo-status u-hiddenVisually">添加位置</span>
                </button>
                <span class="dropdown-container dropdown-menu"></span>
                <input type="hidden" name="place_id">
              </div>
            </span>
            <!--END 拍照-->

          </div>

          <div class="TweetBoxToolbar-tweetButton tweet-button">
            <span class="spinner"></span>
            <span class="tweet-counter">140</span>
            <button class="btn primary-btn tweet-action disabled tweet-btn js-tweet-btn" type="button">
              <span class="button-text tweeting-text">
                <span class="Icon Icon--tweet"></span>
                发推
              </span>
              <span class="button-text messaging-text">
                <span class="Icon Icon--dm Icon--small"></span>
                发送私信
              </span>
            </button>
          </div>


        </div>

      </form>
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
