import PricingOption from "./PricingOption";

const PricingOptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 19.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "1 fitness class per month",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 39.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "Unlimited fitness classes",
        "Access to swimming pool",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 59.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "Unlimited fitness classes",
        "Access to swimming pool",
        "Personal trainer (2 sessions per month)",
        "Access to sauna",
      ],
    },
    {
      id: 4,
      name: "Elite Plan",
      price: 99.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "Unlimited fitness classes",
        "Access to swimming pool",
        "Personal trainer (unlimited sessions)",
        "Access to sauna",
        "Nutrition plan consultation",
      ],
    },
  ];

  return (
    <div className="px-10">
      <h2 className="text-7xl text-center my-5">
        The best pricing at the town!!
      </h2>
      <div className="grid md:grid-cols-3 gap-7">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
