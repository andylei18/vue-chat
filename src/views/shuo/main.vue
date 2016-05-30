<template>
  <div class="timeline_box">
    <div class="home_tweet_box tweet_box component tweet_user">
      <img class="home_tweet_box_userimg bp_avatar bp_size32" :src="users.info.faceimg" alt="">
      <form class="t1_form tweet_form condensed">
        <div class="tweet-content">
          <div class="RichEditor is_fakeFocus">

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
