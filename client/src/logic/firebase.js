// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjmybbVESslSwNnjvurTV4Xv7ce7-JXkU",
  authDomain: "linkedin-clone-5f1f8.firebaseapp.com",
  projectId: "linkedin-clone-5f1f8",
  storageBucket: "linkedin-clone-5f1f8.appspot.com",
  messagingSenderId: "1088763937942",
  appId: "1:1088763937942:web:e9d325d472972bbac16eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth =  getAuth(app)

export {db, auth}