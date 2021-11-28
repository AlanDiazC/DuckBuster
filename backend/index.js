const express = require("express");
const cors = require("cors");
const routes = require("./routes/rutasPelis.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Vinculamos la aplicación con los recursos de videojuegos
app.use("/", routes);

app.get('/pelis', (req,res)=>{
  res.status(200).json({
    "peliculas":[
      {
        "nombre":"28 days later",
        "genero":"suspenso",
        "director":"Cillian Murphy",
        "año":"2002",
        "link":"ASDFKASFDASDFJAD"
      }
    ]
  })
})

app.post('/peli',(req,res)=>{
  console.log(req.body)
  res.json({
    mensaje:"Post realizado con exito, Hola!"
  })
})

app.listen(8080, () => {
  console.log("Servidor online en el puerto 8080");
});
