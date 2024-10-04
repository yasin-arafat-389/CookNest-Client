import React from "react";

import Hero from "@/src/components/UI/Hero/Hero";
import HowItWorks from "@/src/components/UI/Hero/HowItWorks";

const HomePage = () => {
  return (
    <div className="bg-[#F5EDED]">
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
