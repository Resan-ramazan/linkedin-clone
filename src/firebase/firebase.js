import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdH0eb7akw3g2hNfXjEG6FKGDKreuwzTg",
  authDomain: "linkedin-clone-d5046.firebaseapp.com",
  projectId: "linkedin-clone-d5046",
  storageBucket: "linkedin-clone-d5046.appspot.com",
  messagingSenderId: "288786235007",
  appId: "1:288786235007:web:5b0717e1aa8cba5112c94a",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;

