import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <TiTick className="text-xl text-blue-500 mr-1" /> {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
