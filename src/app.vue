<template>

  <div id="app">
    <div class="navbar-fixed">


    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import "materialize-css/bin/materialize.css"

  import store from './vuex/store'
  export default {
    store
  }
</script>
