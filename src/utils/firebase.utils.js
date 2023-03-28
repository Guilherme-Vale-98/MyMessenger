// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBh0Q-NXrtotY3a2XYBkOuFXyI8EBuSCNQ',
  authDomain: "my-messenger-d77f9.firebaseapp.com",
  projectId: "my-messenger-d77f9",
  storageBucket: "my-messenger-d77f9.appspot.com",
  messagingSenderId: "45878924760",
  appId: "1:45878924760:web:4423e18a7447f9ff61cead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}