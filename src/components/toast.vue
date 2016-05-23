<template>
  <div id="wx_toast" transition="toast" v-show="toast.show">{{toast.message}}</div>
</template>

<script>
export default {
  props: ['toast'],
  watch:{
      'toast.show':function(val, oldVal){
          const self = this
          if(val){
              setTimeout(function(){
                  self.toast.show = false
              },3000)
          }

      }
  }
}
</script>

<style>
#wx_toast{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: #2E2E2E;
    padding: 15px;
    border-radius: 2px;
    color: #fff;
    text-align: center;
    z-index: 999;
    transform: translate(0,0);
}
.toast-enter {
    animation: toast-fade-in 0.2s ease-in;
    -webkit-animation: toast-fade-in 0.2s ease-in;
}

.toast-leave {
    animation: toast-fade-out 0.2s ease-out;
    -webkit-animation: toast-fade-out 0.2s ease-out;
}

@keyframes toast-fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.8;
    }
}
@-webkit-keyframes toast-fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.8;
    }
}

@keyframes toast-fade-out {
    0% {
        opacity: 0.8;
    }
    100% {
        opacity: 0;
    }
}
@-webkit-keyframes toast-fade-out {
    0% {
        opacity: 0.8;
    }
    100% {
        opacity: 0;
    }
}

</style>
