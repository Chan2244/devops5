import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqDHM7npKZUZnUBEGU5lJ1aRGG113Luzw",
  authDomain: "fir-tutorial-183ba.firebaseapp.com",
  projectId: "fir-tutorial-183ba",
  storageBucket: "fir-tutorial-183ba.firebasestorage.app",
  messagingSenderId: "908058232061",
  appId: "1:908058232061:web:5ce76aa51a012ec5ffea94",
  measurementId: "G-2Y2NV5VQJQ"
};

const app = initializeApp(firebaseConfig);

const db = getFiresotre(app);
