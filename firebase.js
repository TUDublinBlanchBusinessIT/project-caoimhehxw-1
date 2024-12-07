// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@react-native-firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB87BMxzuJc8L4YIQAQgDRqDyABMA_SuxE",
  authDomain: "mobapps-7f6ad.firebaseapp.com",
  projectId: "mobapps-7f6ad",
  storageBucket: "mobapps-7f6ad.firebasestorage.app",
  messagingSenderId: "1076283258046",
  appId: "1:1076283258046:web:3a1221f342bbb95851daef",
  measurementId: "G-5SL1B68ZBB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;