import React from "react";
import Arrow from "../../img/animate_icon/Arrow.svg";

const PortfolioItem = ({
  data: { pic, icon, header, name, imgDesc, link, color }
}) => (
  <section
    className="portfolio-item mt-5 position-relative overflow-hidden"
    style={{ backgroundColor: color }}
  >
    <div className="hero-app-16"></div>
    <div className="container">
      <div className="row  justify-content-center align-items-center">
        <div className="col-12 col-md-6 text-center my-5 text-md-left order-md-0 order-1">
          <img src={icon} alt="" className="w-50" />
          <h3 className="display-4 my-3">{header}</h3>
          <div className="my-4">
            <h6>Name Surname</h6>
            <h5>{name}</h5>
          </div>
          <div className=" position-relative my-2 my-md-4">
            <a
              href={link}
              className="text-black text-lg-left text-center d-block my-4 text-dark font-weight-bold position-relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Their Website
            </a>
            <div className="icon">
              <div class="">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={Arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center my-5 text-md-left order-md-1 order-0">
          <img src={pic} alt="" className="img-fluid" />
          <p className="my-3">{imgDesc}</p>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioItem;
