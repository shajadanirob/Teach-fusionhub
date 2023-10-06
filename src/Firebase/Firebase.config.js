// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqTVyUPP10INu0-Lk0NerVuhl8G5EXJd4",
  authDomain: "edulearn-hub.firebaseapp.com",
  projectId: "edulearn-hub",
  storageBucket: "edulearn-hub.appspot.com",
  messagingSenderId: "644967628241",
  appId: "1:644967628241:web:700d6ff2e3aee0fa1d74f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
