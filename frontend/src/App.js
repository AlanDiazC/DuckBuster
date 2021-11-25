import './App.css';
import {Route, Routes,Link, Outlet} from 'react-router-dom'
import React from 'react';

function Encabezado (){
  return(
    <header>
      <span><Link to="/">Menú</Link></span>
      <span><Link to="/peliculas">Peliculas</Link></span>
    </header>
  );
}

function Menu(){
  return(
    <div className="Menu">
      <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/duckbuster">Duckbuster</Link></span>
      </nav>
      <Outlet />
    </div>
  );
}

function Peliculas(){
  return(
    <div className="Peliculas">Peliculas</div>
  );
}

function Home(){
  return(
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return(
    <div className="Home">
      <h1>About</h1>
    </div>
  );
}

class Duckbuster extends React.Component{
  constructor(){
    super()
    this.state={
      peliculas:null
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/pelis')
      .then(res=>res.json())
      .then(datos=>{
        console.log(datos)
        this.setState({
          datos
        })
      })
  }
  
  render(){
    console.log(this.state)
    return(
      <div className="Duckbuster">
        <h1>Peliculas</h1>
      </div>
    );
  }
}

function Error404(){
  return(
    <div className="Error404">
      <h1> 404 (Not found) </h1>
      <Link to="/"> Ir a la página principal </Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1> DUCKBUSTER</h1>
      <Encabezado/>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="duckbuster" element={<Duckbuster/>}></Route>
        </Route>
        <Route path="/peliculas" element={<Peliculas/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
      <Duckbuster/>
    </div>
  );
}





  

export default App;
