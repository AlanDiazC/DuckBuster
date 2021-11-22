const express = require("express");
const cors = require("cors");
const routes = require("./routes/rutasPelis.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Vinculamos la aplicación con los recursos de videojuegos
app.use("/", routes);

app.listen(8080, () => {
  console.log("Servidor online en el puerto 8080");
});
