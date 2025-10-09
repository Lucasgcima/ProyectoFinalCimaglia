import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return <h2>Detalle del producto con ID: {productId}</h2>;
};

export default ProductDetail;
