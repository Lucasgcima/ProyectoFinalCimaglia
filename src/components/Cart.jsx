import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/" className="back-btn">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>🛒 Tu Carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={`${import.meta.env.BASE_URL}images/${item.image}`}
            alt={item.title}
            className="cart-item-img"
          />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>❌ Eliminar</button>
          </div>
        </div>
      ))}

      <h3 className="cart-total">Total a pagar: ${totalPrice()}</h3>

      <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout" className="checkout-btn">Finalizar compra</Link>
    </div>
  );
}
