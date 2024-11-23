// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-job-board-41698.firebaseapp.com",
  projectId: "online-job-board-41698",
  storageBucket: "online-job-board-41698.firebasestorage.app",
  messagingSenderId: "293935248477",
  appId: "1:293935248477:web:807536393996a0816ec9b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};