const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
