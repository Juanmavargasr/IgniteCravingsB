const Categoria = require("../models/categoriasModel");
const Restaurante = require("../models/restaurantesModel");

const obtenerCategorias = async (req, res) => {
  try {
    const restaurante = await Restaurante.findOne({
      nombre: "El Buen Sabor",
    }); //buscar la manera de pasar este restaurante como parámetro de la url

    if (!restaurante) {
      res.status(404).json({
        mensaje: "restaurante no encontrado",
      });
    }

    const categoriasEncontradas = await Categoria.find({
      restauranteId: restaurante._id,
    });

    if (!categoriasEncontradas) {
      res.status(404).json({
        mensaje: "Categorias no encontradas",
      });
    } else {
      res.status(200).json({
        mensaje: "Categorias encontradas satisfactoriamente",
        Categorias: categoriasEncontradas,
      });
    }
  } catch (error) {
    console.error(error, "error");
  }
};

module.exports = {
  obtenerCategorias,
};
