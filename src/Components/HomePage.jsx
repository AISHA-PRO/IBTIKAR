import React from "react";
import HeaderSection from "./HeaderSection";
import InvesmentSection from "./InvesmentSection";
import ApplySection from "./ApplySection";
import PortfolioSection from "./PortfolioSection";
import OurPartnersSection from "./OurPartners";
import SliderSection from "./SliderSection";
import PressSection from "./PressSection";
import ContactUsSection from "./ContactUs";

const HomePage = () => (
  <div className="home-page overflow-hidden">
    <HeaderSection />
    <InvesmentSection />
    <ApplySection />
    <PortfolioSection />
    <OurPartnersSection />
    <SliderSection />
    <PressSection />
    <ContactUsSection />
  </div>
);

export default HomePage;
