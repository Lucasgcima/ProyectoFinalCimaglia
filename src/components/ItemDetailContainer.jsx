import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una promesa con fetch simulado
    const fetchProducto = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productoEncontrado = products.find((p) => p.id === id);
          resolve(productoEncontrado);
        }, 1000);
      });
    };

    fetchProducto().then((resultado) => {
      setProducto(resultado);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} width="200" />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
    </div>
  );
}

export default ItemDetailContainer;
