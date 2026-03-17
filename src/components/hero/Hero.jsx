import React from "react";
import HeroBanner from "./HeroBanner";
import SideBanner from "./SideBanner";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <div className=" hero container mt-4">
      <div className="row">
        <div className="col-8">
          <HeroBanner />
        </div>

        <div className="col-4">
          <SideBanner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
