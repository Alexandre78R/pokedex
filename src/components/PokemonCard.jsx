// import PropTypes from "prop-types";
import colors from "../color.js";
import { useEffect } from 'react';

function PokemonCard({ pokemon, pokemonEvolutionNext, pokemonEvolutionPrev, setPosition, setPokemonEvolutionNext, setPokemonEvolutionPrev}) {
  
  // const [poke, setPoke] = useState([]);
  console.log("pokemon", pokemon);
  const switchPokemon = async (pagination, position) => {
      if (pagination) {
        if(pokemonEvolutionNext[position].evolution.prev == undefined) {
          await setPokemonEvolutionPrev([]);
        } else {
          let dataEvolutionNextPrev = [];
          for (let i = 0; i < pokemonEvolutionNext[position].evolution.prev.length; i++) {
            if (!isNaN(pokemonEvolutionNext[position].evolution.prev[i])){
              await fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionNext[position].evolution.prev[i]}`)
              .then(response => response.json())
              .then(data => dataEvolutionNextPrev.push(data)); 
            } 
          }
          await setPokemonEvolutionPrev(dataEvolutionNextPrev);
        }
        if(pokemonEvolutionNext[position].evolution.next == undefined) {
          await setPokemonEvolutionNext([]);
        } else {
          let dataEvolutionNextNext =  [];
          for (let i = 0; i < pokemonEvolutionNext[position].evolution.next.length; i++) {
            await fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionNext[position].evolution.next[i][0]}`)
            .then(response => response.json())
            .then(data => dataEvolutionNextNext.push(data)); 
          }
          await setPokemonEvolutionNext(dataEvolutionNextNext);
        }
        await setPosition(pokemonEvolutionNext[position].id-1);
      } else {
        if(pokemonEvolutionPrev[position].evolution.prev == undefined) {
          await setPokemonEvolutionPrev([]);
        } else {
          let dataEvolutionPrevPrev = [];
          for (let i = 0; i < pokemonEvolutionPrev[position].evolution.prev.length; i++) {
            if (!isNaN(pokemonEvolutionPrev[position].evolution.prev[i])){
              await fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionPrev[position].evolution.prev[i]}`)
              .then(response => response.json())
              .then(data => dataEvolutionPrevPrev.push(data)); 
            }
          }
          await setPokemonEvolutionPrev(dataEvolutionPrevPrev);
        }
        if(pokemonEvolutionPrev[position].evolution.next == undefined) {
          await setPokemonEvolutionNext([]);
        } else {
          let dataEvolutionPrevNext = [];
          for (let i = 0; i < pokemonEvolutionPrev[position].evolution.next.length; i++) {
            await fetch(`https://api.pikaserve.xyz/pokemon/${pokemonEvolutionPrev[position].evolution.next[i][0]}`)
            .then(response => response.json())
            .then(data => dataEvolutionPrevNext.push(data));  
          }
          await setPokemonEvolutionNext(dataEvolutionPrevNext);
        }
        await setPosition(pokemonEvolutionPrev[position].id-1);
      }
    }

    useEffect(() => {
      const searchDataPokemon = async () => {
        await fetch(pokemon.url)
        .then(response => response.json())
        .then(data => setCount(data));
      }
      searchDataPokemon();
      const searchDataEvolution = async () => {
        if (pokemon.evolution.prev !== undefined) {
          if (pokemon.evolution.prev.length !== 0) {
            let dataEvolutionPrev = [];
            for (let i = 0; i < pokemon.evolution.prev.length; i++) { 
              await fetch(`https://api.pikaserve.xyz/pokemon/${pokemon.evolution.prev[i]}`)
              .then(response => response.json())
              .then(data => dataEvolutionPrev.push(data)); 
            }
            await setPokemonEvolutionPrev(dataEvolutionPrev);
          }
        }
        if (pokemon.evolution.next !== undefined) {
          let dataEvolutionNext = [];
          for (let i = 0; i < pokemon.evolution.next.length; i++) {
            await fetch(`https://api.pikaserve.xyz/pokemon/${pokemon.evolution.next[i][0]}`)
              .then(response => response.json())
              .then(data => dataEvolutionNext.push(data)); 
          }
          await setPokemonEvolutionNext(dataEvolutionNext);
        } 
      }
      searchDataEvolution();
    }, []);
    // const test = () => {
      // const searchDataPokemon = async () => {
      //   await fetch(pokemon.url)
      //   .then(response => response.json())
      //   .then(data => console.log(data));
      // }
      // searchDataPokemon();
    // }
    return (
      // <p>ss</p>
      // <button onClick={() => searchDataPokemon()}>Test</button>
        <figure style={{backgroundColor : colors[pokemon.type[0]], borderRadius: 10, marginTop : -30}}>
        {
          pokemon.image.thumbnail == undefined ?
            <p>???</p>
            :
            <div>
              <div style={{fontSize:"200%", backgroundColor:"white", borderRadius: 10, color: colors[pokemon.type[0]]}}>
                <h3>{pokemon.name.english} - {pokemon.name.french} - {pokemon.name.chinese} - {pokemon.name.japanese} <img style={{marginBottom : -5}} src={pokemon.image.sprite}
                alt={pokemon.name.english}></img></h3>
              </div>
              <img style={{backgroundColor: "White", borderRadius: "100%", padding : "2rem", height:"150px"}} src={pokemon.image.thumbnail}
              alt={pokemon.name.english}></img>
              <div style={{display: "grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr"}}>
                <div style={{gridArea: "1 / 1 / 2 / 2"}}>
                <div>
                  { pokemon.base == undefined ?
                  ""
                  :
                  <div>
                    <p style={{fontSize:"150%",margin:0, display:"flex", padding: "2rem", marginLeft : -15, marginBottom: -30, marginTop: -1}}>Bases stats :</p>
                    <ul style={{margin:0,marginLeft : -150}}>
                      <p style={{fontSize:"120%"}}>Attack : {pokemon.base.Attack}</p>
                      <p style={{fontSize:"120%"}}>Defense : {pokemon.base.Defense}</p>
                      <p style={{fontSize:"120%"}}>HP : {pokemon.base.HP}</p>
                      <p style={{fontSize:"120%"}}>Speed : {pokemon.base.Speed}</p>
                    </ul>
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
                </div>
                <div style={{gridArea: "1 / 2 / 2 / 3"}}>
                  { pokemonEvolutionNext.length === 0 && pokemonEvolutionPrev.length === 0 ? 
                    ""
                    :
                    <p style={{fontSize:"150%",margin:0, display:"flex", padding: "2rem", marginLeft : -15}}>Evolution :</p>
                  }
                <div>
                  { pokemonEvolutionPrev.length === 0 ? 
                  ""
                  :
                  <p style={{fontSize:"120%",margin:0, marginRight: 100}}>Evolution Previou :</p>
                  }
                  <div style={{display: "flex", flexWrap: "wrap"}}>
                    { pokemonEvolutionPrev.length === 0 ?
                    ""
                    : 
                    pokemonEvolutionPrev.map((pokemon, i) => 
                      <div onClick={() => switchPokemon(false, i)}>
                        <img style={{marginBottom : -5, margin:0}} src={pokemon.image.sprite}
                        alt={pokemon.name.english}></img> 
                        <p style={{mdargin:0, display:"flex", marginLeft : 15, marginTop : -10}}>{pokemon.name.english}</p>
                      </div>
                    )}
                  </div>
                  { pokemonEvolutionNext.length === 0 ? 
                  ""
                  :
                  <p style={{fontSize:"120%",margin:0, marginRight: 120}}>Evolution Next:</p>
                  }
                  <div style={{display: "flex", flexWrap: "wrap"}}>
                    { pokemonEvolutionNext.length === 0 ?
                    ""
                    :
                      pokemonEvolutionNext.map((pokemon, i) =>
                        <div onClick={() => switchPokemon(true, i)} >
                          <img style={{marginBottom : -5, margin:0, display:"flex", marginLeft : 15}} src={pokemon.image.sprite}
                          alt={pokemon.name.english}></img>
                          <p style={{margin:0, display:"flex", marginLeft : 15, marginBottom : 10}}>{pokemon.name.english}</p>
                        </div>
                    )}
                  </div>
                </div>
                </div>
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