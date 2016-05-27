<template>
  <div class="modal confirm" :class="Confirm.show?'open':''">
    <div class="modal-content">
      <blockquote>
        <p class="message">{{ Confirm.message }}</p>
      </blockquote>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action waves-effect waves-green btn-flat">Yes</a>
      <a href="#!" class=" modal-action waves-effect waves-green btn-flat">No</a>
    </div>
  </div>
</template>

<script type="text/babel">
  //import api from '../api'
  export default{
    // vuex: {
    //   getters: {
    //     modal ({modals}) {
    //       return modals['CONFIRM']
    //     }
    //   },
    //   actions: {
    //     confirm(){
    //       this.modal.onConfirm && this.modal.onConfirm()
    //     },
    //     cancel(){
    //       this.modal.onCancel && this.modal.onCancel()
    //     }
    //   }
    // },
    props: ['Confirm'],
    // watch: {
    //   ['modal.isActive'] (val){
    //     if (val) {
    //       $(this.$el).openModal({
    //         dismissible: false
    //       });
    //     } else {
    //       $(this.$el).closeModal()
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .modal.open {
    z-index: 1003;
    display: block;
    opacity: 1;
    transform: scaleX(1);
    top: 10%;
  }
  .modal-content {
    padding-bottom: 10px;
  }

  .message {
    font-size: 1.2rem;
  }
</style>
