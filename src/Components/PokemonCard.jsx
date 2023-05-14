import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = () => {
  return (
    <Card
      title="pipip"
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt="pipip"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
