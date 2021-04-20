// /src/firestore.js

import firebase from 'firebase'

//import 'firebase/firestore'

 var config = {
    apiKey: "AIzaSyAjQEd7xSE2QKluhxfC2XlB_LmVKEQCWms",
    authDomain: "testfirebasehocin.firebaseapp.com",
    projectId: "testfirebasehocin",
    storageBucket: "testfirebasehocin.appspot.com",
    messagingSenderId: "787418118892",
    appId: "1:787418118892:web:b662a7046aba90169fc3c9",
    measurementId: "G-79QRHLPK46"
  };
   var config2 = {
    apiKey: "AIzaSyAeyoWV_JucFc8opMQB77ua_ELzs32IdTc",
    authDomain: "testfirebasehocin2.firebaseapp.com",
    projectId: "testfirebasehocin2",
    storageBucket: "testfirebasehocin2.appspot.com",
    messagingSenderId: "555294751650",
    appId: "1:555294751650:web:818aa73e467594287610fb",
    measurementId: "G-TT3E78EMRC"
  };
  var config3 = {
    apiKey: "AIzaSyArDpA7GFXgpEPaJ--2sEUDidSKf7J_t9E",
    authDomain: "testfirebasehocin3.firebaseapp.com",
    projectId: "testfirebasehocin3",
    storageBucket: "testfirebasehocin3.appspot.com",
    messagingSenderId: "978757284598",
    appId: "1:978757284598:web:c895f6ba415759d68172d7",
    measurementId: "G-J866CB31PT"
  };
  var config4 = {
    apiKey: "AIzaSyCgWvvNIFrzcMmkbgTsmBXrteIVMHY4x0g",
    authDomain: "testfirebasehocin4.firebaseapp.com",
    projectId: "testfirebasehocin4",
    storageBucket: "testfirebasehocin4.appspot.com",
    messagingSenderId: "979111218698",
    appId: "1:979111218698:web:bab6e2d9a4ecd9b0f3d9f3",
    measurementId: "G-4HN88V7G61"
  };
   firebase.initializeApp(config);
//   firebase.storage();
    firebase.initializeApp(config2,'secondary');
    firebase.initializeApp(config3,'secondary2');
    firebase.initializeApp(config4,'secondary3');
//firebase.storage();
//firebase.firestore();
const db = firebase.firestore();


export {db};