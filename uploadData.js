import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import fs from 'fs';

const raw = fs.readFileSync('./src/data/productos.json', 'utf-8');
const productos = JSON.parse(raw);

const firebaseConfig = {
  apiKey: "AIzaSyChS8TqXlP4ej_BrZTiquehgMZ8yCrwM",
  authDomain: "proyectofinalcimaglia.firebaseapp.com",
  projectId: "proyectofinalcimaglia",
  storageBucket: "proyectofinalcimaglia.firebasestorage.app",
  messagingSenderId: "231620001149",
  appId: "1:231620001149:web:8b6a87f5405a52b0ee116b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadData = async () => {
  const productosRef = collection(db, 'productos');

  for (const producto of productos) {
    try {
      await addDoc(productosRef, producto);
      console.log(`Producto agregado: ${producto.title}`);
    } catch (error) {
      console.error("Error al subir producto:", error);
    }
  }

  console.log("✅ Todos los productos se subieron correctamente.");
};

uploadData();
