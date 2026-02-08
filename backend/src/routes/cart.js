const express = require("express");
const products = require("../data/products");
const validateCart = require("../middleware/validateCart");

const router = express.Router();

// In-memory cart
let cart = []; // [{ productId, quantity }]

router.post("/", validateCart, (req, res) => {
  const { productId, quantity } = req.body;

  const productExists = products.some((p) => p.id === productId);
  if (!productExists) {
    return res.status(404).json({ message: "Product not found" });
  }

  const existing = cart.find((c) => c.productId === productId);
  if (existing) existing.quantity += quantity;
  else cart.push({ productId, quantity });

  return res.status(201).json({ message: "Added to cart", cart });
});

router.get("/", (_req, res) => {
  res.json(cart);
});

router.delete("/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  cart = cart.filter((c) => c.productId !== productId);
  res.json({ message: "Removed", cart });
});

router.put("/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const { quantity } = req.body;

  if (typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({ message: "quantity must be a positive number" });
  }

  const item = cart.find((c) => c.productId === productId);
  if (!item) return res.status(404).json({ message: "Item not found in cart" });

  item.quantity = quantity;
  res.json({ message: "Quantity updated", cart });
});

module.exports = router;
