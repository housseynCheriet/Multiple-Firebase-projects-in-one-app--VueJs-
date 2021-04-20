// /src/app.vue
<template>
  <div id="app">
    <h1>Multiple Firebase projects in one app</h1>
    
    <Iframe />
    
   
  </div>
</template>


<script>
  import Iframe from './components/Iframe'
 // import LoginRegister from './components/LoginRegister'
// import Header from './components/Header'
  export default {
    name: 'app',
    components: {
      Iframe
    }  
  }
</script>