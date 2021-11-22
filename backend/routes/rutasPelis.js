const express = require("express");
const controller = require("../controllers/controlPelis.js");
router = express.Router();

router.get("/get", controller.getCatalogo);

router.post("/postPelicula", controller.postPelicula);

router.post("/postVerDatosPelicula", controller.postVerDatosPelicula);

router.post("/postModificarPelicula", controller.postModificarPelicula);

router.post("/postBorrarPelicula", controller.postBorrarPelicula);

module.exports = router;
