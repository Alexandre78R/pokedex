import { useEffect } from 'react'

function NavBar ({pokemonList, pokemonIndex, setCount}) {

    const mortCreatePersonQuete = (position) => {
        setCount(pokemonIndex = position);
    }

    return (
        <div>
            {
                pokemonList.map((pokemon, i) =>
                    <button onClick={() =>mortCreatePersonQuete(i)} key={pokemon.name}>{pokemon.name}</button>
                )
            }
        </div>
    //     <div>
    //         {
    //         pokemonIndex === 0 ?
    //         ""
    //         :
    //         <button onClick={handleClickMore}>Précédent</button>
    //         }
    //         {
    //             pokemonIndex === (pokemonList.length-1) ?
    //             ""
    //             :
    //             <button onClick={handleClickless}>Suivant</button>
    //         }
    //     </div>
    )
  }
export default NavBar;