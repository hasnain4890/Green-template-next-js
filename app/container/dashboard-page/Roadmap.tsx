import { Text } from "@/app/sharedComponents";
import GreenCircle from "@/public/svg/GreenCircle";
import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <>
      <div className="px-5 sm:px-16 w-full mt-28">
        <div className="pointer-events-none absolute md:block hidden right-0 -mt-28 select-none">
          <Image src="/Lines.svg" width={140} height={140} alt="alt" />
        </div>
        <div className="pointer-events-none absolute right-0 md:hidden block -mt-28 select-none">
          <Image src="/Lines.svg" width={80} height={80} alt="alt" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-[80%] md:w-[60%]">
          <div className="">
            <Text variant="body1" className="text-primary-green">
              Roadmap
            </Text>
            <Text variant="h2" className="text-primary-green mt-6">
              Discover the benefits of using DashCoin
            </Text>
            <div className="w-full md:w-[66%] mt-6">
              <Text variant="body1" className="">
                Join the DashCoin community and relutionzie your crypto
                experience. Join the DashCoin community and relutionzie your
                crypto experience.
              </Text>
            </div>
          </div>
          <div className="pointer-events-none select-none md:block hidden">
            <Image
              src="/Roadmapcircle.svg"
              width={400}
              height={400}
              alt="alt"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 select-none">
        <Image src="/Nodeone.svg" width={300} height={300} alt="alt" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-auto w-[85%] mt-24 pb-28 place-items-center">
        <div className="pointer-events-none absolute right-0 select-none mt-20">
          <Image src="/Smalldot.svg" width={80} height={80} alt="alt" />
        </div>
        <div className="pointer-events-none md:block hidden absolute animate-pulse left-[48%] select-none ">
          <Image src="/Linedot.svg" width={80} height={80} alt="alt" />
        </div>

        {[0, 1, 2, 3].map((index) => {
          return (
            <div
              className={`w-full backdrop-blur-sm sm:w-[70%] py-12 gradient-border transition duration-500 ease-in-out hover:scale-110 cursor-pointer ${index === 1 || index === 3 ? "mt-0 md:mt-32" : ""} p-4`}
            >
              <div className="flex flex-col w-[80%] m-auto gap-4">
                <Text
                  className="text-start px-4 text-primary-green"
                  variant="body1"
                >
                  Stage 1
                </Text>
                <Text className="text-start px-4" variant="body1">
                  Heading 1
                </Text>
                <div className="flex flex-col gap-2">
                  {[0, 1, 2, 3, 4, 5].map(() => {
                    return (
                      <div className="flex gap-2 items-center">
                        <GreenCircle />
                        <Text variant="body1" className="font-light">
                          Type 1
                        </Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Roadmap;
