module.exports = function validateCart(req, res, next) {
  const { productId, quantity } = req.body;

  if (typeof productId !== "number") {
    return res.status(400).json({ message: "productId must be a number" });
  }
  if (typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({ message: "quantity must be a positive number" });
  }

  next();
};
