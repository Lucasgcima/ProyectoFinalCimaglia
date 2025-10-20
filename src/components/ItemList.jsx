import Item from "./Item";

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>Cargando productos o no hay productos disponibles...</p>;
  }

  return (
    <div className="product-list">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
