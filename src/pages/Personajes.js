import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Episodios() {
  const [episodio, setEpisodio] = useState(null);
  var [paginacion, setPaginacion] = useState(1);
  
  function paginas(){paginacion ===42 ? console.log("El número mayor a 3 y eso es todo") : setPaginacion(paginacion +1);}
  function paginasR(){paginacion === 1 ? console.log("El número es 1 y eso es todo") : setPaginacion(paginacion - 1) ;}
  function uno(){setPaginacion(paginacion =1)}
  function dos(){setPaginacion(paginacion =2)}
  function tres(){setPaginacion(paginacion =3)}

  const resApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character/?page="+paginacion);
    const respuesta = await api.json();
    setEpisodio(respuesta.results);
    console.log(respuesta);
  };

  useEffect(() => {
    console.log("esto es un useEffect");
    console.log(paginacion);
    resApi();
  }, [paginacion]);

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
    <div className="container-characters">
      {episodio ? (
        
        episodio.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
                <img src={character.image} alt={character.name}/>
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>{character.status==="Alive" ? (
                    <>
                    <span className="Alive"/>Alive
                    </>
                ):(
                    <>
                    <span className="dead"/>Dead
                    </>
                )}</h6>
                <p className="text-grey">
                    <span>Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p className="text-grey">
                    <span>Especie: </span>
                    <span>{character.species}</span>
                </p>
            </div>

          </div>
        ))
      ) : (
        <p>no estas conectado a internet</p>
      )}
       
    </div>
    <div>
      {episodio ?(
        <div className="pagination">
        <button  className="prev-button" onClick={paginasR}>&laquo; Anterior</button>
        <button onClick={uno}className={paginacion===1 ?"page-button active":"page-butto"}>1</button>
        <button onClick={dos}className={paginacion===2 ?"page-button active":"page-butto"}>2</button>
        <button onClick={tres} className={paginacion===3 ?"page-button active":"page-butto"}>{paginacion}</button>
        
        <button class="next-button"  onClick={paginas}>Siguiente &raquo;</button>
      </div>
      
      ):(
        <p></p>
      )}
    </div>
    </>
  );
}
