import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <br />
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
