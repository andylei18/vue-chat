<template>

  <div class="row" id="register-form">
    <p class="text-center">
      <i class="ion-ios-telephone-outline text-blue"></i>
      <span>Sign up to VueChat</span>
    </p>
    <div class="input-field col s12">
      <i class="material-icons prefix">account_circle</i>
      <input type="text" class="validate" placeholder="手机号（11位）" maxlength="11">
      <!-- <label for="icon_prefix">First Name</label> -->
    </div>
    <div class="input-field col s12">
      <i class="material-icons prefix">phone</i>
      <input type="tel" class="validate" placeholder="密码" minlength="6">
      <!-- <label for="icon_telephone">Telephone</label> -->
    </div>
    <div class="input-field col s12">
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Sign up
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>

</template>
