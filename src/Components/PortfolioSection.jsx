import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/animate_icon/Arrow.svg";
import Gamephy from "../img/Logos2/Gamephy.svg";
import Mashvisor from "../img/Logos2/Mashvisor.svg";
import kanz from "../img/Logos2/kanz.svg";
import ecal from "../img/Logos2/ecal.svg";
import socialDice from "../img/Logos2/social dice.svg";
import rokab from "../img/Logos2/rokab.svg";
import bambinotes from "../img/Logos2/bambinotes.svg";
import ingeez from "../img/Logos2/ingeez.svg";
import fadfid from "../img/Logos2/fadfid.svg";
import wirze from "../img/Logos2/wirze.svg";
import SafraLogo from "../img/Logos2/Safrah.svg";
import ReceetLogo from "../img/Logos2/receet.svg";
import Play3rabi from "../img/Logos2/play3rabi.svg";
import RedCrowLgo from "../img/Logos2/RedCrow.svg";
import icon_7 from "../img/animate_icon/icon_7.png";
import icon_3 from "../img/animate_icon/icon_3.png";
const PortfolioSection = () => (
  <section className="portfolio-section bg-pink d-flex align-items-center py-1 position-relative">
    <div className="hero-app-3 custom-animation">
      <img src={icon_7} alt="" />
    </div>
    <div className="hero-app-6 custom-animation3">
      <img src={icon_3} alt="" />
    </div>
    <div className="container py-4">
      <h3 className="display-4 text-center my-5 ">Our Portfolio</h3>
      <div className="d-flex flex-wrap align-content-center justify-content-around my-4">
        <div className="item">
          <img src={SafraLogo} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={Gamephy} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={Mashvisor} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={RedCrowLgo} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={Play3rabi} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={kanz} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={ecal} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={socialDice} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={rokab} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={bambinotes} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={wirze} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={fadfid} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={ingeez} alt="" className="img-fluid" />
        </div>
        <div className="item">
          <img src={ReceetLogo} alt="" className="img-fluid" />
        </div>
      </div>
      <div className=" position-relative ">
        <Link
          to="/Portlfolio"
          href=""
          className="text-black text-lg-right text-center d-block my-4 text-dark font-weight-bold"
        >
          View more Our protfolio
        </Link>
        <div className="icon">
          <div className="">
            <Link to="/Portlfolio">
              <img src={Arrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default PortfolioSection;
