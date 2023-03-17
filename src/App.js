
import "./App.css";
import { useState, useEffect } from "react";


import Welcome from "./components/Welcome";
import Hooks from "./components/hooks";
import Inicio from "./components/hookx";
import Contact  from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Personajes from "./pages/Personajes";
import Home from "./pages/home";
import Episodios from "./pages/Episodios";

function App() {
  const [pag, setPag] = useState(window.location.pathname);
  console.log(pag);
 
  
 useEffect(() => {
    console.log("xd");
    setPag(window.location.pathname)
 },[]);


  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile/:name" element={<Profile/>}/>
            <Route path="/personajes" element={<Personajes/>}/>
            <Route path="/episodios" element={<Episodios/>}/>
          </Routes>
        </Router>
      </header>
      
    </div>
  );
}

export default App;
