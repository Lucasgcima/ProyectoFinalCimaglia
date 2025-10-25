import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon">
      🛒 {totalItems() > 0 && <span>({totalItems()})</span>}
    </Link>
  );
}
