
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNte699LERxvei3_MHoTAxJRBxZ9cogZc",
  authDomain: "flashcard-3a4f8.firebaseapp.com",
  projectId: "flashcard-3a4f8",
  storageBucket: "flashcard-3a4f8.firebasestorage.app",
  messagingSenderId: "978555010928",
  appId: "1:978555010928:web:663d5c30565d974b76d9b5",
  measurementId: "G-H4TG4CTR8V"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
