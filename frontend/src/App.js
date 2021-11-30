import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import Pelicula from "./Pelicula";
import ModifPelicula from "./ModifPelicula";
import BorrarPelicula from "./BorrarPelicula";
import PostPelicula from "./PostPelicula";
import ModifInvetario from "./ModifcInventario";
import Navbar from "./navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/modificarInventario" element={<ModifInvetario />}></Route>
        <Route path="/modificarPelicula" element={<ModifPelicula />}></Route>
        <Route path="/borrarPelicula" element={<BorrarPelicula />}></Route>
        <Route path="/agregarPelicula" element={<PostPelicula />}></Route>
        <Route path="/ver/:idPeli" element={<Pelicula />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
