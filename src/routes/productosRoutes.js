const express = require("express");

const { obtenerProductos } = require("../controllers/productosController");

const router = express.Router();

router.get("/", obtenerProductos);

module.exports = router;
