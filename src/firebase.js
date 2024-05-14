// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjN_E6s58aJd7d6EVTyDB04dW5j8gg_pY",
  authDomain: "replay2-dc4f4.firebaseapp.com",
  projectId: "replay2-dc4f4",
  storageBucket: "replay2-dc4f4.appspot.com",
  messagingSenderId: "906775854732",
  appId: "1:906775854732:web:6443f43c2c1a424ded05a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);