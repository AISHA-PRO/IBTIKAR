import React from "react";
import { Link } from "react-router-dom";
import applyImage from "../img/Apply.svg";
const ApplySection = () => (
  <section className="apply-section overflow-auto">
    <div className="container">
      <div className="row min-vh-100 align-content-md-center  justify-content-md-between position-relative overflow-hidden">
        <div className="col-md-6 col-12 order-2 order-md-1 text-center text-md-left">
          <h3 className="display-4 ">Are you an Ibtikar Entrepreneur?</h3>
          <p className="">
            If you’ve never launched a company before, expect to work the
            hardest you have ever worked, to have good and bad days, to be
            challenged and to be inspired.
          </p>
          <p className="">
            Launching a company is not easy but it will be one of the most
            rewarding experiences of your life.
          </p>
          <Link
            to="/Enterpreneus"
            className="btn btn-outline-dark btn-outline-dark px-4 my-3"
          >
            Apply now
          </Link>
        </div>
        <div className="col-md-6 col-12  order-1 order-md-2">
          <img src={applyImage} alt="" className="img-fluid apply-img" />
        </div>
      </div>
    </div>
  </section>
);

export default ApplySection;
