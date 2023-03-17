
import "../App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Personajes from "../pages/Personajes";

import Episodios from "../pages/Episodios";

export default function  Home() {
  const [pag, setPag] = useState(window.location.pathname);
 
  
 useEffect(() => {
    console.log("xd");
    setPag(window.location.pathname)
 },[]);


  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          <div>
            <ul>
              <li className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">HOME</Link> 
              </li>
              
              <li >
                <Link className={pag === "/personajes" ? "active" : ""} to="/personajes">PERSONAJES</Link> 
              </li>
              <li className={window.location.pathname === "/episodios" ? "active" : ""}>
                <Link to="/episodios">EPISODDIOS</Link> 
              </li>
            </ul>
          </div>
          <Routes>
          <Route path="/" element={<Home/>}/>
            
            <Route path="/personajes" element={<Personajes/>}/>
            <Route path="/episodios" element={<Episodios/>}/>
          </Routes>
        </Router>
      </header>
      
    </div>
  );
}


