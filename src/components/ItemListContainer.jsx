import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "productos");
    const q = categoryId ? query(productsCollection, where("category", "==", categoryId)) : productsCollection;

    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  if (products.length === 0) return <p>Cargando productos...</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
