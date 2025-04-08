import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA_i6ki1SR_1nHB8K9eHxFf1SpKDp4Zojw",
  authDomain: "cis371-hw3-3042e.firebaseapp.com",
  projectId: "cis371-hw3-3042e",
  storageBucket: "cis371-hw3-3042e.firebasestorage.app",
  messagingSenderId: "976809209619",
  appId: "1:976809209619:web:b72aa552b60244668e34e6",
  measurementId: "G-JM0GH0EQP9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
