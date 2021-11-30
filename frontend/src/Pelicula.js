import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Play from "./multimedia/play.png";
import "./css/pantallas.css";

const Pelicula = () => {
  const id = useParams();
  const [pelicula, setPelicula] = useState();
  const [isLoaded, setLoad] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const peli = await fetch(
      "http://localhost:8080/verDatosPelicula/" + id.idPeli
    )
      .then((res) => res.json())
      .then((data) => {
        setPelicula(data);
        setLoad(true);
      });
  };

  const trailer = () => window.open(pelicula.linkTrailer);

  if (isLoaded) {
    return (
      <div className="pantalla">
        <h1 className="titulo">Datos de la película</h1>
        <ul>
          <div>
            <h2 className="textoHomepage">{pelicula.nombre}</h2>
            <h2 className="textoHomepage">Género: {pelicula.genero}</h2>
            <h2 className="textoHomepage">Director: {pelicula.director}</h2>
            <h2 className="textoHomepage">Año: {pelicula.año}</h2>
            <button type="submit" className="btnForm" onClick={trailer}>
              <img src={Play} className="play" />
              Ver el trailer
            </button>
          </div>
        </ul>
      </div>
    );
  } else {
    return <h1 className="titulo">Sin conexión con la base de datos</h1>;
  }
};

export default Pelicula;
