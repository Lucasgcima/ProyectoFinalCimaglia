import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <p>No hay stock disponible</p>}
    </div>
  );
};

export default ItemCount;
