const express = require("express");
const sequelize = require("./config/database");
const User = require("./models/User");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
require("dotenv").config();

const productRoutes = require("./routes/productos");
const categoryRoutes = require("./routes/categorias");
const usuariosRoutes = require("./routes/usuarios");
const ordenesRoutes = require("./routes/ordenes");
const clientesRoutes = require("./routes/clientes");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/productos", productRoutes);
app.use("/api/categorias", categoryRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/ordenes", ordenesRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/auth", authRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables synced!");
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
