<template>
  <div class="timeline_box">
    <div class="home_tweet_box tweet_box component tweet_user">
      <img class="home_tweet_box_userimg bp_avatar bp_size32" :src="users.info.faceimg" alt="">
      <form class="t1_form tweet_form condensed">
        <div class="tweet_content">
          <div class="RichEditor is_fakeFocus">
            <div class="RichEditor_mozillaCursorWorkaround">&nbsp;</div>
            <div class="RichEditor_scrollContainer">
                <textarea class="tweet_box rich_editor is_showPlaceholder"></textarea>
            </div>
          </div>
        </div>

        <div class="tweetBoxToolbar">
          <div class="tweetBoxExtras tweet-box-extras">

          </div>

          <div class="TweetBoxToolbar_tweetButton tweet_button">
            <span class="spinner"></span>
            <span class="tweet_counter">135</span>
            <button class="btn waves-effect waves-light green accent-4" type="submit" name="action">
              <i class="material-icons left">send</i>
              说说
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
