import React from "react";
import icon7 from "../img/animate_icon/icon_7.svg";
import icon5 from "../img/animate_icon/icon_5.svg";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

const SliderSection = () => (
  <section className="py-2 bg-blue-slider position-relative">
    <div className="hero-app-4 custom-animation3">
      <img src={icon7} alt="" />
    </div>
    <div className="hero-app-2 custom-animation">
      <img src={icon5} alt="" />
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12 m-auto py-1">
          <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators circle">
              <li
                data-target="#carouselId"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselId" data-slide-to="1"></li>
              <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="slider-text text-center py-5 my-3 mw-50 m-auto">
                  <p className="text-blue lead ">
                    We invigorate the most promising Palestinian startups
                  </p>
                  <q className="">
                    I chose to work with so and so startup because of their
                    involvement with Ibtikar fund. I knew that I was in good
                    hands because of their affiliation with Ibtikar.
                  </q>
                  <div className="my-4 py-1">
                    <p className="lead text-dark py-0 my-0">Joey Joe Joe</p>
                    <p className="text-black-50">
                      Managing Director at SoandSo Group
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="slider-text text-center py-5 my-3 mw-50 m-auto">
                  <p className="text-blue lead ">
                    We invigorate the most promising Palestinian startups
                  </p>
                  <q className="">
                    I chose to work with so and so startup because of their
                    involvement with Ibtikar fund. I knew that I was in good
                    hands because of their affiliation with Ibtikar.
                  </q>
                  <div className="my-4 py-1">
                    <p className="lead text-dark py-0 my-0">Joey Joe Joe</p>
                    <p className="text-black-50">
                      Managing Director at SoandSo Group
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider-text text-center py-5 my-3 mw-50 m-auto">
                  <p className="text-blue lead ">
                    We invigorate the most promising Palestinian startups
                  </p>
                  <q className="">
                    I chose to work with so and so startup because of their
                    involvement with Ibtikar fund. I knew that I was in good
                    hands because of their affiliation with Ibtikar.
                  </q>
                  <div className="my-4 py-1">
                    <p className="lead text-dark py-0 my-0">Joey Joe Joe</p>
                    <p className="text-black-50">
                      Managing Director at SoandSo Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SliderSection;
