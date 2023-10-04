// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUVsDcVkZubBMG3eqBx70jd0x2YLa8kSQ",
  authDomain: "react-dragon-news-auth-b1e7f.firebaseapp.com",
  projectId: "react-dragon-news-auth-b1e7f",
  storageBucket: "react-dragon-news-auth-b1e7f.appspot.com",
  messagingSenderId: "237499791723",
  appId: "1:237499791723:web:6cae55ab8190ff9cff342e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
