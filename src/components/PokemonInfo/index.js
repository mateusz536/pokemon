import "./styles.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";

const axios = require("axios");

const PokemonInfo = ({ cards }) => {
  const [pokemon, setPokemon] = useState(undefined);
  const currentLocation = useLocation().pathname;
  const pokemonId = currentLocation.slice(
    currentLocation.indexOf("pokemon/") + 8
  );

  useEffect(() => {
    if (cards.length > 0) {
      setPokemon(cards.find((x) => x.id === pokemonId));
    } else {
      axios
        .get(`https://api.pokemontcg.io/v2/cards/${pokemonId}`, {
          params: {
            "X-Api-Key": "957fcd4c-3a4f-4ba4-bee4-b1cdfab0503d",
          },
        })
        .then((resp) => setPokemon(resp.data.data))
        .catch((err) => setPokemon(undefined));
    }
  }, [pokemonId, cards]);

  return pokemon ? (
    <div className="maininfo">
      {console.log(pokemon)}
      <div className="info">
        <h1>{pokemon.name}</h1>
        <h3>Ablitities: </h3>
        {pokemon.abilities ? pokemon.abilities.map((ab, index) => (
          <div key={index}>
            {ab.name}: <br /> <br />
            {ab.text}
          </div>
        )): <div>
            {pokemon.attacks.map((ab, index) => (
            <div key={index}>
              {ab.name}: <br /> <br />
              {ab.text}
            </div>))}
      </div>}
      </div>
      

      <div className="images">
        <img src={pokemon.images.small} className="pokeimg" alt="small"></img>
      </div>
      <div className="rightinfo">
        <Button variant="contained" color="secondary">
          ⭐
        </Button>
        <h3>Health Points:</h3>
        {pokemon.hp}
        <h3>Rarity: </h3>
        {pokemon.rarity}
      </div>
    </div>
  ) : (
    <h1>No such pokemon</h1>
  );
};

export default PokemonInfo;
