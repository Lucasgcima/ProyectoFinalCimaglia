import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./itemcount/ItemCount";

export default function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img
        src={`${import.meta.env.BASE_URL}images/${product.image}`}
        alt={product.title}
        className="detail-image"
      />
      <p>{product.description}</p>
      <strong className="price">${product.price}</strong>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
}
