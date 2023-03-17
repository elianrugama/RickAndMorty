import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Nav from "../components/nav";
export default function Episodios() {
  const [episodio, setEpisodio] = useState(null);
  var [paginacione, setPaginacione] = useState(1);

  function paginas() {
    paginacione === 3
      ? console.log("El número mayor a 3 y eso es todo")
      : setPaginacione(paginacione + 1);
  }
  function paginasR() {
    paginacione === 1
      ? console.log("El número es 1 y eso es todo")
      : setPaginacione(paginacione - 1);
  }
  function uno() {
    setPaginacione((paginacione = 1));
  }
  function dos() {
    setPaginacione((paginacione = 2));
  }
  function tres() {
    setPaginacione((paginacione = 3));
  }

  const resApi = async () => {
    const api = await fetch(
      "https://rickandmortyapi.com/api/episode?page=" + paginacione
    );
    const respuesta = await api.json();
    setEpisodio(respuesta.results);
    console.log(respuesta);
  };

  useEffect(() => {
    console.log("esto es un useEffect");
    console.log(paginacione);
    resApi();
  }, [paginacione]);

  return (
    <>
    
      <div>
        <ul>
          <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link
              className={
                window.location.pathname === "/personajes" ? "active" : ""
              }
              to="/personajes"
            >
              PERSONAJES
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/episodios" ? "active" : ""
            }
          >
            <Link to="/episodios">EPISODDIOS</Link>
          </li>
        </ul>
      </div>

      <div className="container-characters">
        {episodio ? (
          episodio.map((episode, index) => (
            <div className="character-container" key={index}>
              <div>
                <h3>{episode.name}</h3>
                <h6>
                  <a href={episode.url}>{episode.episode}</a>
                </h6>
                <p className="text-grey">
                  <span>Fecha: </span>
                  <span>{episode.air_date}</span>
                </p>
                <p className="text-grey">
                  <span>Info: </span>
                  <span>{episode.episode}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>no estas conectado a internet</p>
        )}
      </div>
      {episodio ? (
        <div className="pagination">
          <button className="prev-button" onClick={paginasR}>
            &laquo; Anterior
          </button>
          <button
            onClick={uno}
            color={paginacione === 1 ? "green" : ""}
            className="page-button active"
          >
            1
          </button>
          <button
            onClick={dos}
            className="page-button"
            color={paginacione === 2 ? "green" : ""}
          >
            2
          </button>
          <button
            onClick={tres}
            className="page-button"
            color={paginacione === 3 ? "green" : ""}
          >
            3
          </button>

          <button class="next-button" onClick={paginas}>
            Siguiente &raquo;
          </button>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}
