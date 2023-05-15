import PropTypes from "prop-types";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};

export default PokemonCard;
