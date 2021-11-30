import React from "react";
import { useForm } from "react-hook-form";
import Flecha from "./multimedia/flecha.png";
import "./css/pantallas.css";

const ModifPelicula = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8080/postModificarPelicula", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        genero: data.genero,
        director: data.director,
        nombreNuevo: data.nombreNuevo,
        generoNuevo: data.generoNuevo,
        dirNuevo: data.dirNuevo,
        añoNuevo: data.añoNuevo,
        linkNuevo: data.linkNuevo,
      }),
    }).then((response) => console.log(response));
  };

  return (
    <div className="pantalla">
      <h1 className="titulo">Modificar película</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="filaInput peliOriginal">
          <div>
            <div className="filaInput">
              <input
                {...register("nombre", { required: true })}
                placeholder="Titulo..."
                className="inputForm"
              />
            </div>
            <div className="filaInput">
              <input
                {...register("genero", { required: true })}
                placeholder="Género..."
                className="inputForm"
              />
            </div>
          </div>
          <div>
            <input
              {...register("director", { required: true })}
              placeholder="Director..."
              className="inputForm"
            />
          </div>
          <div>
            <input
              className="inputForm"
              style={{ visibility: "hidden", margin: "50px" }}
            />
          </div>
        </div>
        <img src={Flecha} className="flecha" />
        <div className="filaInput">
          <div>
            <div className="filaInput">
              <input
                {...register("nombreNuevo")}
                placeholder="Titulo..."
                className="inputForm"
              />
            </div>
            <div className="filaInput">
              <input
                {...register("generoNuevo")}
                placeholder="Género..."
                className="inputForm"
              />
            </div>
          </div>
          <div>
            <div className="filaInput">
              <input
                {...register("dirNuevo")}
                placeholder="Director..."
                className="inputForm"
              />
            </div>
            <div className="filaInput">
              <input
                {...register("añoNuevo")}
                placeholder="Año..."
                className="inputForm"
              />
            </div>
          </div>
          <div>
            <input
              {...register("linkNuevo")}
              placeholder="Link del trailer..."
              className="inputLinkForm"
            />
          </div>
        </div>
        <input
          type="submit"
          className="btnForm btnModifPeli"
          value="Modificar"
        />
      </form>
    </div>
  );
};

export default ModifPelicula;
