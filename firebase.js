import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQH7MjqPP5kFRdeCkaK--JS61t08951CI",
  authDomain: "netlet-dev.firebaseapp.com",
  projectId: "netlet-dev",
  storageBucket: "netlet-dev.appspot.com",
  messagingSenderId: "1075483014486",
  appId: "1:1075483014486:web:fada6c07a324df54bad2f7",
};

initializeApp(firebaseConfig);

export {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
};
