const { Schema, model } = require("mongoose");

const SpecialPriceSchema = new Schema({
  nombre_producto: String,
  precio_especial_personal: Number
});

const UserSchema = new Schema({
  id: Number,
  nombre: String,
  metadata: { type: Schema.Types.Mixed },
  precios_especiales: [SpecialPriceSchema]
});

const User = model("User", UserSchema);

module.exports = User;
