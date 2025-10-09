import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./itemcount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>

      {addedToCart ? (
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
