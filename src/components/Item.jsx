function Item({ product }) {
  if (!product) return null;

  return (
    <div className="item">
      <img
        src={product.image || "https://via.placeholder.com/300x200?text=Sin+imagen"}
        alt={product.title || "Producto sin nombre"}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default Item;
