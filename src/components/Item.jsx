import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;
