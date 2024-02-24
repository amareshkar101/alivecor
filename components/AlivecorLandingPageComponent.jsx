import React from "react";
import AlivecorHeroComponent from "./AlivecorHeroComponent";
import AlivecorPartnerComponent from "./AlivecorPartnerComponent";
import AlivecorAboutComponent from "./AlivecorAboutComponent";
import AlivecorFooterComponent from "./AlivecorFooterComponent";

const AlivecorLandingPageComponent = () => {
  return (
    <div className="w-full h-screen">
      <AlivecorHeroComponent />
      <AlivecorPartnerComponent />
      <AlivecorAboutComponent />
      <AlivecorFooterComponent />
    </div>
  );
};
export default AlivecorLandingPageComponent;
