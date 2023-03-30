import PropTypes from "prop-types";

function NavBar ({pokemonList, pokemonIndex, setCount}) {

    const handleClickMore = () => {
        // setCount(c)
        setCount(pokemonIndex - 1);
      }
    
      const handleClickless = () => {
        setCount(pokemonIndex + 1);
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