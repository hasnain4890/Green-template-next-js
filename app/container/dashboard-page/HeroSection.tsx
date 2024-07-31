import { Text } from "@/app/sharedComponents";
import Herosectionbg from "@/public/svg/HeroSectionbg";
import HerosectionbgTwo from "@/public/svg/HeroSectionbgTwo";
import Image from "next/image";
import React from "react";
import LeftImage from "../../../public/left.svg";
import RightImage from "../../../public/right.svg";
import TopImage from "../../../public/top.svg";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="pointer-events-none absolute -left-6 -mt-10 select-none">
        <Image src="/Nodeone.svg" width={350} height={350} alt="alt" />
      </div>
      <div className="pointer-events-none md:block hidden absolute right-0 select-none">
        <Herosectionbg />
      </div>
      <div className="pointer-events-none md:hidden block absolute right-0 overflow-hidden select-none ">
        <HerosectionbgTwo />
      </div>
      <div className="w-[91%] py-12 border-2 box222 flex relative z-20 backdrop-blur-xl md:backdrop-blur-lg">
        <div className="w-full md:w-[60%] flex flex-col gap-4 justify-center px-5">
          <Text
            variant="h2"
            className="w-full sm:w-[70%] md:w-[90%] text-center md:text-start text-primary-green font-semibold"
          >
            Unlock the power of DashCoin today!
          </Text>
          <Text variant="body1" className="text-center md:text-start">
            Join the DashCoin community and relutionzie your crypto experience.
          </Text>
          <div className="flex gap-4">
            <div
              className="bg-primary-green transition duration-300 ease-in-out cursor-pointer mt-4 text-center flex items-center justify-center"
              id="one"
            >
              Contact Now
            </div>
            <div
              className="mt-4 text-center transition duration-300 ease-in-out hover:bg-primary-green cursor-pointer flex items-center justify-center"
              id="two"
            >
              Learn More
            </div>
          </div>
        </div>
        <div className="gap-6 items-center w-1/2 md:flex hidden justify-center">
          <div className="w-[80%]">
            <div className="flex flex-col w-[95%] h-[50%] m-auto items-center">
              <div className="animate-fade-down animate-infinite animate-duration-[2000ms] animate-ease-linear">
                <div className="pointer-events-none select-none">
                  <Image src={TopImage} width={225} height={225} alt="alt" />
                </div>
              </div>
            </div>
            <div className="flex justify-center h-[50%] m-auto gap-3 -mt-12">
              <div className="animate-fade-right animate-infinite animate-duration-[2000ms] animate-ease-linear">
                <div className="pointer-events-none select-none">
                  <Image src={LeftImage} width={150} height={150} alt="alt" />
                </div>
              </div>
              <div className="animate-fade-left animate-infinite animate-duration-[2000ms] animate-ease-linear">
                <div className="pointer-events-none select-none">
                  <Image src={RightImage} width={150} height={150} alt="alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
