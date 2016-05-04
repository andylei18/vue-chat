<style>

</style>

<template>
  <div class="login-section">
      <p>昵称:<input type="text" v-model="username"></p>
      <p><input type="button" value="确定" @click="tryCreatUser"></p>
  </div>
</template>

<script>

  import { addUser } from '../vuex/actions'
  //import { currentUsername} from '../vuex/getters'

  export default {
    vuex: {
      actions: {
        addUser
      }
    },
    data () {
      return {
        username:''
      }
    },
    methods: {
      tryCreatUser(){

        const authorName = this.username

        if (authorName.trim()) {

          this.addUser(authorName, this.thread)

          this.username = ''
        }

      }
    }
  }
</script>
