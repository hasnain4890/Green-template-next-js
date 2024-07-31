import { Text } from "@/app/sharedComponents";
import { BUSINESSES, PRODUCTS, SOCIAL_MEDIA_ICON } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="pointer-events-none absolute left-[22%] sm:left-[30%] md:left-[40%] z-0 -mt-32 select-none">
        <Image src="/Linedown.svg" width={250} height={250} alt="alt" />
      </div>
      <div className="w-full relative z-50 bg-[#070a0f]">
        <div className="w-[72%] flex flex-col m-auto pt-10">
          <Text
            variant="h3"
            className="text-center sm:text-start text-primary-green mb-6 gont-bold"
          >
            Get Regular Updates
          </Text>
          <div className="w-full border box222 border-primary-green"></div>

          <div className="w-full mt-10 flex flex-col items-center md:flex-row justify-between px-2 sm:px-10">
            <div className="p-4 w-full sm:w-[60%] md:w-[27%] rounded-md border box222 flex gap-4 items-center justify-center flex-col bg-primary-grey">
              <Text
                variant="h4"
                className="text-center font-semibold text-primary-green "
              >
                Join our Community
              </Text>
              <Text variant="h5" className="font-semibold text-primary-green ">
                JOIN
              </Text>
            </div>
            <div className="flex gap-14 mt-10">
              <div className="flex flex-col gap-4">
                <Text
                  variant="p"
                  className="text-start text-primary-green font-semibold"
                >
                  Product
                </Text>
                <div className="flex flex-col gap-6">
                  {PRODUCTS.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="flex cursor-pointer items-center gap-3"
                      >
                        {product.link === "" ? (
                          <Text
                            variant="body1"
                            className={`relative whitespace-nowrap text-[#AEAEAE] hover:text-white`}
                          >
                            {product.name}
                          </Text>
                        ) : (
                          <Text
                            key={product.id}
                            variant="body1"
                            className="flex text-start text-[#AEAEAE] hover:text-white"
                          >
                            {product.name}
                          </Text>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Text
                  variant="p"
                  className="text-start text-primary-green font-semibold"
                >
                  Business
                </Text>
                <div className="flex flex-col gap-6">
                  {BUSINESSES.map((business) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Link href={business.link}>
                        <>
                          <div
                            key={business.id}
                            className="flex cursor-pointer items-center gap-2"
                          >
                            <Text
                              variant="body1"
                              className="flex text-start text-[#AEAEAE] hover:text-white"
                            >
                              {business.name}
                            </Text>
                          </div>
                        </>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border box222 border-primary-green mt-8"></div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 py-5">
            <div className="flex items-center justify-center">
              <Text
                variant="body1"
                className="text-secondary-green text-center leading-normal"
              >
                Copyright © 2024 Heroic AI - All Rights Reserved.
              </Text>
            </div>
            <div className="flex gap-5">
              {SOCIAL_MEDIA_ICON.map((data) => {
                return (
                  <span className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                    {<data.Icon />}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
