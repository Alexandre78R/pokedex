import { useState, useEffect } from 'react';

function NavBar ({pokemonList, pokemonPosition, setPosition, setPokemonEvolutionNext, setPokemonEvolutionPrev}) {

    const handleClick = (pokemon, position) => {
        if (pokemon.evolution.next == undefined){
            setPokemonEvolutionNext([]);
          } else {
            fetch(`https://api.pikaserve.xyz/pokemon/${pokemon.evolution.next[0][0]}`)
            .then(response => response.json())
            .then(data => setPokemonEvolutionNext(data)); 
          }
        if (pokemon.evolution.prev == undefined){
            setPokemonEvolutionPrev([]);
        } else {
        fetch(`https://api.pikaserve.xyz/pokemon/${pokemon.evolution.prev[0]}`)
        .then(response => response.json())
        .then(data => setPokemonEvolutionPrev(data)); 
        }
        setPosition(pokemonPosition = position);
    }

    return (
        <div>
            {
                pokemonList.map((pokemon, i) =>
                    <button style={{width: "33%", fontSize:"1.5rem"}} onClick={() =>handleClick(pokemon, i)} key={pokemon.name.english}>{pokemon.name.english}</button>
                )
            }
        </div>
    )
  }
export default NavBar;