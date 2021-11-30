import React, { useEffect, useState } from "react";
import "./css/pantallas.css";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventario: [],
      peliculas: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchCatalogo();
    this.fetchPeliculas();
  }

  fetchCatalogo = async () => {
    const fetchData = await fetch("http://localhost:8080/getCatalogo")
      .then((res) => res.json())
      .then((pelis) => {
        //console.log(pelis);
        this.setState({
          inventario: pelis,
          isLoaded: true,
        });
        //console.log(this.state.inventario);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchPeliculas = async () => {
    const fetchData = await fetch("http://localhost:8080/getPeliculas")
      .then((res) => res.json())
      .then((pelis) => {
        this.setState({
          peliculas: pelis,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { inventario, isLoaded, peliculas } = this.state;
    if (!isLoaded) {
      return <h1>No hay peliculas registradas</h1>;
    } else {
      return (
        <div className="pantalla">
          <div style={{ display: "inline-block", marginTop: "10px" }}>
            {inventario.map((catalogo) => (
              <div>
                <ul key={catalogo} className="lista">
                  <span className="textoHomepage">
                    Cantidad en inventario: {catalogo.cantidad} -
                  </span>
                  <span className="textoHomepage">
                    Cantidad vendida: {catalogo.vendidos}
                  </span>
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display: "inline-block", marginTop: "10px" }}>
            {peliculas.map((pelicula) => (
              <div>
                <ul key={pelicula} className="lista">
                  <span className="textoHomepage">
                    Nombre: {pelicula.nombre} -
                  </span>
                  <span className="textoHomepage">
                    Genero: {pelicula.genero} -{" "}
                  </span>
                  <span className="textoHomepage">
                    Director: {pelicula.director}
                  </span>
                  <a href={"/ver/" + pelicula._id} className="btn btnVer">
                    Ver datos
                  </a>
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

// const Homepage = () => {
//   const [catalogo, setCatalogo] = useState();
//   const [peli, setPeli] = useState();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     fetch("http://localhost:8080/getCatalogo")
//       .then((res) => res.json())
//       .then((data) => setCatalogo(data));
//   }

//     async function fetchPelicula(id) {
//       fetch("http://localhost:8080/verDatosPelicula" + id)
//         .then((res) => res.json())
//         .then((data) => setPeli(data));
//     }

//   return (
//     <ul>
//       <h2>{catalogo[0].idPeli}</h2>
//       {catalogo.map((pelicula) => (
//         <div>
//           <span>{pelicula.idPeli}</span>
//           <span>C {pelicula.cantidad}</span>
//           <span>V {pelicula.vendidos}</span>
//         </div>
//       ))}
//     </ul>
//   );
// };

export default Homepage;
