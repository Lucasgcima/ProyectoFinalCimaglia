import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import fs from "fs";

const rawData = fs.readFileSync("./src/data/productos.json", "utf-8");
const productos = JSON.parse(rawData);

const firebaseConfig = {
  apiKey: "AIzaSyChSs8TqXIp4ej_BrZTioguehpMZ8yCrwM",
  authDomain: "proyectofinalcimaglia.firebaseapp.com",
  projectId: "proyectofinalcimaglia",
  storageBucket: "proyectofinalcimaglia.firebasestorage.app",
  messagingSenderId: "316316902119",
  appId: "1:316316902119:web:a3031e8ffe65d12afff842",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadData = async () => {
  try {
    const productosRef = collection(db, "productos");

    for (const producto of productos) {
      await addDoc(productosRef, producto);
      console.log(`✅ Producto subido: ${producto.title}`);
    }

    console.log("🎉 Todos los productos fueron subidos a Firestore.");
  } catch (error) {
    console.error("❌ Error subiendo los productos:", error);
  }
};

uploadData();
