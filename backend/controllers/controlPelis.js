const mongoose = require("mongoose");

const Peliculas = require("../models/peliculas.js");
const Catalogo = require("../models/catalogo.js");

exports.getCatalogo = async (req, res) => {
  Catalogo.find({}, function (err, catlg) {
    Peliculas.populate(catlg, { path: "idPeli" }, function (err, catlg) {
      res.status(200).json(catlg);
    });
  });
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

exports.postVerDatosPelicula = async (req, res) => {
  Peliculas.find({}, function (err, pelis) {
    res.status(200).json(pelis);
  });
};

exports.postModificarPelicula = async (req, res) => {
  if (req.body.nombreNuevo == null) {
    req.body.nombreNuevo = req.body.nombre;
  }
  if (req.body.generoNuevo == null) {
    req.body.generoNuevo = req.body.genero;
  }
  if (req.body.añoNuevo == null) {
    req.body.añoNuevo = req.body.año;
  }

  Peliculas.updateOne(
    {
      nombre: req.body.nombre,
      genero: req.body.genero,
      año: req.body.año,
    },
    {
      $set: {
        nombre: req.body.nombreNuevo,
        genero: req.body.generoNuevo,
        año: req.body.añoNuevo,
      },
    }
  )
    .then(res.status(200).json({ estado: "aceptado" }))
    .catch((err) => res.json(err));
};

exports.postBorrarPelicula = async (req, res) => {
  const pelis = Peliculas.find({
    nombre: req.body.nombre,
    genero: req.body.genero,
    año: req.body.año,
  });
  Peliculas.deleteOne({
    nombre: req.body.nombre,
    genero: req.body.genero,
    año: req.body.año,
  })
    .then(() => {
      Catalogo.deleteOne({
        _idPeli: pelis._id,
      })
        .then(() => {
          res.status(200).json({ estado: "aceptado" });
        })
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};
