import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Spin } from "antd";
import Searcher from "./Components/Searcher";
import PokemonList from "./Components/PokemonList";
import { getPokemon } from "./Api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./Components/static/logo.svg";
import "./App.css";

function App() {
  // const [pokemons, setPokemons] = useState([]);

  const pokemons = useSelector((state) => state.get("pokemons")).toJS();
  const loading = useSelector((state) => state.get("loading"));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemn = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinnign size="large" style={{ marginTop: 60 }} />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}

export default App;
