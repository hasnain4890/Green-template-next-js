import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Text } from "@/app/sharedComponents";
import { NavbarProps } from "@/app/interfaces/Interfaces";
import "./style.css";
import { NAV_BAR_CONTENT } from "@/constants/constant";
import LarpLogo from "@/public/svg/LarpLogo";

const Navbar: React.FC<NavbarProps> = ({
  setIsContentVisible,
  isContentVisible,
}) => {
  const { t } = useTranslation();

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
    if (!isContentVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsContentVisible(window.innerWidth > 767 ? false : isContentVisible);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isContentVisible, setIsContentVisible]);

  return (
    <div className="flex w-screen justify-between p-5 px-8">
      <div>
        <Link href="/">
          <div className="flex md:max-w-screen-sm">
            <LarpLogo />
          </div>
        </Link>
      </div>
      <div
        className={`absolute right-0 top-0 z-50  m-auto flex w-screen flex-col md:relative md:z-0 md:flex md:flex-row items-center md:gap-2 md:space-x-3 lg:justify-center ${
          isContentVisible
            ? "m-0 h-screen w-screen bg-[#030B15] backdrop-blur-sm duration-200 ease-in-out  pt-20"
            : "hidden opacity-0 md:opacity-100"
        }`}
      >
        {NAV_BAR_CONTENT?.map(({ id, content, pathName }) => (
          <Link key={id} href={pathName}>
            <Text
              key={id}
              variant="defualt"
              className={`font-inter nav-item-animation flex cursor-pointer items-center justify-center py-1 pt-4 align-middle font-semibold text-primary-green transition-transform md:mb-2 md:py-0 md:pt-2 md:text-sm md:font-normal  ${
                isContentVisible && "text-light fade-up text-xl my-4"
              } `}
            >
              {t(content)}
            </Text>
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="hidden sm:block">
          <button
            className="bg-primary-green cursor-pointer transition duration-300 ease-in-out text-center flex hover:bg-secondary-green items-center justify-center"
            id="nav-button"
          >
            Download App
          </button>
        </div>
        <div className="mobile-navigation-bar-menu-icon z-50 flex cursor-pointer justify-end md:hidden">
          <button
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="duration-600 relative rounded-md p-3 backdrop-blur-md transition ease-in-out hover:border-gray-500 hover:bg-gray-500 hover:bg-opacity-30 hover:bg-clip-padding"
            onClick={toggleContentVisibility}
          >
            <div
              className={`hamburger-icon ${isContentVisible ? "toggled" : ""}`}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
