import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  if (!product) return null;

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        width: '200px',
        textAlign: 'center',
        margin: '1rem'
      }}
    >
      <img src={product.image} alt={product.title} width="150" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
