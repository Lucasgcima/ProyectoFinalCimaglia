import React, { useEffect, useState } from 'react';
import { getProducts } from '../data/products';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Listado de productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
