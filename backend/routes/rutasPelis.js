const express = require("express");
const controller = require("../controllers/controlPelis.js");
router = express.Router();

router.get("/getCatalogo", controller.getCatalogo);

router.get("/getPeliculas", controller.getPeliculas);

router.post("/postPelicula", controller.postPelicula);

router.get("/verDatosPelicula/:id", controller.verDatosPelicula);

router.post("/postModificarPelicula", controller.postModificarPelicula);

router.post("/postBorrarPelicula", controller.postBorrarPelicula);

router.post("/postModificarInventario", controller.postModificarInventario);

router.post("/borrarTodo", controller.borrarTodo);

module.exports = router;
