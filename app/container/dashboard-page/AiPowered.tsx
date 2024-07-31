import { Text } from "@/app/sharedComponents";
import React from "react";
import Slider from "./Slider";
import Image from "next/image";

const AiPowered = () => {
  return (
    <>
      <div className="px-4 sm:px-16 w-full mt-24">
        <div>
          <Text variant="body1" className="text-primary-green">
            About Us
          </Text>
          <Text
            variant="h2"
            className="text-primary-green w-full md:w-[40%] mt-6"
          >
            AI-Powered solutions for your crypto edge
          </Text>
          <div className="pointer-events-none absolute left-0 md:block -mt-36 hidden z-0 select-none">
            <Image
              src="/Halfcircletwo.svg"
              width={350}
              height={350}
              alt="alt"
            />
          </div>
          <div className="w-full sm:w-[46%] mt-6">
            <Text variant="body1" className="">
              Join the DashCoin community and relutionzie your crypto
              experience. Join the DashCoin community and relutionzie your
              crypto experience.
            </Text>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute md:block hidden right-0 mt-20 z-0 select-none">
        <Image src="/Halfcircleone.svg" width={400} height={400} alt="alt" />
      </div>

      <div className="flex items-center justify-center mt-1 m-auto">
        <Slider />
      </div>
    </>
  );
};

export default AiPowered;
