const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
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
  { collection: "categorias" }
);

const Categoria = mongoose.model("Categoria", CategoriaSchema);

module.exports = Categoria;
