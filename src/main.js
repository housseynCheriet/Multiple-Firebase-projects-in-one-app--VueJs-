
import Vue from 'vue'
Vue.prototype.$fire = '';
import App from './App.vue'
import Appp from './Appp.vue'
//import dashboard from './components/Dashboard.vue'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);



console.log(global);
/*global.jQuery = require('jquery');
var jQuery = global.jQuery;
window.jQuery = jQuery;*/

import firebase from 'firebase'


import  router  from './router'

import store from './store/store'   // <-- add this line ---------
import vuetify from './plugins/vuetify';

Vue.use(firebase);
Vue.config.productionTip = false

console.log(router);
//var firebaseAuth=firebase.auth(firebase.apps[1]);
//var firebaseAuth=firebase.auth();
//var firebaseAuth=firebase.auth();
/*router.beforeEach((to, from, next) => {
var str="";
if(to.path.indexOf("/app2")!=-1){
 //this.$router.go(this.$route.path.replace("login","dashboard"));
 //bolApp2=true;
str="/app2/"+to.params.uid;
}
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser){
    console.log("beforeEach: "+'/login'+str);
   next('login'+str);
  }
  else if (!requiresAuth && currentUser) {
    console.log("beforeEach: "+'dashboard'+str);
    next('/dashboard'+str);
  }
  else 
    next();

  
});*/
let app = '';
console.log(router.history._startLocation)
let app2="";
let app3="";
let app4="";
let app5="";



if(router.history._startLocation.indexOf("/app2/1")!=-1){
 firebase.auth(firebase.apps[0]).onAuthStateChanged(user => {
  console.log('****0: ',user);
   if(!app2){
   // console.log(router);
    app2 = new Vue({
      router,
      //1==3?router:router,
      store,
      vuetify,
      render: h =>h(Appp)// h(dashboard)
    }).$mount('#app')
  }
  });
 } else if(router.history._startLocation.indexOf("/app2/2")!=-1){
   firebase.auth(firebase.apps[1]).onAuthStateChanged(user => {
 console.log('****1: ',user);
   if(!app3){
   // console.log(router);
    app3 = new Vue({
      router,
      //1==3?router:router,
      store,
      vuetify,
      render: h =>h(Appp)// h(dashboard)
    }).$mount('#app')
  }
  });
  }
  else if(router.history._startLocation.indexOf("/app2/3")!=-1){
   firebase.auth(firebase.apps[2]).onAuthStateChanged(user => {
 console.log('****2: ',user);
   if(!app4){
   // console.log(router);
    app4 = new Vue({
      router,
      //1==3?router:router,
      store,
      vuetify,
      render: h =>h(Appp)// h(dashboard)
    }).$mount('#app')
  }
  });
  } else if(router.history._startLocation.indexOf("/app2/4")!=-1){
   firebase.auth(firebase.apps[3]).onAuthStateChanged(user => {
 console.log('****3: ',user);
   if(!app5){
   // console.log(router);
    app5 = new Vue({
      router,
      //1==3?router:router,
      store,
      vuetify,
      render: h =>h(Appp)// h(dashboard)
    }).$mount('#app')
  }
  });
  } else {
   //firebase.auth(firebase.apps[0]).onAuthStateChanged(user => { console.log('****00: ',user);
if(!app){
   // console.log(router);
    app = new Vue({
      router,
      //1==3?router:router,
      store,
      vuetify,
      render: h =>h(App)// h(dashboard)
    }).$mount('#app')
  }
//});
  }






