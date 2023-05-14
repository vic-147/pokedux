import { Col } from "antd";
import Searcher from "./Components/Searcher";
import PokemonList from "./Components/PokemonList";
import "./App.css";

function App() {
  return (
    <>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </>
  );
}

export default App;
