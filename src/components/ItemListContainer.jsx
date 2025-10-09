import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "productos");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        setProducts(
          res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos o no hay productos disponibles...</p>;

  return <ItemList products={products} />;
}

export default ItemListContainer;
