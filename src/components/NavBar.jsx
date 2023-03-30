import { useEffect } from 'react'

function NavBar ({pokemonList, pokemonIndex, setCount}) {

    const handleClickMore = () => {
        setCount(pokemonIndex - 1);
        // console.log("hangleclickMore", pokemonList[pokemonIndex-1].name);
        if (pokemonList[pokemonIndex-1].name === "pikachu") {
            alert("pika pikachu !!!");
        }
    }
    
    const handleClickless = () => {
        setCount(pokemonIndex + 1);
        // console.log("handleClickless", pokemonList[pokemonIndex+1].name);
        if (pokemonList[pokemonIndex+1].name === "pikachu") {
            alert("pika pikachu !!!");
        }
    }

    return (
        <div>
            {
            pokemonIndex === 0 ?
            ""
            :
            <button onClick={handleClickMore}>Précédent</button>
            }
            {
                pokemonIndex === (pokemonList.length-1) ?
                ""
                :
                <button onClick={handleClickless}>Suivant</button>
            }
        </div>
    )
  }
export default NavBar;