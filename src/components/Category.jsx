import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h2>Categoría: {categoryId}</h2>
      <p>Aquí se mostrarán los productos filtrados por categoría.</p>
    </div>
  );
};

export default Category;
