const mongoose = require("mongoose");

mongoose
  .connect("mongodb://user8:root@54.173.202.133:27017/base8?authSource=admin")
  .then(() => console.log("Conexion exitosa"))
  .catch((err) => console.log(err));

const Pelicula = mongoose.Schema({
  nombre: {
    type: String,
    alloNull: false,
  },
  genero: {
    type: String,
    alloNull: false,
  },
  director: {
    type: String,
    alloNull: false,
  },
  año: {
    type: String,
  },
  linkTrailer: {
    type: String,
  },
});

module.exports = mongoose.model("Pelicula", Pelicula);
