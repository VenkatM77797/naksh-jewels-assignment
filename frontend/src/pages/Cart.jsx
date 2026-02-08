import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, total, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) return <p style={{ padding: 16 }}>Cart is empty</p>;

  return (
    <div style={{ padding: 16 }}>
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <strong>{item.name}</strong> — ₹{item.price}
          <br />
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          {item.quantity}
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
