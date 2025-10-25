import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const aumentar = () => count < stock && setCount(count + 1);
  const disminuir = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count">
      <button onClick={disminuir}>-</button>
      <span>{count}</span>
      <button onClick={aumentar}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}
