import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BorrarPelicula = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8080/postBorrarPelicula", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        genero: data.genero,
        director: data.director,
      }),
    }).then((response) => console.log(response));
  };

  return (
    <div className="pantalla">
      <h1 className="titulo">Eliminar película</h1>
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
              {...register("genero")}
              placeholder="Género..."
              className="inputForm"
            />
          </div>
        </div>
        <div>
          <div className="filaInput">
            <input
              {...register("director")}
              placeholder="Director..."
              className="inputForm"
            />
          </div>
        </div>
        <input type="submit" className="btnForm" value="Eliminar" />
      </form>
    </div>
  );
};

export default BorrarPelicula;
