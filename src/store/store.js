// src/store/store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import authStore from './modules/authStore'
import authStore2 from './modules/authStore2'
export default new Vuex.Store({
   modules: {
      authStore,authStore2
   }
   });
