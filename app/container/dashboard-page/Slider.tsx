import React, { useEffect, useState } from "react";
import "./style.css";
import { Text } from "@/app/sharedComponents";
import { SLIDES_DATA } from "@/constants/constant";

const Slider = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(0);
  };

  return (
    <div className="w-screen">
      <div className="accordion w-[90%] md:w-[60%] h-[29rem] py-10">
        {SLIDES_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={`box a1 border-0.5 border-primary-green h-[24rem] backdrop-blur-lg ${
                index === expandedIndex ? "expanded box222" : "bg-[#2a9255]"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-row-reverse md:flex-col justify-between items-center gap-2 md:gap-32 md:absolute p-4">
                <div>
                  <Text
                    variant="body1"
                    className="text-light text-secondary-green font-bold"
                  >
                    {item.id}
                  </Text>
                </div>
                <div>
                  <Text
                    variant="body1"
                    className="text-light vertical-text normal-text text-secondary-green font-bold"
                  >
                    {item.title}
                  </Text>
                </div>
              </div>
              <div className="image_1 flex">
                <div className="text">
                  <Text
                    variant="h3"
                    className="text-primary-green px-2 md:px-20"
                  >
                    {item.heading}
                  </Text>
                  <Text variant="body1" className="font-light px-2 md:px-20">
                    {item.desc}
                  </Text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
