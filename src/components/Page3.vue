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
 
 <div class="form" v-if="!auth">
      
      <ul class="tab-group">
        <li class="tab" v-bind:class="{ active: registerActive }"><a @click="registerActive = true,registerActive2 = false, emptyFields = false">Log In</a></li>
        <li class="tab" v-bind:class="{ active: registerActive2 }"><a @click="registerActive = false,registerActive2 = true, emptyFields = false">Sign Up</a></li>
        
      </ul>
      
      <div class="tab-content">

         <div id="login" v-if="registerActive">   
          <h1>Welcome Back!</h1>
          
          <form>
          
            <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email" v-model="emailLogin" required="" autocomplete="off">
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password" v-model="passwordLogin" required="" autocomplete="off">
          </div>
          
          <p class="forgot"><a href="#">Forgot Password?</a></p>
          
          <button class="button button-block" @click="doLogin">Log In</button>
          
          </form>

        </div>

        <div id="signup" v-if="registerActive2">   
          <h1>Sign Up for Free</h1>
          
          <form>
          
          <div class="top-row">
            <div class="field-wrap">
              <label>
                First Name<span class="req">*</span>
              </label>
              <input type="text" v-model="firstName" required="" autocomplete="off">
            </div>
        
            <div class="field-wrap">
              <label>
                Last Name<span class="req">*</span>
              </label>
              <input type="text" v-model="lastName" required="" autocomplete="off">
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email" v-model="emailReg" required="" autocomplete="off">
          </div>
          
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input type="password" v-model="passwordReg" required="" autocomplete="off">
          </div>

          <div class="field-wrap">
            <label>
              Confirm password<span class="req">*</span>
            </label>
            <input type="password" v-model="confirmReg" required="" autocomplete="off">
          </div>
          
          <button class="button button-block" @click="doRegister">Get Started</button>
          
          </form>

        </div>
        
        
        
      </div><!-- tab-content -->
      
</div>
<div v-else class="centeredContent">
       <h1>Home page dashboard</h1> 
    </div>
</div>
</template>



<script>
  import firebase from 'firebase'
//import {db} from '../firestore' 



// var st=this.$route.path.substring(this.$route.path.lastIndexOf("/app2"));console.log(st);
// console.log(firebase.apps);
// console.log(firebase);
 //console.log("++++++++++")

var firebaseAuth=firebase.auth(firebase.apps[2]); 

   export default {
      name: "Page3",
   
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
               this.$router.go("/login/app2/3");
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
                  this.$router.go("/dashboard/app2/3");
               
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
                  this.$router.go("/login/app2/3");
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
   


*, *:before, *:after {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

body {
  background: #c1bdba;
  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration: none;
  color: #1ab188;
  transition: .5s ease;
}
a:hover {
  color: #179b77;
}

.form {
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}

.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.tab-group:after {
  content: "";
  display: table;
  clear: both;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
  transition: .5s ease;
}
.tab-group li a:hover {
  background: #179b77;
  color: #ffffff;
}
.tab-group .active a {
  background: #1ab188;
  color: #ffffff;
}


h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  margin: 0 0 40px;
}

label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
}
label .req {
  margin: 2px;
  color: #1ab188;
}

label {
  transform: translateY(-20px);
  left: 2px;
  font-size: 14px;
}
label.active .req {
  opacity: 0;
}

label.highlight {
  color: #ffffff;
}

input, textarea {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #a0b3b0;
  color: #ffffff;
  border-radius: 0;
  transition: border-color .25s ease, box-shadow .25s ease;
}
input:focus, textarea:focus {
  outline: 0;
  border-color: #1ab188;
}

textarea {
  border: 2px solid #a0b3b0;
  resize: vertical;
}

.field-wrap {
  position: relative;
  margin-bottom: 40px;
}

.top-row:after {
  content: "";
  display: table;
  clear: both;
}
.top-row > div {
  float: left;
  width: 48%;
  margin-right: 4%;
}
.top-row > div:last-child {
  margin: 0;
}

.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: #1ab188;
  color: #ffffff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
.button:hover, .button:focus {
  background: #179b77;
}

.button-block {
  display: block;
  width: 100%;
}

.forgot {
  margin-top: -20px;
  text-align: right;
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