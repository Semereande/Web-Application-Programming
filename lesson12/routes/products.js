const express = require('express');
const router = express.Router();

// Sample product data (for demo purposes)
let products = [
  { id: 1, name: 'car', price: 30000 },
  { id: 2, name: 'phone', price: 1500 },
];

// GET request for /products - Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST request for /products - Add a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
