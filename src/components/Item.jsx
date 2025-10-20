import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/detail/${product.id}`} className="product-link">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
      </Link>
    </div>
  );
};

export default Item;
