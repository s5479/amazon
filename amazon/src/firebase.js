import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCRXbc6HStRjoQvyz7xhFH8sco6pUMnN_M",
  authDomain: "fir-d38d1.firebaseapp.com",
  projectId: "fir-d38d1",
  storageBucket: "fir-d38d1.appspot.com",
  messagingSenderId: "983886024424",
  appId: "1:983886024424:web:1a88fd69b5836f7944035d",
  measurementId: "G-KP1L1XWVNH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
