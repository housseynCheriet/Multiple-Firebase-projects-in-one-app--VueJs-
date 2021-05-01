<template>
<div>

<GetInTouch v-if="calledFromIframe" />


   <div class="login-page">
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>
      
   <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-blue ftco-navbar-light" id="ftco-navbar" style="
    width: 100%;
    position: absolute;
    top: 0px;
    background: darkcyan;
">
<div class="container">
<a class="navbar-brand" href="/app2/1">Home</a>
<div id="ftco-nav">
<ul class="navbar-nav ml-auto">
<li class="nav-item cta"><a href="contact.html" class="nav-link"><span @click="logout" v-if="auth">Logout</span></a></li>
</ul>
</div>
</div>
</nav>
      <div class="container" v-if="!auth">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Sign In</h1>
                  <form class="form-group" id="myFormLog">
                     <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                     <button class="btn btn-primary" @click="doLogin">Login</button>
                     <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                     </p>
                     <p><a href="#">Forgot your password?</a></p>
                  </form>
               </div>

               <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                  <h1>Sign Up</h1>
                  <form class="form-group" id="myFormReg">
                     <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                     <button class="btn btn-primary" @click="doRegister">Create account</button>
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>

      </div>
      <div v-else class="centeredContent">
        <h1>Home page dashboard</h1>
    </div>
   <!--</div>-->
   </div>

</div>
</template>



<script>
  import firebase from 'firebase'
import {db} from '../firestore'

 import GetInTouch from './GetInTouch'
console.log(db);
var firebaseAuth=firebase.auth(firebase.apps[0]);
//var myFormLog = document.getElementById("myFormLog"),
//myFormReg = document.getElementById("myFormReg");
   export default {
      name: "Page1",
      
   components: {
      GetInTouch
    } ,
   data: function() {
/*var num,str=this.$route.path.substring(this.$route.path.lastIndexOf("/app2")+6);console.log(num);
      if(typeof (num=Number(str))=="number")
      firebaseAuth=firebase.auth(firebase.apps[num-1]);
      else
       firebaseAuth=firebase.auth(firebase.apps[0]);  */
     var url = (window.location != window.parent.location)
            ? 'no'
            : 'yes';

     console.log(url);
     
return {
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
      calledFromIframe: window.location == window.parent.location,

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
               this.$router.go("/login/app2/1");
            });
         },

      doLogin(e){
         e.preventDefault();
         console.log('Logging in...');
if (this.emailLogin === "" || this.passwordLogin === "") {
            this.emptyFields = true;
         } else {
                        firebaseAuth.signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
               .then(user => {
                  console.log(user);
                  this.$router.go("/dashboard/app2/1");
               
               })
               .catch(err => {
                   //myFormLog.reset();
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
                  this.$router.go("/login/app2/1");
            });
               }).catch(err => {
                  this.errorMessage = err.message;
                 alert("errorMessage3: "+ this.errorMessage);
               });      }

     /* doLogin() {
         if (this.emailLogin === "" || this.passwordLogin === "") {
            this.emptyFields = true;
         } else {
            alert("You are now logged in");
         }
      },
      
      doRegister() {
         if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
            this.emptyFields = true;
         } else {
            alert("You are now registered");
         }
      }*/
   }
};


</script>



<style  lang="scss" scoped>
   p {
   line-height: 1rem;
}

.card {
   padding: 20px;
   background: #008b8b87 !important;
}

.form-group {
   input {
      margin-bottom: 20px;
   }
}

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;
}
   .wallpaper-login {
      background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   }
   
   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   
   .wallpaper-register {
      background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   }

   h1 {
      margin-bottom: 1.5rem;
   }


.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}
a {
    color: #29fb03;
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