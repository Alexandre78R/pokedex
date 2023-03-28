import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    return (
        <figure>
          {
            pokemon.imgSrc == undefined ?
              <p>???</p>
              : 
              <img src={pokemon.imgSrc}
              alt={pokemon.name}></img>
              }
        </figure>
    )
  }

  console.log(PokemonCard.propTypes.pokemon)

export default PokemonCard;