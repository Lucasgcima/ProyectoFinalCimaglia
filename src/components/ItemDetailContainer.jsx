import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, [id]);

  if (!product) return <p>Cargando detalle...</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
