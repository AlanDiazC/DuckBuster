const mongoose = require("mongoose");
var Pelicula = mongoose.model("Pelicula");

mongoose
  .connect("mongodb://user8:root@54.173.202.133:27017/base8?authSource=admin")
  .then(() => console.log("Conexion exitosa"))
  .catch((err) => console.log(err));

const Catalogo = mongoose.Schema({
  idPeli: {
    type: mongoose.Schema.Types.ObjectId,
    alloNull: false,
    primaryKey: true,
    ref: "Pelicula",
  },
  cantidad: {
    type: Number,
    alloNull: false,
  },
  vendidos: {
    type: Number,
    alloNull: false,
  },
});

module.exports = mongoose.model("Catalogo", Catalogo);
