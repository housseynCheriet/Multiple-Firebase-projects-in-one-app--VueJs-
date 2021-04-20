// /src/app.vue
<template>
  <div>
 
    
   <!--<App2 />-->
   
   <router-view />
    </div>
  
  
</template>



<script>
 
  //import App2 from './components/App2'
 // import LoginRegister from './components/LoginRegister'
  export default {
    name: 'app'/*,
    components: {
      App2
    }  ,
    created: function() {
   // console.log(this.$store);
    this.$store.state.authStore.count++;
   // console.log(this.$store.state.authStore.count);
  },
  computed: {
    count: function() {
      return this.$store.state.authStore.count;
    },
    todo: function() {
      return this.$store.state.authStore.todo;
    }
	},
  methods: {
    increment() {
        //invoking the 'INCREMENT_COUNT' mutation
      this.$store.commit("INCREMENT_COUNT");
    },
    getTodo() {
      this.$store.dispatch("getTodo");
    }
  }*/
  }
</script>

