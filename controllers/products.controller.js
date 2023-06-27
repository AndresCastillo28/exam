const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ existencia: { $gt: 0 } });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = {
  getProducts,
};
