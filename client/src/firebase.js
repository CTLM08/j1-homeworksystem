import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqdSBSoGfxs-pNa3TD9-HybPhqKHJCr-I",
  authDomain: "junior1-homework-system.firebaseapp.com",
  projectId: "junior1-homework-system",
  storageBucket: "junior1-homework-system.appspot.com",
  messagingSenderId: "155170471475",
  appId: "1:155170471475:web:655bf8518fb3d95892ed46",
  measurementId: "G-D0QP7YBQDY",
};

export const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
