// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDfIh-XC2WCOmiCRWrkSMm_EsgxnzUWx3o",
  authDomain: "twitter-clone-2ab2c.firebaseapp.com",
  projectId: "twitter-clone-2ab2c",
  storageBucket: "twitter-clone-2ab2c.appspot.com",
  messagingSenderId: "908905704751",
  appId: "1:908905704751:web:96381c2dbbf96a96cc85da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmenin refarınsını alma
export const auth = getAuth(app);

// google sağlayıcı kurulum
export const provider = new GoogleAuthProvider();

// veirtabının referansını alma
export const db = getFirestore(app);

// depolam alanın referansını alma
export const storage = getStorage(app);
