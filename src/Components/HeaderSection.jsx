import React from "react";
import { Link } from "react-router-dom";
import mainHeadr from "../img/Main Header.svg";
import icon_7 from "../img/animate_icon/icon_7.png";
import icon_1 from "../img/animate_icon/icon_1.svg";
import icon_8 from "../img/animate_icon/icon_8.png";
import icon_9 from "../img/animate_icon/icon_9.svg";
const HeaderSection = () => (
  <section className="header-section mt-5 mt-md-0 ">
    <div className="container mt-5 mt-md-0 ">
      <div className="row align-items-center justify-content-center min-vh-100 ">
        <div className="hero-app-6 custom-animation3">
          <img src={icon_7} alt="" />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12  text-div text-center text-md-left">
          <div className="header-text">
            <h2 className="display-4 font-weight-bolder">
              Investing in innovative Palestinian startups.
            </h2>
            <p className="w-50">
              We invest in highly-skilled and complementary management teams
              that are willing to take risks and go out of their comfort zones.
            </p>
            <Link
              to="/about"
              className="btn btn-primary shadow rounded-2 px-4 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-lg-4  col-md-4 h-100 img-div order-1 my-md-0 my-5">
          <img src={mainHeadr} alt="" className="img-fluid" />
          <div className="hero-app-9 custom-animation">
            <img src={icon_9} alt="" />
          </div>

          <div className="hero-app-7 custom-animation">
            <img src={icon_1} alt="" />
          </div>
          <div className="hero-app-8 custom-animation">
            <img src={icon_8} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default HeaderSection;
