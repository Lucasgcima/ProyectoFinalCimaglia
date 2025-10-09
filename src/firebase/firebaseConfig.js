import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChSs8TqXIp4ej_BrZTioguehpMZ8yCrwM",
  authDomain: "proyectofinalcimaglia.firebaseapp.com",
  projectId: "proyectofinalcimaglia",
  storageBucket: "proyectofinalcimaglia.firebasestorage.app",
  messagingSenderId: "316316902119",
  appId: "1:316316902119:web:a3031e8ffe65d12afff842",
  measurementId: "G-FSM9016RN3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;