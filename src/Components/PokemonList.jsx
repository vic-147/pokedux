import PropTypes from 'prop-types';
import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.node.isRequired,
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;