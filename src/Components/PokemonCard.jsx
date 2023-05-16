import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StartButton from "./StartButton";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, types, id }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(", ");
  
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return (
    <Card
      size="small"
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite onClick={handleOnFavorite} />}
      style={{
        width: 300,
      }}
    >
      <Meta description={typesString} />
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  types: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default PokemonCard;
