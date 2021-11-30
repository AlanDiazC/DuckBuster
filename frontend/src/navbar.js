import React, { useRef, useState, useEffect } from "react";
import Duckbuster from "./multimedia/Duckbuster.png";
import Perfil from "./multimedia/perfil.png";
import "./css/navbar.css";

const Navbar = () => {
  return (
    // <div>
    //   <div className="nav">
    //     {/*apartado del boton del menu extra*/}
    //     <div className="navMenu">
    //       <img onClick={onClick} src={Duckbuster} className="navMenuImg" />
    //     </div>
    //     <div className="navDLogo">
    //       <a href="/">
    //         <img src={logo} className="navLogo" />
    //       </a>
    //     </div>
    //     <div className="navDerecha">
    //       <a onClick={insta}>
    //         <img src={instaColor} className="navInstaColor" />
    //       </a>
    //     </div>
    //   </div>

    // </div>
    <div className="nav">
      <img src={Duckbuster} className="navLogo" />
      <div className="navTexto">
        <a href="/">Inventario</a>
        <a href="/modificarInventario">Modificar inventario</a>
        <a href="/agregarPelicula">Agregar película</a>
        <a href="/BorrarPelicula">Eliminar película</a>
        <a href="/modificarPelicula">Modificar película</a>
      </div>
      <img src={Perfil} className="navPerfil" />
    </div>
  );
};

export default Navbar;
