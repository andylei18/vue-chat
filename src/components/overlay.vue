<template>
  <div class="lean-overlay" :class="overlay.show?'open':''"></div>
</template>
<script>
  export default {
    props:['overlay']
  }
</script>
<style>
.lean-overlay.open {
  display: block;
  opacity: 0.5;
}
</style>
