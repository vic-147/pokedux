import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          key={pokemon.name}
        />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.node.isRequired,
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
