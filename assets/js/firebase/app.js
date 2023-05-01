  // conexão com o firebase app
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBU5lIS0mfRkPwVI_Oxz4mVf84uX4p1SQw",
    authDomain: "inverted-world-joaop.firebaseapp.com",
    projectId: "inverted-world-joaop",
    storageBucket: "inverted-world-joaop.appspot.com",
    messagingSenderId: "962422521662",
    appId: "1:962422521662:web:3bee9a370b19337bb1766f",
    measurementId: "G-CT9KHWCRKE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export default app;