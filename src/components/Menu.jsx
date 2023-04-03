import { useState, useEffect } from 'react';
import Pagination from './Pagination.jsx';

function Menu ({pokemonList, pokemonPosition, setPosition, setPokemonEvolutionNext, setPokemonEvolutionPrev}) {

    const [currentPage, setCurrentPage] = useState(1);
    // Nombre de produits par page
    const [pokemonPerPage] = useState(36);
  
    // Fonction qui retourne un sous-ensemble de produits en fonction de la page actuelle
    const getCurrentPokemon = () => {
      const indexOfLastPokemon = currentPage * pokemonPerPage;
      const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
      return pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon);
    };
    
    const handleClick = async (pokemon) => {
        if (pokemon.evolution.next == undefined){
            await setPokemonEvolutionNext([]);
          } else {
            let dataEvolutionNext = [];
            for (let i = 0; i < pokemon.evolution.next.length; i++) {
                await fetch(`https://api.pikaserve.xyz/pokemon/${pokemon.evolution.next[i][0]}`)
                .then(response => response.json())
                .then(data => dataEvolutionNext.push(data)); 
            }
            await console.log("dataEvolutionNext", dataEvolutionNext);
            await setPokemonEvolutionNext(dataEvolutionNext);
          }
        if (pokemon.evolution.prev == undefined){
            await setPokemonEvolutionPrev([]);
        } else {
            let dataEvolutionPrev = [];
            for (let i = 0; i < pokemon.evolution.prev.length; i++) {
                if (!isNaN(pokemon.evolution.prev[i])){
                    await fetch(`https://api.pikaserve.xyz/pokemon/${pokemon.evolution.prev[i]}`)
                    .then(response => response.json())
                    .then(data => dataEvolutionPrev.push(data));
                }
            }
            await setPokemonEvolutionPrev(dataEvolutionPrev)
        }
        setPosition(pokemonPosition = pokemon.id-1);
    }

    return (
        <div>
            {getCurrentPokemon().map((pokemon)  => (
            <button style={{width: "50%", fontSize:"1.2rem", }} onClick={() =>handleClick(pokemon)} key={pokemon.name.english}>
                {
                    pokemon.id <= 9 ? 
                    `${pokemon.name.english}#00${pokemon.id}`
                    :
                    pokemon.id <= 99 ?
                    `${pokemon.name.english}#0${pokemon.id}`
                    : 
                    `${pokemon.name.english}#${pokemon.id}`
                }
            </button>
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(pokemonList.length / pokemonPerPage)}
                onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
        </div>
    )
  }

export default Menu;