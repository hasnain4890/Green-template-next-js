import { Text } from "@/app/sharedComponents";
import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="w-full mt-24">
        <Text variant="body1" className="text-primary-green px-3 sm:px-16">
          Tokenomics
        </Text>
        <div className="w-[95%] flex mt-4 flex-col md:flex-row items-center gap-5 md:gap-20 justify-center m-auto">
          <div className="w-full md:w-[28%] box222 border border-primary-green p-9 z-10 backdrop-blur-lg px-4 md:px-5 lg:px-10">
            <Text
              variant="h4"
              className="text-primary-green text-start mb-5 mt-7"
            >
              Token Distribution
            </Text>
            <Text variant="body1">
              Join the DashCoin community and relutionzie your crypto
              experience. Join the DashCoin community and relutionzie your
              crypto experience.
            </Text>
          </div>
          <div className="pointer-events-none absolute z-0 select-none md:hidden block right-0 -mt-36 sm:mt-24">
            <Image src="/Circletwo.svg" width={140} height={140} alt="alt" />
          </div>
          <div className="flex flex-col gap-8 w-[80%] relative z-10 md:w-[28%] justify-center">
            {[0, 1, 2].map(() => {
              return (
                <div className="h-10 border-0.5 border-primary-green flex items-center justify-center backdrop-blur-lg">
                  <div className="w-1/2 bg-dark-green h-full flex px-4 items-center">
                    <Text variant="body1" className="text-primary-green">
                      Buy/Sell Tax
                    </Text>
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-center">
                    50%
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-8 w-[80%] md:w-[28%] justify-center mt-10">
            {[0, 1, 2].map(() => {
              return (
                <div className="h-10 border-0.5 border-primary-green flex items-center justify-center">
                  <div className="w-1/2 bg-dark-green h-full flex px-4 items-center">
                    <Text variant="body1" className="text-primary-green">
                      Total Supply
                    </Text>
                  </div>

                  <div className="w-1/2 h-full flex items-center justify-center">
                    50%
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pointer-events-none absolute z-0 select-none md:block hidden left-[25%] mt-96">
            <Image
              src="/Circle.svg"
              className="rotate"
              width={200}
              height={200}
              alt="alt"
            />
          </div>
        </div>
        <div className="animate-pulse pointer-events-none absolute hidden md:block z-0 right-0 select-none -mt-28">
          <Image src="/Blockchainnode.svg" width={600} height={600} alt="alt" />
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
