import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    return (
        <figure>
          {
            pokemon.imgSrc == undefined ?
              <p>???</p>
              : 
              <img src= {pokemon.imgSrc}
              alt={pokemon.name}></img>
              }
        </figure>
    )
  }
  

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  }
export default PokemonCard;