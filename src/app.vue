<template>

  <div id="app">

    <nav-bar></nav-bar>

    <router-view></router-view>
  </div>

</template>

<script>
  import "materialize-css/bin/materialize.css"

  import store from './vuex/store'

  import NavBar from './components/navBar'


  export default {
    store,
    components :{
      NavBar
    }
  }
</script>
