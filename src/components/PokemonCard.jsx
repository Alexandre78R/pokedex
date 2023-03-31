// import PropTypes from "prop-types";
import colors from "../color.js";

function PokemonCard({ pokemon, pokemonEvolutionNext, pokemonEvolutionPrev, setPosition, setPokemonEvolutionNext, setPokemonEvolutionPrev}) {

    // console.log('pokemon', pokemon);
    // console.log('pokemonEvolutionNext', pokemonEvolutionNext);
    // console.log('pokemonEvolutionPrev', pokemonEvolutionPrev);
    const switchPokemon = (pagination) => {
      if (pagination) {
        if(pokemonEvolutionNext.evolution.prev == undefined) {
          setPokemonEvolutionPrev([]);
        } else {
          fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionNext.evolution.prev[0]}`)
          .then(response => response.json())
          .then(data => setPokemonEvolutionPrev(data)); 
        }
        if(pokemonEvolutionNext.evolution.next == undefined) {
          setPokemonEvolutionNext([]);
        } else {
          fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionNext.evolution.next[0][0]}`)
          .then(response => response.json())
          .then(data => setPokemonEvolutionNext(data)); 
        }
        setPosition(pokemonEvolutionNext.id-1);
      } else {
        if(pokemonEvolutionPrev.evolution.prev == undefined) {
          setPokemonEvolutionPrev([]);
        } else {
          fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionPrev.evolution.prev[0]}`)
          .then(response => response.json())
          .then(data => setPokemonEvolutionPrev(data)); 
        }
        if(pokemonEvolutionPrev.evolution.next == undefined) {
          setPokemonEvolutionNext([]);
        } else {
          fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionPrev.evolution.next[0][0]}`)
          .then(response => response.json())
          .then(data => setPokemonEvolutionNext(data)); 
        }
        setPosition(pokemonEvolutionPrev.id-1);
      }
    }

    return (
        <figure style={{backgroundColor : colors[pokemon.type[0]], borderRadius: 10,}}>
        {
          pokemon.image.thumbnail == undefined ?
            <p>???</p>
            :
            <div>
              <div style={{fontSize:"200%", backgroundColor:"white", borderRadius: 10, color: colors[pokemon.type[0]]}}>
                <h3>{pokemon.name.english} - {pokemon.name.french} - {pokemon.name.chinese} - {pokemon.name.japanese} <img style={{marginBottom : -5}} src={pokemon.image.sprite}
                alt={pokemon.name.english}></img></h3>
              </div>
              <img style={{backgroundColor: "White", borderRadius: "50%", height:"150px", padding:"1rem"}} src={pokemon.image.thumbnail}
              alt={pokemon.name.english}></img>
              <div>
                { pokemon.base == undefined ?
                ""
                :
                <div>
                  <p style={{fontSize:"150%",margin:0, display:"flex", padding: "2rem", marginLeft : -15}}>Bases stats :</p>
                  <p style={{fontSize:"120%",margin:0, display:"flex", marginTop:-20, marginLeft : 15}}>Attack : {pokemon.base.Attack} - Defense : {pokemon.base.Defense} - HP : {pokemon.base.HP} - Speed : {pokemon.base.Speed}</p>
                </div>
                }
              </div>
              <div>
                { pokemon.profile == undefined ?
                ""
                :
                <div>
                  <p style={{fontSize:"150%",margin:0, display:"flex", padding: "2rem", marginLeft : -15}}>Information Profile :</p>
                  <p style={{fontSize:"120%",margin:0, display:"flex", marginTop:-20, marginLeft : 15}}>Heigth : {pokemon.profile.height} - Weight : {pokemon.profile.weight}</p>
                </div>
                }
              </div>
              <div>
              {
                
              }
              { pokemonEvolutionNext.length === 0 && pokemonEvolutionPrev.length === 0 ? 
                ""
                :
                <p style={{fontSize:"150%",margin:0, display:"flex", padding: "2rem", marginLeft : -15}}>Evolution :</p>
              }
              { pokemonEvolutionPrev.length === 0 ?
              ""
              :
              <div onClick={() => switchPokemon(false)}>
                <p style={{fontSize:"120%",margin:0, display:"flex", marginTop:-20, marginLeft : 15}}>Evolution Previou :</p>
                <img style={{marginBottom : -5, margin:0, display:"flex", marginLeft : 15}} src={pokemonEvolutionPrev.image.sprite}
                alt={pokemonEvolutionPrev.name.english}></img> 
                <p style={{margin:0, display:"flex", marginLeft : 15, marginBottom : 10}}>{pokemonEvolutionPrev.name.english}</p>
              </div>
              }
              { pokemonEvolutionNext.length === 0 ?
              ""
              :
              <div onClick={() => switchPokemon(true)}>
                <p style={{fontSize:"120%",margin:0, display:"flex", marginTop:-10, marginLeft : 15}}>Evolution Next :</p>
                <img style={{marginBottom : -5, margin:0, display:"flex", marginLeft : 15}} src={pokemonEvolutionNext.image.sprite}
                alt={pokemonEvolutionNext.name.english}></img>
                <p style={{margin:0, display:"flex", marginLeft : 15, marginBottom : 10}}>{pokemonEvolutionNext.name.english}</p>
              </div>
              }
              </div>
              <p style={{display: "flex", fontSize:"140%", backgroundColor:"white", borderRadius: 10, color: colors[pokemon.type[0]], fontWeight:"bold"}}>{pokemon.description}</p>
            </div>
        }
      </figure>
    )
  }

  // PokemonCard.propTypes = {
  //   pokemon: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //   }).isRequired
  // }

export default PokemonCard;