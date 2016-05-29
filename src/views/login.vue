<template>
  <div class="section modal open" id="loginbox" v-if="login.show" @click.stop>
    <div class="container">
      <div class="inner">

          <div class="row" id="login-form">
            <p class="text-center">
              <i class="ion-ios-telephone-outline text-blue"></i>
              <span>Sign in to VueChat</span>
            </p>
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input type="text" class="validate" :placeholder="login.email.placeholder" v-model='login.email.value' @keyup.enter="action">
              <!-- <label for="icon_prefix">First Name</label> -->
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">lock_outline</i>
              <input type="tel" class="validate" :placeholder="login.password.placeholder" minlength="6" v-model='login.password.value' @keyup.enter="action">
              <!-- <label for="icon_telephone">Telephone</label> -->
            </div>

            <div class="input-field col s12">
              <a href="javascript:;" class="btn waves-effect waves-light" @click="action">
                 Sign in
                <i class="material-icons right">send</i>
              </a>
            </div>

          </div>
        </div>
    </div>

  </div>
</template>
<script>
  export default {
    replace:true,
    props: ['login', 'action']
  }
</script>
<style>
[v-cloak]{
  display: none;
}
.v-cloak--block,.v-cloak--inline,.v-cloak--inlineBlock{
  display: none;
}
#loginbox {
    position: fixed;
    z-index: 4;
    top: -64px;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 0;
    -webkit-transition: -webkit-transform,.3s,ease-in-out;
    transition: transform,.3s,ease-in-out;
    padding-top: 50px;
}
#loginbox.open {
    -webkit-transform: translateY(64px);
    transform: translateY(64px);
}
</style>
