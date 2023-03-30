import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  const [pokemonIndex, setCount] = useState(0)


  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
  ];
  return (
    <div>
      <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setCount={setCount}/>
      <PokemonCard  pokemon={pokemonList[pokemonIndex]}/>
    </div>
  )
}

export default App;
