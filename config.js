import firebase from 'firebase';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-QkAagMQd-RiswtMuSZfgjYifb02qALQ",
  authDomain: "project-68-cf272.firebaseapp.com",
  projectId: "project-68-cf272",
  storageBucket: "project-68-cf272.appspot.com",
  messagingSenderId: "1042556837892",
  appId: "1:1042556837892:web:bfd78f54d97b31fc6b9551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
