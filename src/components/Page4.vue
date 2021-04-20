<!--<template>
  <div id="app">
   <h1>++++</h1>
  </div>
</template>-->
<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-blue ftco-navbar-light" id="ftco-navbar" style="background: darkcyan;height: 60px;position: relative;">
<div class="container">
<a class="navbar-brand" href="/app2/2" style="
    position: absolute;
    font-size: 2rem;
">Home</a>
<div id="ftco-nav" style="
    position: relative;
    float: right;
    display: contents;
">
<ul class="navbar-nav ml-auto">
<li class="nav-item cta"><a href="contact.html" class="nav-link"><span @click="logout" v-if="auth" style="
    font-size: 1.3rem;
">Logout</span></a></li>
</ul>
</div>
</div>
</nav>
 
 
      
<div class="form-wrap" v-if="!auth">
      <div class="tabs">
         <h3 class="login-tab"><a @click="registerActive = true,registerActive2 = false, emptyFields = false" v-bind:class="{ active: registerActive }">Login</a></h3>
         <h3 class="signup-tab"><a @click="registerActive = false,registerActive2 = true, emptyFields = false" v-bind:class="{ active: registerActive2 }">Sign Up</a></h3>

      </div><!--.tabs-->

      <div class="tabs-content">
         <div id="login-tab-content" v-if="registerActive">
            <form class="login-form" action="" method="post">
               <input type="text" class="input" v-model="emailLogin" id="user_login" autocomplete="off" placeholder="Email or Username">
               <input type="password" class="input" v-model="passwordLogin" id="user_pass" autocomplete="off" placeholder="Password">
               <input type="checkbox" class="checkbox" id="remember_me">
               <label for="remember_me">Remember me</label>

               <input class="button" value="Login" @click="doLogin">
            </form><!--.login-form-->
            <div class="help-text">
               <p><a href="#">Forget your password?</a></p>
            </div><!--.help-text-->
         </div><!--.login-tab-content-->
         <div id="signup-tab-content" v-if="registerActive2">
            <form class="signup-form" action="" method="post">
               <input type="email" v-model="emailReg" class="input" id="user_email" autocomplete="off" placeholder="Email">
               <input type="password" v-model="passwordReg" class="input" id="user_pass" autocomplete="off" placeholder="Password">
               <input type="password" v-model="confirmReg" class="input" id="user_pass" autocomplete="off" placeholder="Confirm password">
               <input class="button" value="Sign Up" @click="doRegister">
            </form><!--.login-form-->
            <div class="help-text">
               <p>By signing up, you agree to our</p>
               <p><a>Terms of service</a></p>
            </div><!--.help-text-->
         </div><!--.signup-tab-content-->

         
      </div><!--.tabs-content-->
   </div><!--.form-wrap-->
<div v-else class="centeredContent">
        <h1>Home page dashboard</h1>
    </div>
   
</div>
</template>



<script>
  import firebase from 'firebase'
//import {db} from '../firestore' 




var firebaseAuth=firebase.auth(firebase.apps[3]); 

   export default {
      name: "Page4",
   
   data: function() {
    /*  var num,str=this.$route.path.substring(this.$route.path.lastIndexOf("/app2")+6);console.log(num);
      if(typeof (num=Number(str))=="number")
      firebaseAuth=firebase.auth(firebase.apps[num-1]);
      else
       firebaseAuth=firebase.auth(firebase.apps[0]);  */
     
return {
      registerActive: true,
      registerActive2: false,
      firstName:"",
      lastName:"",
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
      

      auth:firebaseAuth.currentUser,

   };
},
   
   methods: {
      
        
      logout(e){
         e.preventDefault();
         console.log('logout');
            //var str=this.$route.path.substring(this.$route.path.lastIndexOf("/app2"))
          firebaseAuth.signOut().then(() => {
        // this.auth=false;
               this.$router.go("/login/app2/4");
            });
         },

      doLogin(e){
         e.preventDefault();
         console.log('Logging in..');
if (this.emailLogin === "" || this.passwordLogin === "") {
            this.emptyFields = true;
         } else {
                        firebaseAuth.signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
               .then(user => {
                 console.log(user);
              //  console.log(firebaseAuth.currentUser);
                  this.$router.go("/dashboard/app2/4");
               
               })
               .catch(err => {
                   //myForm.reset();
                   //alert("The email address or password is incorrect. Please retry...");
                   alert(err.message)
                   this.errorMessage = err.message
               });
         }
      },
          doRegister(e){
         e.preventDefault();
        
 firebaseAuth.createUserWithEmailAndPassword(this.emailReg, this.passwordReg)
               .then(() => {
                alert("Your registration has been successfully completed");
                 firebaseAuth.signOut().then(() => {
                  this.$router.go("/login/app2/4");
            });
               }).catch(err => {
                  this.errorMessage = err.message;
                 alert("errorMessage3: "+ this.errorMessage);
               });      }




   }
}
</script>



<!--<style  lang="scss" scoped>-->

<style  lang="scss" scoped>
   


@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
* {
  margin: 0;
  padding: 0; }

a {
  color: #666;
  text-decoration: none; }
  a:hover {
    color: #4FDA8C; }

input {
  font: 16px/26px "Raleway", sans-serif; }

body {
  color: #666;
  background-color: #f1f2f2;
  font: 16px/26px "Raleway", sans-serif; }

.form-wrap {
  background-color: #fff;
  width: 320px;
  margin: 3em auto;
  box-shadow: 0px 1px 8px #BEBEBE;
  -webkit-box-shadow: 0px 1px 8px #BEBEBE;
  -moz-box-shadow: 0px 1px 8px #BEBEBE; }
  .form-wrap .tabs {
    overflow: hidden; }
    .form-wrap .tabs h3 {
      float: left;
      width: 50%; }
      .form-wrap .tabs h3 a {
        padding: 0.5em 0;
        text-align: center;
        font-weight: 400;
        background-color: #e6e7e8;
        display: block;
        color: #666; }
        .form-wrap .tabs h3 a.active {
          background-color: #fff; }
  .form-wrap .tabs-content {
    padding: 1.5em; }
   
    .form-wrap .tabs-content .active {
      display: block !important; }
  .form-wrap form .input {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    padding: .8em 0 10px .8em;
    border: 1px solid #CFCFCF;
    outline: 0;
    display: inline-block;
    margin: 0 0 .8em 0;
    padding-right: 2em;
    width: 100%; }
  .form-wrap form .button {
    width: 100%;
    padding: .8em 0 10px .8em;
    background-color: #28A55F;
    border: none;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase; }
    .form-wrap form .button:hover {
      background-color: #4FDA8C; }
  .form-wrap form .checkbox {
    visibility: hidden;
    padding: 20px;
    margin: .5em 0 1.5em; }
    .form-wrap form .checkbox:checked + label:after {
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1; }
  .form-wrap form label[for] {
    position: relative;
    padding-left: 20px;
    cursor: pointer; }
    .form-wrap form label[for]:before {
      content: '';
      position: absolute;
      border: 1px solid #CFCFCF;
      width: 17px;
      height: 17px;
      top: 0px;
      left: -14px; }
    .form-wrap form label[for]:after {
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      filter: alpha(opacity=0);
      opacity: 0;
      content: '';
      position: absolute;
      width: 9px;
      height: 5px;
      background-color: transparent;
      top: 4px;
      left: -10px;
      border: 3px solid #28A55F;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg); }
  .form-wrap .help-text {
    margin-top: .6em; }
    .form-wrap .help-text p {
      text-align: center;
      font-size: 14px; }
.login-tab a, .signup-tab a {
    cursor: pointer;
}
.centeredContent{
       position: absolute;
   position: absolute;
    width: 50%;
    height: 50%;
    z-index: 15;
    margin: 10% 0 0 25%;
    background: #4dc1ed4d;
    color: aliceblue;
    font-size: 2.3rem;
    word-break: break-word;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
}
.centeredContent h1 {
    color: black;
        font-weight: bold;
}
</style>