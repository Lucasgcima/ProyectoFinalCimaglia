import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChSs8TqXIp4ej_BrZTioguehpMZ8yCrwM",
  authDomain: "proyectofinalcimaglia.firebaseapp.com",
  projectId: "proyectofinalcimaglia",
  storageBucket: "proyectofinalcimaglia.appspot.com",
  messagingSenderId: "231620001149",
  appId: "1:231620001149:web:86a87f540a52b0ee116b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
