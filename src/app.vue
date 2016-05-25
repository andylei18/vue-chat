<template>

  <div id="app">

    <nav-bar></nav-bar>

    <router-view></router-view>

    <footer-bar></footer-bar>
  </div>

</template>

<script>
  import "materialize-css/bin/materialize.css"

  import store from './vuex/store'

  import NavBar from './components/navBar'
  import FooterBar from './components/footer'

  export default {
    store,
    components :{
      NavBar,
      FooterBar
    }
  }
</script>
