export default function ProductCard({ product, onAdd }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: 150, objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}
