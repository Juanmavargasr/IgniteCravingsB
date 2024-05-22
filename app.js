const express = require("express");
const { connectDB } = require("./src/db");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const constants = require("./src/constants");

const front = {
  origin: "https://ignite-cravings.vercel.app",
  credentials: true,
};

const port = process.env.SECRET_PORT;
const productosRouter = require("./src/routes/productosRoutes");
const categoriasRouter = require("./src/routes/categoriasRoutes");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(front));

app.use((req, res, next) => {
  try {
    const valideRequest = ["GET", "POST", "PUT", "DELETE"];
    const method = req.method.toUpperCase();
    if (!valideRequest.includes(method)) {
      return res
        .status(400)
        .json({ error: constants.appConstants.notAllowedMethod });
    }
  } catch (error) {
    console.error("Error checking methods", error);
    res.status(500).json({ error: constants.appConstants.notAllowedMethod });
  }
  next();
});

app.use("/productos", productosRouter);

app.use("/categorias", categoriasRouter);

// app.use("/logIn", authRoutes);

connectDB();
app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
