import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <div className="card-buttons">
        <Link to={`/item/${product.id}`}>
          <button>Ver Detalle</button>
        </Link>
        <button onClick={() => addToCart(product, 1)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Item;
