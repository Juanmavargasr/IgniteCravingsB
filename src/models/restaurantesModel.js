const mongoose = require("mongoose");

const RestauranteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    ciudad: { type: String, required: true },
    pais: { type: String, required: true },
    estaActivo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
  { collection: "restaurantes" }
);

const Restaurante = mongoose.model("Restaurante", RestauranteSchema);

module.exports = Restaurante;
