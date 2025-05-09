import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABv4kT3V47q6-BpbB3neCw8GKQKw55Zho",
  authDomain: "christeglow.firebaseapp.com",
  projectId: "christeglow",
  storageBucket: "christeglow.firebasestorage.app",
  messagingSenderId: "428059166248",
  appId: "1:428059166248:web:3cc61ccb17795d4605971d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
