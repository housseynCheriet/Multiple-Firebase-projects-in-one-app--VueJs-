<template>
   <div class="wrapper">
      <div class="container-fluid">
   
   <div class="row">
    <!-- Hello -->
      <div class="col-md-6 col-lg-6 col-xl-4 bg-primary">
         <a id="a" href="/app2/1" target="_blank">go to /app2/1</a>
         <div class="h_iframe">
    <iframe src="/app2/1"></iframe>
 </div>
        
         
      </div>
      <!-- Sunny mornings -->
      <div class="col-md-6 col-lg-6 col-xl-4 bg-secondary">
        <a id="a" href="/app2/2" target="_blank">go to /app2/2</a>
        <div class="h_iframe">
    <iframe src="/app2/2"></iframe>
 </div>
      </div>
       <!-- Great Thinkers -->
      <div class="col-md-6 col-lg-6 col-xl-4 bg-danger">
         <a id="a" href="/app2/3" target="_blank">go to /app2/3</a>
        <div class="h_iframe">
    <iframe src="/app2/3"></iframe>
 </div>
    </div>
     <!-- Ready Set Go! -->
      <div class="col-md-6 col-lg-6 col-xl-4 bg-success">
         <a id="a" href="/app2/4" target="_blank">go to /app2/4</a>
         <div class="h_iframe">
    <iframe src="/app2/4"></iframe>
 </div>
      </div>




 
</div></div>
   </div>
</template>

<style  lang="scss" scoped>
.row .h_iframe{
   height: 600px;
}
.h_iframe iframe {
    width:100%;

}
.h_iframe {
    height: 100%;
    width:100%;
}
</style>

<script>
	//import firebase from 'firebase';
//import db from "../firestore";
export default {
      name: 'Iframe',
      
   }
</script>
<style type="text/css">
   .h_iframe iframe {
    width:100%;
    height:100%;
}
.h_iframe {
    height: 100%;
    width:100%;
}
a#a {
    display: inline-block;
    color: #fbe804;
    font-size: 2rem;
    transition: all 0.2s ease;
    background-color: transparent;
    text-decoration: none;
    padding: 0.1em;
    position: relative;
    z-index: 10;
}
a#a:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1%;
    border-bottom: 1px dotted #2196f3;
    background-color: transparent;
    transition: all 0.3s ease;
    z-index: -1;
}
a#a:after {
    content: '[Opens in new tab]';
    position: absolute;
    top: 100%;
    font-style: italic;
    left: 0;
    transform: translateY(-100%);
    background: #fbe804;
    width: 100%;
    text-align: center;
    height: 20px;
    font-size: 18px;
    line-height: 12px;
    transition: all 0.2s ease-out;
    color: rgb(243 1 1 / 85%);
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    font-weight: 700;
}
a#a:hover {
    text-decoration: none;
    color: black;
}
a#a:hover:before {
    height: 100%;
    background-color: #fbe804;
  }
  a#a:hover:after {
    transform: translateY(0);
    opacity: 1;
}
</style>