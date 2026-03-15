import React from "react";
import PricingCard from "./PricingCard";

const PricingOption = ({ prices }) => {
  return (
    <div>
      <h1 className="text-4xl">Get Our Membership</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 bg-blue-100 md:p-7 p-4 gap-5">
        {prices.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>

    </div>
  );
};

export default PricingOption;
