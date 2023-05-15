import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "antd";
import Searcher from "./Components/Searcher";
import PokemonList from "./Components/PokemonList";
import { getPokemon, getPokemonDetails } from "./Api";
import { setPokemons } from "./actions";
import logo from "./Components/static/logo.svg";
import "./App.css";

function App() {
  // const [pokemons, setPokemons] = useState([]);

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemn = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetailed));
    };

    fetchPokemn();
  }, []);

  return (
    <>
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
