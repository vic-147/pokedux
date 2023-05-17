import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          key={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      sprites: PropTypes.shape({
        front_default: PropTypes.string.isRequired,
      }).isRequired,
      types: PropTypes.node.isRequired,
      id: PropTypes.number.isRequired,
      favorite: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
