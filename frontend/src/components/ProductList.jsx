import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <p style={{ padding: 16 }}>Error: {error}</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 24,
        padding: 24,
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}
