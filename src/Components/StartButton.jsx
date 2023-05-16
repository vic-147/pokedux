import PropTypes from "prop-types";
import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const StartButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return <Button icon={<Icon />} onClick={onClick} />;
};

StartButton.propTypes = {
  isFavorite: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};

export default StartButton;
