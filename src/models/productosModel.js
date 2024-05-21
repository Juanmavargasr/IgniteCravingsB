const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    alergenos: { type: [String], required: false },
    imagen: { type: String, required: true },
    video: { type: String, required: false },
    categoriaId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Categoria",
    },
    restauranteId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurante",
    },
    indice: { type: Number, required: true },
    estaActivo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
  { collection: "productos" }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
