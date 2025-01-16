import PropTypes from "prop-types";
import Feature from "./Feature";

const PricingOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-red-200 p-5 flex flex-col text-center rounded-lg text-black">
      <h4 className="text-5xl text-blue-500">
        {price}
        <span className="text-xl">/month</span>
      </h4>
      <h2 className="text-3xl font-bold my-5">{name}</h2>
      <div className="text-left flex-grow ps-5">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-blue-400 hover:bg-blue-500 hover:text-white py-2 mt-10 w-full rounded-md">
        Purchase now
      </button>
    </div>
  );
};

PricingOption.propTypes = {
  option: PropTypes.object,
};
export default PricingOption;
