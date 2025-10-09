
import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import fs from 'fs';


const raw = fs.readFileSync('./src/data/productos.json', 'utf-8');
const productos = JSON.parse(raw);


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
const db = getFirestore(app);


const uploadData = async () => {
  try {
    const colRef = collection(db, 'productos');

    for (const p of productos) {
      await addDoc(colRef, p);
      console.log(`✅ Cargado: ${p.title} (${p.category})`);
    }

    console.log('🎉 Todos los productos se cargaron correctamente en Firestore.');
  } catch (err) {
    console.error('❌ Error cargando productos:', err);
  }
};

uploadData();
