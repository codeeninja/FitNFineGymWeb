// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCmEz8lZUuOnHJJrZoHnTVkYn409Ck_gy4",
  authDomain: "gym-management-e0acb.firebaseapp.com",
  projectId: "gym-management-e0acb",
  storageBucket: "gym-management-e0acb.appspot.com",
  messagingSenderId: "657099914461",
  appId: "1:657099914461:web:ec3faa5505d7bb299a2f34",
  measurementId: "G-FY14GGZ1X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export{auth,provider}