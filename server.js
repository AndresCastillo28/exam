const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
dbConnection();


// Routes
app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "API Running...",
  });
});

app.use("/products", require("./routes/products.routes"));
app.use("/price", require("./routes/price.routes"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
