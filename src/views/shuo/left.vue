<template>
  <div class="shuoCard  bp_module">
    <a class="shuoCard_bg bp_bgUserColor bp_block" href="#"></a>
    <div class="shuoCard_content">
      <a class="shuoCard_avatarLink bp_inlineBlock" href="#" :title="users.info.nickname">
        <img class="shuoCard_avatarImage" :src="users.info.faceimg" alt="">
      </a>
      <div class="shuoCard_userFields">
        <div class="shuoCard_name bp_textTruncate">
          <a class="bp_textInheritColor" href="#">{{users.info.nickname}}</a>
        </div>
        <span class="shuoCard_screenname bp_inlineBlock bp_dir" dir="ltr">
          <a class="shuoCard_screennameLink bp_linkComplex bp_linkClean" href="#">@<span class="u-linkComplex-target">{{users.info.nickname}}</span></a>
        </span>
      </div>
      <div class="shuoCard_Stats">
        <ul class="shuoCard_statList bp_Arrange bp_Arrange_bottom bp_Arrange_equal">
          <li class="shuoCard_Stats_stat bp_Arrange_sizeFit">
            <a class="shuoCard_Stats_statLink bp_textUserColor bp_linkClean bp_block" title="1 推文" href="#" data-element-term="tweet_stats">
              <span class="shuoCard_Stats_statLabel bp_block">推文</span>
              <span class="shuoCard_Stats_statValue">1</span>
            </a>
          </li>
          <li class="shuoCard_Stats_stat bp_Arrange_sizeFit">
            <a class="shuoCard_Stats_statLink bp_textUserColor bp_linkClean bp_block" title="5 正在关注" href="#">
              <span class="shuoCard_Stats_statLabel bp_block">正在关注</span>
              <span class="shuoCard_Stats_statValue">5</span>
            </a>
          </li>
        </ul>
      </div>
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
