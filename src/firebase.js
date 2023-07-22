import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuwFSvturmJDyoLbNU8yjSFE1VowI_5YQ",
  authDomain: "liming-blog.firebaseapp.com",
  projectId: "liming-blog",
  storageBucket: "liming-blog.appspot.com",
  messagingSenderId: "726892295623",
  appId: "1:726892295623:web:1aef885f24ca4cea79d5e2",
  measurementId: "G-0LLYX4HXT7",
};

export const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
