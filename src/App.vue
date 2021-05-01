// /src/app.vue
<template>
  <div id="app">
    <h1>Multiple Firebase projects in one app</h1>

    <GetInTouch />
    <Iframe />
    
   
  </div>
</template>


<script>
  import Iframe from './components/Iframe'
  import GetInTouch from './components/GetInTouch'
 // import LoginRegister from './components/LoginRegister'
// import Header from './components/Header'
  export default {
    name: 'app',
    components: {
      Iframe,GetInTouch
    }   ,
    methods:{
      floatingBtn(){
        console.log("+++")
         document.querySelector('.social-panel-container').classList.toggle('visible')
      },
       closeBtn(){
         document.querySelector('.social-panel-container').classList.remove('visible')
      }
    }
   
  }
</script>
