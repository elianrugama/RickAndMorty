import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";
function App() {
  const [characters, setCharacters] = useState(null);

  console.log(characters);

  const resApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    console.log(characterApi);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="" className="img-home"></img>
            <button onClick={resApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
