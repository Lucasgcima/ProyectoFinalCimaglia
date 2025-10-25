import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor completá todos los campos");
      return;
    }

    const order = {
      buyer,
      items: cart.map((prod) => ({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: prod.quantity,
      })),
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      setLoading(true);
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error generando la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>✅ ¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
        <p>Gracias por confiar en Cimaglia Turismo.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Completa tus datos</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre y apellido"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Generando orden..." : "Generar orden"}
        </button>
      </form>
    </div>
  );
}
