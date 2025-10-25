import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="card item-card">
      <img
        className="product-image"
        src={`${import.meta.env.BASE_URL}images/${product.image}`}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`} className="btn-detail">
        Ver más
      </Link>
    </div>
  );
}
