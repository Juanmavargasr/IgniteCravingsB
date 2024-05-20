const Producto = require("../models/productosModel");
const Categoria = require("../models/categoriasModel");
const Restaurante = require("../models/restaurantesModel");

const obtenerProductos = async (req, res) => {
  try {
    const productosEncontrados = await Producto.find({})
      .populate("categoriaId", "nombre")
      .populate("restauranteId", "nombre");
    if (!productosEncontrados) {
      res.status(404).json({
        mensaje: "productos no entonctrados",
      });
    } else {
      console.log(productosEncontrados);
      res.status(200).json({
        mensaje: "Productos encontrados satisfactoriamente",
        Productos: productosEncontrados,
      });
    }
  } catch (error) {
    console.error(error, "error");
  }
};

module.exports = { obtenerProductos };
