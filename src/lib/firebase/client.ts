
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_lOCrkziDs0xNLiYy2sV-u692AlFS-VE",
  authDomain: "nihongo-tamashii.firebaseapp.com",
  projectId: "nihongo-tamashii",
  storageBucket: "nihongo-tamashii.firebasestorage.app",
  messagingSenderId: "633602084925",
  appId: "1:633602084925:web:5c678de0cb5a4e8f165a54",
  measurementId: "G-9M7RJKQPWL"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
