import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  REACT_NATIVE_APP_FIREBASE_API_KEY,
  REACT_NATIVE_APP_AUTH_DOMAIN,
  REACT_NATIVE_APP_PROJECT_ID,
  REACT_NATIVE_APP_STORAGE_BUCKET,
  REACT_NATIVE_APP_MESSAGER_SENDER_ID,
  REACT_NATIVE_APP_FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: REACT_NATIVE_APP_FIREBASE_API_KEY,
  authDomain: REACT_NATIVE_APP_AUTH_DOMAIN,
  projectId: REACT_NATIVE_APP_PROJECT_ID,
  storageBucket: REACT_NATIVE_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_NATIVE_APP_MESSAGER_SENDER_ID,
  appId: REACT_NATIVE_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

export {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
};
