<template>
  <div>
  <div>
      
<!-- SOCIAL PANEL HTML -->
<div class="social-panel-container">
  <div class="social-panel">
    <p>Houssey Cheriet <i class="fa fa-heart"></i> 
      <a target="_blank" href="https://www.linkedin.com/in/housseyn-cheriet-a08a0016a/">Web Developer</a></p>
    <button class="close-btn" @click="closeBtn"><i class="fas fa-times"></i></button>
    <h4>Get in touch on</h4>
    <ul>
      <li>
        <a href="https://github.com/housseynCheriet" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/housseyn-cheriet-a08a0016a/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/groups/864885700588836" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCuRFhEqrPFrgVRRc1eMfpEA" target="_blank">
          <i class="fab fa-youtube"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
<button class="floating-btn" @click="floatingBtn">
  Get in Touch
</button>
    </div>
    </div>
</template>
<script>
  export default {
    name: 'GetInTouch',
    
    methods:{
      floatingBtn(){
        document.querySelector('.social-panel-container').classList.toggle('visible')
      },
       closeBtn(){
         document.querySelector('.social-panel-container').classList.remove('visible')
      }
    }
   
  }
</script>
<style type="text/css">
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40eiNxw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50eiNxw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30eg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
  box-sizing: border-box;
}


/* INSERT CSS HERE */


/* SOCIAL PANEL CSS */
.social-panel-container {
  z-index: 20;
  position: fixed;
  right: 0;
  bottom: 80px;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
}

.social-panel-container.visible {
  transform: translateX(-10px);
}

.social-panel { 
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 16px 31px -17px rgba(0,31,97,0.6);
  border: 5px solid #001F61;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Muli';
  position: relative;
  height: 169px;  
  width: 370px;
  max-width: calc(100% - 10px);
}

.social-panel button.close-btn {
  border: 0;
  color: #97A5CE;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
}

.social-panel button.close-btn:focus {
  outline: none;
}

.social-panel p {
  background-color: #001F61;
  border-radius: 0 0 10px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  padding: 2px 17px 6px;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  text-align: center;
  width: 270px;
}

.social-panel p i {
  margin: 0 5px;
}

.social-panel p a {
  color: #FF7500;
  text-decoration: none;
}

.social-panel h4 {
  margin: 20px 0;
  color: #97A5CE; 
  font-family: 'Muli';  
  font-size: 14px;  
  line-height: 18px;
  text-transform: uppercase;
}

.social-panel ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.social-panel ul li {
  margin: 0 10px;
}

.social-panel ul li a {
  border: 1px solid #DCE1F2;
  border-radius: 50%;
  color: #001F61;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  text-decoration: none;
}

.social-panel ul li a:hover {
  border-color: #FF6A00;
  box-shadow: 0 9px 12px -9px #FF6A00;
}

.floating-btn {
  border-radius: 26.5px;
  background-color: #001F61;
  border: 1px solid #001F61;
  box-shadow: 0 16px 22px -17px #03153B;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  padding: 12px 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}

.floating-btn:hover {
  background-color: #ffffff;
  color: #001F61;
}

.floating-btn:focus {
  outline: none;
}

@media screen and (max-width: 480px) {

  .social-panel-container.visible {
    transform: translateX(0px);
  }
  
  .floating-btn {
    right: 10px;
  }
}
</style>