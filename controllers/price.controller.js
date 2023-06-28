const User = require("../models/User");
const Product = require("../models/Product");

const getPrice = async (req, res) => {
  try {
    const { user_id, nombre_producto } = req.params;
    const user = await User.findOne({ id: user_id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const product = await Product.findOne({ nombre: nombre_producto });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }


    const specialPrice = user.metadata?.precios_especiales?.find(
      (item) => item.nombre_producto === nombre_producto
    )?.precio_especial_personal;
    
    const price = specialPrice !== undefined ? specialPrice : product.precio_base;
    
    res.json({ price });
    
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch price" });
  }
};

module.exports = {
  getPrice,
};

