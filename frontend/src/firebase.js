import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8FUnrovRkq59wjULzRVA9YuaOQd6P-F8",
  authDomain: "foodie-cart-c1952.firebaseapp.com",
  projectId: "foodie-cart-c1952",
  storageBucket: "foodie-cart-c1952.firebasestorage.app",
  messagingSenderId: "6779203544",
  appId: "1:6779203544:web:f3408be6e89f84032b0cad",
  measurementId: "G-MDEV6MF1Q0"
};


const app =
initializeApp(firebaseConfig);


export const auth =
getAuth(app);


export const googleProvider =
new GoogleAuthProvider();