const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: String,
  precio_base: Number,
  existencia: Number,
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
