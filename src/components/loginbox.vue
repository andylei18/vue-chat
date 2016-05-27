<template>

  <div class="nav-wrapper login-box white">
      <div class="row">

        <!-- login box inner first -->
        <div class="col s12 m12 l4 center hide-on-med-and-down">
            <h4>Don't have Account..?</h4>
            <div class="sign-up-btn">
              <a class="waves-effect grey darken-4 waves-light btn" href="https://rdxsports.com/customer/account/login/">Create Account</a>
            </div>
        </div>


        <!-- login box inner third -->
        <div class="col s12 m12 l4 center">
            <h4>Already Registered..?</h4>
            <div class="login-form">
                <form action="https://rdxsports.com/customer/account/loginPost/" method="post" id="login-form">

                  <input name="form_key" type="hidden" value="yXjFjdoKqSaJoK23">

                  <!-- Email for login -->
                  <div class="input-field form-mini-login col s12">
                    <i class="mdi-communication-email prefix"></i>
                    <input autocomplete="off" type="text" name="login[username]" value="" id="email" class="mini-form-text-input grey-text text-darken-4 validate input-text required-entry validate-email" title="Email Address">
                    <label for="email">Email Address</label>
                  </div>

                  <!-- Password for login -->
                  <div class="input-field form-mini-login col s12">
                    <i class="mdi-communication-vpn-key prefix"></i>
                    <input autocomplete="off" type="password" name="login[password]" class="password-field-pl input-text required-entry validate-password mini-form-text-input grey-text text-darken-4" id="pass" title="Password">
                    <label for="pass">Password</label>
                  </div>

                  <div class="buttons-set right">
                      <a href="https://rdxsports.com/customer/account/forgotpassword/?easy_ajax=1" class="f-left white-text">Forgot Your Password?</a>
                      <button type="submit" class="waves-effect waves-light btn red accent-4" title="Login" name="send" id="send2"><span><span>Login</span></span></button>
                  </div>

              </form>
            </div>
        </div>

        <div class="divider hide-on-large-only"></div>

        <!-- login box inner first -->
        <div class="col s12 m12 l4 center hide-on-large-only">
            <h4>Don't have Account..?</h4>
            <div class="sign-up-btn">
              <a class="waves-effect grey darken-4 waves-light btn" href="https://rdxsports.com/customer/account/login/">Create Account</a>
            </div>
        </div>

        <div class="divider hide-on-large-only"></div>

        <!-- login box inner second -->
        <div class="col s12 m12 l4 center">
            <h4>Sign-in Using</h4>
            <div class="sign-up-social-btn">
              <a href="https://graph.facebook.com/oauth/authorize?client_id=1632103740391074&amp;redirect_uri=http%3A%2F%2Frdxsports.com%2Fsocialconnect%2Ffacebook%2Fconnect%2F&amp;state=c31779b9884b4a573b581b8e7b268fb5&amp;scope=email%2Cuser_birthday"><img src="http://rdxsports.com/skin/frontend/rdxsports/default/images/social/facebook-connect.png" rel="facebook-connect" data-src="http://rdxsports.com/skin/frontend/rdxsports/default/images/social/facebook-connect.png" alt="Login with Facebook" title="Login with Facebook"></a>
              <br>
              <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;redirect_uri=http%3A%2F%2Frdxsports.com%2Fsocialconnect%2Fgoogle%2Fconnect%2F&amp;client_id=704554787973-ggp6o9j89nlaf3rj4didr1b8rnplp9kg.apps.googleusercontent.com&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;state=8481001d238749d3c062cd15aad14494&amp;access_type=offline&amp;approval_prompt=auto"><img src="http://rdxsports.com/skin/frontend/rdxsports/default/images/social/google-connect.png" rel="google-connect" data-src="http://rdxsports.com/skin/frontend/rdxsports/default/images/social/google-connect.png" alt="Login with Google" title="Login with Google"></a>
              <br>
              <a href="http://rdxsports.com/socialconnect/twitter/request/"><img src="http://rdxsports.com/skin/frontend/rdxsports/default/images/social/twitter-connect.png" rel="facebook-connect" data-src="http://rdxsports.com/skin/frontend/rdxsports/default/images/social/twitter-connect.png" alt="Login with Facebook" title="Login with Facebook"></a>
            </div>
        </div>
        
      </div>
  </div>

</template>
