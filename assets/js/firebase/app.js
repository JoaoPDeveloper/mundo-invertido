  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAh29Tid1R2bHa94WpWjvoOygIGmc8frSc",
    authDomain: "inverted-world-z4rk01.firebaseapp.com",
    projectId: "inverted-world-z4rk01",
    storageBucket: "inverted-world-z4rk01.appspot.com",
    messagingSenderId: "1081947254377",
    appId: "1:1081947254377:web:c3dd68d345c3538d1afcf8",
    measurementId: "G-BEH367E43V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export default app;