import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { isValueObject } from "immutable";
import { Col, Spin } from "antd";
import Searcher from "./Components/Searcher";
import PokemonList from "./Components/PokemonList";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./App.css";
import logo from "./Components/static/logo.svg";

function App() {
  // const [pokemons, setPokemons] = useState([]);

  const pokemons = useSelector((state) =>
    state.data.pokemons, shallowEqual
  );
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
          <Spin
            spinnign={isValueObject.toString()}
            size="large"
            style={{ marginTop: 60 }}
          />
        </Col>
      ) : (
        <Col>
          <PokemonList pokemons={pokemons} />
        </Col>
      )}
    </>
  );
}

export default App;
