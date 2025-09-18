import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>

      {addedToCart ? (
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      ) : (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
