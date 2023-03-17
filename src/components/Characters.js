import { Link } from "react-router-dom";

export default function Characters(props) {
  
  const { characters,setCharacters } = props;
  
  
  return (
    <div className="characters">

      <h1>personajes</h1>
      
      <Link className="back-home" to="/" >Volver a home</Link>
      <div className="container-characters">
        {characters.map((character, index) => (
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
        ))}
      <div>

      </div>
      </div>
      <Link className="back-home" to="/" >Volver a home</Link>
    </div>
  );
}
