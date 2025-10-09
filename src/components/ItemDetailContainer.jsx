import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          console.log("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <p>Cargando producto...</p>;

  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
