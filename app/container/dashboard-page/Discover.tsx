import { Text } from "@/app/sharedComponents";
import ResourcesIcon from "@/public/svg/ResourcesIcon";
import Image from "next/image";
import React, { useState } from "react";

const Discover = () => {
  const [showCards, setShowCards] = useState(false);
  return (
    <>
      <div className="px-4 sm:px-16 -mt-10 sm:mt-0">
        <Text variant="body1" className="text-primary-green">
          Features
        </Text>
        <div className="pointer-events-none absolute right-0 hidden sm:block select-none">
          <Image src="/Nodetwo.svg" width={350} height={350} alt="alt" />
        </div>
        <Text
          variant="h2"
          className="text-primary-green w-full sm:w-[50%] mt-6"
        >
          Discover The Features Of Using Dash Coins
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center m-auto gap-5  w-[90%] sm:[80%] lg:w-[70%] mt-20">
        {[0, 1, 2].map(() => {
          return (
            <div className="gradient-border cursor-pointer py-10 w-[90%] transition duration-500 ease-in-out hover:scale-110 p-4">
              <div className="flex justify-end items-end">
                <ResourcesIcon />
              </div>
              <Text variant="p" className="font-semibold mt-20 text-start mb-4">
                Title
              </Text>
              <Text variant="body1" className="font-light text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                est molestiae reicistias, quaerat cum dicta voluptatum rerum
              </Text>
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute left-0 hidden sm:block select-none">
        <Image src="/Smalldot.svg" width={60} height={60} alt="alt" />
      </div>
      <div className="pointer-events-none absolute hidden sm:block right-0 mt-20 select-none">
        <Image src="/Bigdot.svg" width={80} height={80} alt="alt" />
      </div>
      <div
        id="two"
        className="flex items-center justify-center mt-20 sm:hidden m-auto"
        onClick={() => setShowCards(!showCards)}
      >
        Expolore More
      </div>
      <div
        className={` ${!showCards ? "hidden" : "grid animate-flip-down"} sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center m-auto gap-5  w-[90%] sm:[80%] lg:w-[70%] mt-20 relative z-20`}
      >
        {[0, 1, 2].map(() => {
          return (
            <div className="gradient-border cursor-pointer py-10 w-[90%] transition duration-500 ease-in-out hover:scale-110 p-4">
              <div className="flex justify-end items-end">
                <ResourcesIcon />
              </div>
              <Text variant="p" className="font-semibold mt-20 text-start mb-4">
                Title
              </Text>
              <Text variant="body1" className="font-light text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                est molestiae reicistias, quaerat cum dicta voluptatum rerum
              </Text>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Discover;
