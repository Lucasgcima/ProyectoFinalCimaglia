import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div className="items-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

