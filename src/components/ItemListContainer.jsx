import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(db, "productos");
        const q = categoryId
          ? query(collectionRef, where("category", "==", categoryId))
          : collectionRef;

        const querySnapshot = await getDocs(q);

        const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

  return <ItemList items={items} />;
};

export default ItemListContainer;
