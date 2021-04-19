import React from "react";
import { Link } from "react-router-dom";
import TestimonalCard from "./TestimonalCard";
import Arrow from "../img/animate_icon/Arrow.svg";
import icon_9 from "../img/animate_icon/Seeds.svg";
import icon_12 from "../img/animate_icon/Leaves.svg";
import icon_1 from "../img/animate_icon/icon_9.svg";
const InvesmentSection = () => (
  <section className="invesment-section clearfix ">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 bg-pink position-relative">
          <div className="hero-app-1 custom-animation">
            <img src={icon_1} alt="" />
          </div>
          <div className="p-5">
            <h3 className="display-4 text-center text-md-left">
              Our Investment Strategy
            </h3>
            <p className="mt-4 w-50 invesment-section-text ">
              Ibtikar fund supports companies in two stages — seed and early
              stage.
            </p>
            <TestimonalCard />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 bg-blue">
          <div className="mt-5 p-5 white-box">
            <div className="hero-app-9">
              <img src={icon_9} alt="" />
            </div>
            <div className="hero-app-10">
              <img src={icon_12} alt="" />
            </div>
            <div className="stage-box bg-white shadow">
              <div className="stage1 p-4 ">
                <h3 className="font-weight-bold">Seed Stage</h3>
                <p>
                  At the growth stage of investment, we invest in companies with
                  a proven concept with a sustainable competitive advantage.
                </p>
              </div>
              <div className="stage1 p-4 py-5 ">
                <h3 className="font-weight-bold text-right">Early Stage</h3>
                <p>
                  At the growth stage of investment, we invest in companies with
                  a proven concept with a sustainable competitive advantage.
                </p>
              </div>
            </div>
            <div className=" mt-4 position-relative ">
              <Link
                to="/Pertners"
                className="text-black text-lg-right text-center d-block my-4 text-dark font-weight-bold mr-lg-5"
              >
                Learn more about our <br />
                investment strategies <span className=""></span>
              </Link>
              <div className="icon-invesment">
                <div className="">
                  <Link to="/Pertners">
                    <img src={Arrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvesmentSection;
