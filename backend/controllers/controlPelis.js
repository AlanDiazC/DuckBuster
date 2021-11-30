const mongoose = require("mongoose");

const Peliculas = require("../models/peliculas.js");
const Catalogo = require("../models/catalogo.js");

exports.getCatalogo = async (req, res) => {
  // Catalogo.find({}, function (err, catlg) {
  //   Peliculas.populate(catlg, { path: "idPeli" }, function (err, catlg) {
  //     console.log(catlg);
  //     res.send(catlg);
  //   });
  // });
  const catalogo = await Catalogo.find({});
  res.send(catalogo);
};

exports.getPeliculas = async (req, res) => {
  const peliculas = await Peliculas.find({});
  res.send(peliculas);
};

exports.postPelicula = async (req, res) => {
  const pelicula = await new Peliculas({
    nombre: req.body.nombre,
    genero: req.body.genero,
    director: req.body.director,
    año: req.body.año,
    linkTrailer: req.body.linkTrailer,
  });
  pelicula
    .save()
    .then((peli) => {
      const catlg = new Catalogo({
        idPeli: pelicula._id,
      });
      catlg.save().catch((err) => res.json({ catalogo: err }));
      res.status(200).json(peli);
    })
    .catch((err) => res.json(err));
};

exports.verDatosPelicula = async (req, res) => {
  const pelis = await Peliculas.findOne({ _id: req.params.id });
  res.send(pelis);
};

exports.postModificarPelicula = async (req, res) => {
  if (req.body.nombreNuevo == "") {
    req.body.nombreNuevo = req.body.nombre;
  }
  if (req.body.generoNuevo == "") {
    req.body.generoNuevo = req.body.genero;
  }
  if (req.body.dirNuevo == "") {
    req.body.dirNuevo = req.body.director;
  }

  Peliculas.updateOne(
    {
      nombre: req.body.nombre,
      genero: req.body.genero,
      director: req.body.director,
    },
    {
      $set: {
        nombre: req.body.nombreNuevo,
        genero: req.body.generoNuevo,
        director: req.body.dirNuevo,
        año: req.body.añoNuevo,
        linkTrailer: req.body.linkNuevo,
      },
    }
  )
    .then(console.log({ estado: "aceptado" }))
    .catch((err) => res.json(err));
};

exports.postBorrarPelicula = async (req, res) => {
  const pelis = Peliculas.find({
    nombre: req.body.nombre,
    genero: req.body.genero,
    director: req.body.director,
  });
  Catalogo.deleteOne({
    _idPeli: pelis._id,
  })
    .then(() => {
      Peliculas.deleteOne({
        nombre: req.body.nombre,
        genero: req.body.genero,
        director: req.body.director,
      })
        .then(() => {
          res.status(200).json({ estado: "aceptado" });
          console.log("borrado");
        })
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};

exports.postModificarInventario = async (req, res) => {
  const pelis = await Peliculas.findOne({
    nombre: req.body.nombre,
    genero: req.body.genero,
    director: req.body.director,
  });
  const idPeli = pelis._id.toString();
  Catalogo.updateOne(
    {
      idPeli: idPeli,
    },
    {
      $set: {
        cantidad: req.body.cantidad,
        vendidos: req.body.vendidos,
      },
    }
  )
    .then(console.log({ estado: "aceptado" }))
    .catch((err) => res.json(err));
};

exports.borrarTodo = async (req, res) => {
  Peliculas.deleteMany().then(res.json({ estado: "borrado" }));
};
