const express = require("express");
const router = express.Router();

const { getPrice } = require("../controllers/price.controller");

router.get('/:user_id/:nombre_producto', getPrice);

module.exports = router;
