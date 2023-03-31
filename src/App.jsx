import { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  const [pokemonIndex, setCount] = useState([]);
  const [pokemonPosition, setPosition] = useState(0);
  const [pokemonEvolutionPrev, setPokemonEvolutionPrev] = useState([]);
  const [pokemonEvolutionNext, setPokemonEvolutionNext] = useState([]);
  useEffect(() => {
    // fetch('https://pokebuildapi.fr/api/v1/pokemon')
    // fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500')
    const openPage = async () => {
      await fetch('https://api.pikaserve.xyz/pokemon/all')
      .then(response => response.json())
      .then(data => setCount(data));
    }
    openPage();
  }, []);
  return (
    <div style={{display: "grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr"}}>
      <div style={{gridArea: "1 / 1 / 2 / 2"}}>
        <NavBar pokemonList={pokemonIndex} pokemonPosition={pokemonPosition} setPosition={setPosition} setPokemonEvolutionNext={setPokemonEvolutionNext} setPokemonEvolutionPrev={setPokemonEvolutionPrev}/>
      </div>
      {
      pokemonIndex.length === 0 ?
      ""
      :
      <div style={{gridArea: "1 / 2 / 2 / 3"}}>
        <PokemonCard pokemon={pokemonIndex[pokemonPosition]} pokemonEvolutionNext={pokemonEvolutionNext} pokemonEvolutionPrev={pokemonEvolutionPrev} setPosition={setPosition} setPokemonEvolutionNext={setPokemonEvolutionNext} setPokemonEvolutionPrev={setPokemonEvolutionPrev}/>
      </div>
      }
    </div>
  )
}

export default App;
