import React, { useState } from "react";
import Gamephy from "../../img/Logos2/Gamephy.svg";
import Mashvisor from "../../img/Logos2/Mashvisor.svg";
import kanz from "../../img/Logos2/kanz.svg";
import ecal from "../../img/Logos2/ecal.svg";
import socialDice from "../../img/Logos2/social dice.svg";
import rokab from "../../img/Logos2/rokab.svg";
import bambinotes from "../../img/Logos2/bambinotes.svg";
import ingeez from "../../img/Logos2/ingeez.svg";
import fadfid from "../../img/Logos2/fadfid.svg";
import wirze from "../../img/Logos2/wirze.svg";
import SafraLogo from "../../img/Logos2/Safrah.svg";
import ReceetLogo from "../../img/Logos2/receet.svg";
import Play3rabi from "../../img/Logos2/play3rabi.svg";
import RedCrowLgo from "../../img/Logos2/RedCrow.svg";
import icon from "../../img/Logos2/Gamephy.svg";
import pic from "../../img/ibtikar-fund-1.svg";
import PortfolioItem from "./PortfolioItem";
import Portfolio1 from "../../img/animate_icon/Portfolio 1.svg";
import Portfolio2 from "../../img/animate_icon/portfolio2.svg";
import Portfolio3 from "../../img/animate_icon/icon_13.svg";
const PortfolioPage = () => {
  const infoArr = [
    {
      key: 1,
      pic,
      icon,
      header: "Revolutionizing the way customers shop",
      name: "Founder & CEO",
      link: "",
      imgDesc:
        "Something about the startup that is descriptive but brief, under three lines. It can be a bio or a description of the founders.",
      color: "#fef9f5"
    },
    {
      key: 2,
      pic,
      icon,
      header: "Revolutionizing the way customers shop",
      name: "Founder & CEO",
      link: "",
      imgDesc:
        "Something about the startup that is descriptive but brief, under three lines. It can be a bio or a description of the founders.",
      color: "#fff"
    },
    {
      key: 3,
      pic,
      icon,
      header: "Revolutionizing the way customers shop",
      name: "Founder & CEO",
      link: "",
      imgDesc:
        "Something about the startup that is descriptive but brief, under three lines. It can be a bio or a description of the founders.",
      color: "#fef9f5"
    },
    {
      key: 4,
      pic,
      icon,
      header: "Revolutionizing the way customers shop",
      name: "Founder & CEO",
      link: "",
      imgDesc:
        "Something about the startup that is descriptive but brief, under three lines. It can be a bio or a description of the founders.",
      color: "#fff"
    },
    {
      key: 5,
      pic,
      icon,
      header: "Revolutionizing the way customers shop",
      name: "Founder & CEO",
      link: "",
      imgDesc:
        "Something about the startup that is descriptive but brief, under three lines. It can be a bio or a description of the founders.",
      color: "#fef9f5"
    },
    {
      key: 6,
      pic,
      icon,
      header: "Revolutionizing the way customers shop",
      name: "Founder & CEO",
      link: "",
      imgDesc:
        "Something about the startup that is descriptive but brief, under three lines. It can be a bio or a description of the founders.",
      color: "#fff"
    }
  ];
  const [data, setData] = useState(infoArr);
  return (
    <div className="protfolio-page my-5 overflow-hidden">
      <section className="mt-5  position-relative ">
        <div className="hero-app-16">
          <img src={Portfolio1} alt="" />
        </div>
        <div className="hero-app-17">
          <img src={Portfolio2} alt="" />
        </div>
        <div className="container mt-5">
          <div className="row  justify-content-center align-items-center">
            <div className="col-12 col-md-8 text-center my-5 text-md-left">
              <h3 className="display-4 my-4">Our Portfolio</h3>
              <article className="">
                <p>
                  Our portfolio includes motivated and skilled Palestinian
                  entrepreneurs, from both within and outside Palestine. dolores
                  nostrum laborum repellendus.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="  position-relative">
        <div className="hero-app-18">
          <img src={Portfolio3} alt="" />
        </div>
        <div className="container">
          <div className="row  justify-content-center align-items-center">
            <div className="col-12 col-md-8  text-center my-5 text-md-left">
              <div className="d-flex flex-wrap align-content-center justify-content-around my-1">
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
            </div>
          </div>
        </div>
      </section>
      {data.map(item => (
        <PortfolioItem data={item} key={item.key} />
      ))}
    </div>
  );
};

export default PortfolioPage;
