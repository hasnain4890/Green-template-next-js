import { Text } from "@/app/sharedComponents";
import RightArrowTwo from "@/public/svg/RightArrowTwo";
import React, { useState } from "react";

const HowToBuy = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-6 sm:px-16 w-full mt-20 md:mt-56">
      <div>
        <Text variant="body1" className="text-primary-green px-2">
          How to buy
        </Text>
        <Text
          variant="h2"
          className="text-primary-green w-full md:w-[40%] mt-6"
        >
          AI-Powered solutions for your crypto edge
        </Text>
        <div className="w-full md:w-[46%] mt-6">
          <Text variant="body1" className="">
            Join the DashCoin community and revolutionize your crypto
            experience. Join the DashCoin community and revolutionize your
            crypto experience.
          </Text>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 m-auto items-center justify-center mt-20">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-full md:w-[25%] h-24 cursor-pointer mt-4 text-center flex items-center justify-center"
            id="buy"
          >
            <div className="w-[35%] bg-[#277d4a] h-full flex items-center justify-center">
              <RightArrowTwo />
            </div>
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-[65%] bg-[#081617] h-full flex items-center justify-center"
            >
              {hoveredIndex === index ? (
                <Text
                  variant="defualt"
                  className="text-primary-green font-light text-xs leading-relaxed animate-fade-down"
                >
                  Join the DashCoin community and revolutionize your crypto
                  experience. Join the DashCoin
                </Text>
              ) : (
                <Text variant="p">Connect Wallet</Text>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToBuy;
