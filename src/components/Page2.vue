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
   <main class="flex flex--total-center"><form id="myForm" v-if="!auth" class="c-form pt4 pr4 pl4 pb2 bg-cover bg-center flex-shrink0 box-shadow"><nav class="c-form-nav h1 px2 py0 mt2 mb4 color-white caps-xs"><span class="c-form-nav__item fades-in-on-hover cursor-pointer border-bottom2 border-color-blue opaque pb1" @click="registerActive = true,registerActive2 = false, emptyFields = false" v-bind:class="{ error: registerActive }">Sign In</span> <span class="ml3 c-form-nav__item fades-in-on-hover cursor-pointer" @click="registerActive = false,registerActive2 = true, emptyFields = false" v-bind:class="{ error: registerActive2 }">Sign Up</span></nav> <section class="c-form__part">
  <fieldset v-if="registerActive" class="c-form__fieldset border-none p0"><div class="c-form-control my4"><label class="c-input-block block"><div class="c-input-block__label opacity50 caps-xs h3 mb2 color-white cursor-pointer font-weight700 text-indent">Username</div> <input v-model="emailLogin" type="text" class="c-input-block__field stretch px3 py2 color-white border-none h2 rounded-heavily outline-none bg-color-white-tc15 bg-color-white-on-hover-tc25 transition-bg-color500"></label></div> <div class="c-form-control my4"><label class="c-input-block block"><div class="c-input-block__label opacity50 caps-xs h3 mb2 color-white cursor-pointer font-weight700 text-indent">Password</div> <input v-model="passwordLogin" type="password" class="c-input-block__field stretch px3 py2 color-white border-none h2 rounded-heavily outline-none bg-color-white-tc15 bg-color-white-on-hover-tc25 transition-bg-color500"></label></div> <div class="c-form-control my4"><label class="c-checkbox-control color-white cursor-pointer py0 px2"><input type="checkbox" checked="checked" class="display-none"> <span class="c-checkbox-control__box p1 lh1 inline-block mr1 align-middle text-center h3 rounded color-dark-tc25 transition-color250 bg-color-blue">✔</span> <span class="c-checkbox-control__label h3 letter-spacing1">Keep me signed in</span></label></div> <button class="c-btn block stretch border-none rounded-heavily caps-xs color-white p2 h3 font-weight700 outline-none transition-all500 bg-color-blue bg-color-blue-hover" @click="doLogin">Sign In</button><footer class="c-form__part-footer center mt4 py4 px0 border-top color-white-tc15"><a href="#" class="form-link color-white text-decoration-none fades-in-on-hover">Forgot Password?</a></footer></fieldset>
  <fieldset v-else class="c-form__fieldset border-none p0"><div class="c-form-control my4"><label class="c-input-block block"><div class="c-input-block__label opacity50 caps-xs h3 mb2 color-white cursor-pointer font-weight700 text-indent">Username</div> <input v-model="emailReg" type="text" class="c-input-block__field stretch px3 py2 color-white border-none h2 rounded-heavily outline-none bg-color-white-tc15 bg-color-white-on-hover-tc25 transition-bg-color500"></label></div> <div class="c-form-control my4"><label class="c-input-block block"><div class="c-input-block__label opacity50 caps-xs h3 mb2 color-white cursor-pointer font-weight700 text-indent">Password</div> <input v-model="passwordReg" type="password" class="c-input-block__field stretch px3 py2 color-white border-none h2 rounded-heavily outline-none bg-color-white-tc15 bg-color-white-on-hover-tc25 transition-bg-color500"></label></div> <div class="c-form-control my4"><label class="c-input-block block"><div class="c-input-block__label opacity50 caps-xs h3 mb2 color-white cursor-pointer font-weight700 text-indent">Confirm Password</div> <input v-model="confirmReg" type="password" class="c-input-block__field stretch px3 py2 color-white border-none h2 rounded-heavily outline-none bg-color-white-tc15 bg-color-white-on-hover-tc25 transition-bg-color500"></label></div> <button class="c-btn block stretch border-none rounded-heavily caps-xs color-white p2 h3 font-weight700 outline-none transition-all500 bg-color-blue bg-color-blue-hover" @click="doRegister">Sign Up</button></fieldset>


   </section>
     
     </form>
     <div v-else class="centeredContent">
        <h1>Home page dashboard</h1>
    </div>
 </main>
     

</div>
</template>



<script>
  import firebase from 'firebase'
//import {db} from '../firestore' 



// var st=this.$route.path.substring(this.$route.path.lastIndexOf("/app2"));console.log(st);
// console.log(firebase.apps);
// console.log(firebase);
 //console.log("++++++++++")

var firebaseAuth=firebase.auth(firebase.apps[1]); 

   export default {
      name: "Page2",
   
   data: function() {
    /*  var num,str=this.$route.path.substring(this.$route.path.lastIndexOf("/app2")+6);console.log(num);
      if(typeof (num=Number(str))=="number")
      firebaseAuth=firebase.auth(firebase.apps[num-1]);
      else
       firebaseAuth=firebase.auth(firebase.apps[0]);  */
     
return {
      registerActive: true,
      registerActive2: false,
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
               this.$router.go("/login/app2/2");
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
              //  console.log(firebaseAuth.currentUser);
                  this.$router.go("/dashboard/app2/2");
               
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
                  this.$router.go("/login/app2/2");
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



<!--<style  lang="scss" scoped>-->


<style  lang="scss" scoped>/* cyrillic-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofIOOaBXso.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofIMeaBXso.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofIOuaBXso.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofIO-aBXso.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofINeaB.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAjsOUbOvISTs.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAjsOUZevISTs.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAjsOUbuvISTs.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAjsOUb-vISTs.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAjsOUYevI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>

  <style  lang="scss" scoped>/*! Basscss | http://basscss.com | MIT License */.h1{font-size:1.5rem}.h2{font-size:1.2rem}.h3{font-size:1rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block{display:block}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0{margin:0}.mt0{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0,.mx0{margin-left:0}.mx0{margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1,.mx1{margin-left:.5rem}.mx1{margin-right:.5rem}.my1{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2,.mx2{margin-left:1rem}.mx2{margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.mx3{margin-left:2rem}.mx3{margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:1rem}.mr4{margin-right:4rem}.mb4{margin-bottom:1rem}.ml4,.mx4{margin-left:4rem}.mx4{margin-right:4rem}.my4{margin-top:1rem;margin-bottom:1rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto,.mx-auto{margin-right:auto}.mx-auto{margin-left:auto}.p0{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0,.px0{padding-left:0}.px0{padding-right:0}.py0{padding-top:0;padding-bottom:0}.p1{padding:.1rem}.pt1{padding-top:.5rem}.pr1{padding-right:.5rem}.pl1{padding-left:.5rem}.py1{padding-top:.5rem;padding-bottom:.5rem}.px1{padding-left:.5rem;padding-right:.5rem}.p2{padding:0.2rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:0.3rem;padding-bottom:0.3rem}.px2{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:1rem}.py4{padding-top:1rem;padding-bottom:1rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left}.col,.col-right{box-sizing:border-box}.col-right{float:right}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media (min-width:40em){.sm-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}@media (min-width:52em){.md-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}@media (min-width:64em){.lg-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start}.items-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end}.items-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.items-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;-ms-grid-row-align:baseline;align-items:baseline}.items-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}.self-start{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.self-end{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.self-center{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.self-baseline{-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline}.self-stretch{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch}.justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.content-start{-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.content-end{-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.content-center{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.content-between{-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between}.content-around{-webkit-align-content:space-around;-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch{-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-auto{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.order-0{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-webkit-order:3;-ms-flex-order:3;order:3}.order-last{-webkit-box-ordinal-group:100000;-webkit-order:99999;-ms-flex-order:99999;order:99999}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}@media (min-width:64em){.lg-hide{display:none!important}}.display-none{display:none!important}</style>
  
<style  lang="scss" scoped>
*,
*:before,
*:after {
  position: relative;
  box-sizing: border-box;
}

*::before,
*::after {
  content: "";
}

html,
main,
body {
  height: 100%;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.618rem;
}

.flex {
  display: flex;
}
.flex--total-center {
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
130deg
, rgba(36, 49, 91, 0.9), rgba(40, 22, 60, 0.9)), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/16584/nachita_login_form_bg.jpg);
   background-size:cover;
}

.stretch {
  width: 100%;
}

.flex-shrink0 {
  flex-shrink: 0;
}

.flex-full {
  flex-basis: 100%;
}

.text-uppercase {
  text-transform: uppercase;
}

.font-weight700 {
  font-weight: 700;
}

.lh1 {
  line-height: 1;
}

.text-indent {
  text-indent: 1.412rem;
}
.text-indent-n3 {
  text-indent: -2.5rem;
}

.letter-spacing1 {
  letter-spacing: 0.1rem;
}

.caps-xs {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.bg-color-white-tc15 {
  background-color: rgba(255, 255, 255, 0.15);
}
.bg-color-white-tc25 {
  background-color: rgba(255, 255, 255, 0.25);
}
.bg-color-white-on-hover-tc25:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.color-white {
  color: white;
}

.color-white-tc15 {
  color: rgba(255, 255, 255, 0.15);
}
.color-white-tc25 {
  color: rgba(255, 255, 255, 0.25);
}
.color-dark-tc25 {
  color: rgba(0, 0, 0, 0.25);
}

.cursor-pointer {
  cursor: pointer;
}

.rounded-heavily {
  border-radius: 7.2rem;
}

.fades-in-on-hover {
  opacity: 0.5;
  transition: opacity 500ms;
}
.fades-in-on-hover:hover {
  opacity: 1;
}



.outline-none,
.outline-none:focus {
  outline: none;
}

.box-shadow {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.22);
}



.ease-in-out {
  transition-timing-function: ease-in-out;
}

.transition-all250 {
  transition: all 250ms;
}
.transition-all500 {
  transition: all 500ms;
}

.transition-color250 {
  transition: color 250ms;
}
.transition-color500 {
  transition: color 500ms;
}

.transition-bg-color250 {
  transition: background-color 250ms;
}
.transition-bg-color500 {
  transition: background-color 500ms;
}

.transition-fade-enter-active,
.transition-fade-leave-active {
  transition: opacity 480ms ease;
}

.transition-fade-enter,
.transition-fade-leave-active {
  opacity: 0;
}

.opacity50 {
  opacity: 1;
}


.bg-color-blue {
  background-color: #1162ee;
      font-size: 1.6rem !important;
}
.bg-color-blue-hover:hover {
  background-color: #0f58d7;
}

.c-form::after {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  margin: 0 auto;
  width: 80%;
  height: 20px;
  box-shadow: 0 15px 35px 15px rgba(0, 0, 0, 0.75);
  z-index: -1;
  border-radius: 50%;
}

body {
  background-image: linear-gradient(to bottom, #d9d9d9, #a6a6a6);
}

.c-form {
  /*min-height: 62.5rem;*/
  font-family: "Nunito", Arial, sans-serif;
 
}
.c-checkbox-control input[type=checkbox]:checked ~ .c-checkbox-control__box {
  color: white;
}
fieldset.c-form__fieldset {
    position: relative;
}
.error {
   border-color: #1162ee !important;
   border-bottom: 2px solid;
   opacity: 1;
}

main.flex.flex--total-center {
    min-height: 520px;
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

