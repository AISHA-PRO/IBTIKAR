import React from "react";
import Leaders from "../img/Logos2/leaders.svg";
import TaawonLogo from "../img/Logos2/TaawonLogo.svg";
import GazaSkyGeeks from "../img/Logos2/Gaza-Sky-Geeks.svg";
import AtlasStripe from "../img/Logos2/Atlas-Stripe.svg";
import FacebookStart from "../img/Logos2/Facebook-Start.svg";
import HubspotForStartups from "../img/Logos2/Hubspot-for-Startups.svg";
import Untitleddesign1 from "../img/Logos2/Untitled-design-1.png";
import Untitleddesign2 from "../img/Logos2/Untitled-design-2.svg";
const OurPartnersSection = () => (
  <section>
    <h3 className="display-4  text-center my-5">Our Partners & Supporters</h3>
    <div className="container py-5 my-4">
      <div className="d-flex flex-wrap align-content-center justify-content-around my-4">
        <div className="item-our-partners">
          <img src={Leaders} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={GazaSkyGeeks} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={AtlasStripe} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={FacebookStart} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={HubspotForStartups} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={Untitleddesign1} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={Untitleddesign2} alt="" />
        </div>
        <div className="item-our-partners">
          <img src={TaawonLogo} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default OurPartnersSection;
