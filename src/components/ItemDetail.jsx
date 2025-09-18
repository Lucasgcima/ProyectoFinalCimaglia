import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
    </div>
  );
};

export default ItemDetail;
