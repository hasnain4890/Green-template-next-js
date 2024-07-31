"use client";
import React, { useState } from "react";
import Navbar from "./container/dashboard-page/Navbar";
import "../translation/i18n";
import HeroSection from "./container/dashboard-page/HeroSection";
import AiPowered from "./container/dashboard-page/AiPowered";
import Discover from "./container/dashboard-page/Discover";
import Footer from "./container/dashboard-page/Footer";
import Tokenomics from "./container/dashboard-page/Tokenomics";
import HowToBuy from "./container/dashboard-page/HowToBuy";
import Roadmap from "./container/dashboard-page/Roadmap";

const Page = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <>
      <div className="bg-primary-bg">
        <Navbar
          setIsContentVisible={setIsContentVisible}
          isContentVisible={isContentVisible}
        />
      </div>
      <HeroSection />
      <AiPowered />
      <Discover />

      <Tokenomics />
      <HowToBuy />
      <div className="mb-20">
        <Roadmap />
      </div>
      <Footer />
    </>
  );
};

export default Page;
