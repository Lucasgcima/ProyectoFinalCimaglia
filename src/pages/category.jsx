import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();

  return <h2>Estás viendo la categoría: {categoryId}</h2>;
};

export default Category;
