const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img 
        src={`/images/${product.image}`} 
        alt={product.title} 
        style={{ width: "200px", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
};

export default Item;
