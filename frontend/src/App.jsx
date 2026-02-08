import { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";

function Header({ page, setPage }) {
  const { cartItems } = useCart();
  const count = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="header">
      <div className="header__brand">Naksh Jewels</div>
      <div className="header__nav">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Products
        </button>
        <button
          className={page === "cart" ? "active" : ""}
          onClick={() => setPage("cart")}
        >
          Cart ({count})
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <CartProvider>
      <Header page={page} setPage={setPage} />
      {page === "home" ? <Home /> : <Cart />}
    </CartProvider>
  );
}
