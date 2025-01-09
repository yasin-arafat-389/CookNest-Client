import React from "react";

import Hero from "@/src/components/UI/Hero/Hero";
import HowItWorks from "@/src/components/UI/Hero/HowItWorks";
import RecentRecipes from "@/src/components/UI/RecentRecipes/RecentRecipes";

const HomePage = () => {
  return (
    <div className="bg-[#F5EDED]">
      <Hero />
      <HowItWorks />
      <RecentRecipes />
    </div>
  );
};

export default HomePage;
