import React from "react";
import { useForm } from "react-hook-form";
import "./css/pantallas.css";

const ModifInventario = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8080/postModificarInventario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        genero: data.genero,
        director: data.director,
        cantidad: data.cantidad,
        vendidos: data.vendidos,
      }),
    }).then((response) => console.log(response));
  };

  return (
    <div className="pantalla">
      <h1 className="titulo">Modificar inventario</h1>
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
          <div className="filaInput">
            <input
              {...register("director", { required: true })}
              placeholder="Director..."
              className="inputForm"
            />
          </div>
        </div>
        <div>
          <div className="filaInput">
            <input
              {...register("cantidad", { required: true })}
              placeholder="Cantidad en inventario"
              className="inputForm"
            />
          </div>
          <div className="filaInput">
            <input
              {...register("vendidos", { required: true })}
              placeholder="Cantidad vendida"
              className="inputForm"
            />
          </div>
        </div>
        <input type="submit" className="btnForm" value="Enviar cambios" />
      </form>
    </div>
  );
};

export default ModifInventario;
