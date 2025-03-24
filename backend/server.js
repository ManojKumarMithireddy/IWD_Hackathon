// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvh8Q9P-pSXYv4yI2IqG5vVYpH0VFI9lc",
  authDomain: "testapp-c7116.firebaseapp.com",
  projectId: "testapp-c7116",
  storageBucket: "testapp-c7116.firebasestorage.app",
  messagingSenderId: "121541731864",
  appId: "1:121541731864:web:ddb790b1c701c84ecf856d",
  measurementId: "G-4HZYC5MQE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);