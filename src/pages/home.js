import imageRickMorty from "../img/rick-morty.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
export default function Home(){
    
        const [buscador, setBuscador] = useState();
      
        function cambiar(event){
          setBuscador(event.target.value);
        }
      


    return (
      <>
        <div>
            <ul>
              <li className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">HOME</Link> 
              </li>
              
              <li >
                <Link className={window.location.pathname === "/personajes" ? "active" : ""} to="/personajes">PERSONAJES</Link> 
              </li>
              <li className={window.location.pathname === "/episodios" ? "active" : ""}>
                <Link to="/episodios">EPISODDIOS</Link> 
              </li>
            </ul>
          </div>
        <div>
            <div>
          <h1>Rick and Morty</h1>
          <input className="text" placeholder="buscar aqui" onChange={cambiar} />
          <p>{buscador}</p>
          <img src={imageRickMorty} alt="" className="img-home"></img>

        </div>
        </div>

        </>
    );

};