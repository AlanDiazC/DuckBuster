import React from "react";
import { useForm } from "react-hook-form";

const AgregarPelicula = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8080/postPelicula", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        genero: data.genero,
        director: data.director,
        año: data.año,
        linkTrailer: data.linkTrailer,
      }),
    }).then((response) => console.log(response));
  };

  return (
    <div className="pantalla">
      <h1 className="titulo">Agregar película</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="filaInput">
            <input
              {...register("director", { required: true })}
              placeholder="Director..."
              className="inputForm"
            />
          </div>
          <div className="filaInput">
            <input
              {...register("año")}
              placeholder="Año..."
              className="inputForm"
            />
          </div>
        </div>
        <div className="filaInputLink">
          <input
            {...register("linkTrailer")}
            placeholder="Link de trailer..."
            className="inputLinkForm"
          />
        </div>
        <input type="submit" className="btnForm" value="Agregar" />
      </form>
    </div>
  );
};

export default AgregarPelicula;
