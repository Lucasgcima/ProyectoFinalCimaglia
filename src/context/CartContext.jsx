import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);
  const total = () =>
    cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const totalItems = () => cart.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
