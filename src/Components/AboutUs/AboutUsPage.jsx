import React from "react";
import { Link } from "react-router-dom";
import MarceloDiaz from "../../img/team/02.svg";
import Zahi from "../../img/team/Zahi-Khouri-IbtikarFund.svg";
import Ambar from "../../img/team/Mrs.-Ambar-Amleh-ibtikar-fund.svg";
import Habib from "../../img/team/Mr-.-Habib-Hazzan-ibtikar-fund.svg";
import Hashim from "../../img/team/Reem-Qawasmi-ibtikar-fund1.svg";
import Reem from "../../img/team/Reem-Qawasmi-ibtikar-fund.svg";
import icon12 from "../../img/animate_icon/icon_12.svg";
import icon13 from "../../img/animate_icon/icon_14.svg";
const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <section className="mt-5  position-relative overflow-hidden">
        <div className="hero-app-16">
          <img src={icon13} alt="" />
        </div>
        <div className="container mt-5">
          <div className="row  justify-content-center align-items-center my-5">
            <div className="col-12  text-center my-5 text-md-left">
              <h3 className="display-4 mb-5 mt-5">About Us</h3>
              <h5>Our Team</h5>
              <article className="mw-75">
                <p>
                  Ibtikar’s strength stems from the dedicated management and
                  advisory team, who works hand-in-hand with each portfolio
                  company to identify opportunities, mitigate risks, and address
                  challenges throughout the duration of our investment.
                </p>
                <p>
                  Ibtikar’s management team is supported by a pool of investors,
                  the majority of whom are Palestinian—from both within and
                  outside Palestine—who support our investments with their
                  varied and deep experience and networks.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue position-relative overflow-hidden py-4">
        <div className="hero-app-17">
          <img src={icon12} alt="" />
        </div>
        <div className="container">
          <div className="row  justify-content-center align-items-center">
            <div className="col-12 my-4 mt-5">
              <div className="row">
                <div className="col col-md-4  col-12 my-4 my-md-0">
                  <div className="card w-100 border ">
                    <Link to="/bio">
                      <img src={Hashim} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body text-center py-4 ">
                      <h5 className="card-title">Hashim Sawa</h5>
                      <p className="card-text">Board Chair</p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4  col-12 my-4 my-md-0">
                  <div className="card w-100">
                    <Link to="/bio">
                      <img src={Zahi} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body text-center py-4">
                      <h5 className="card-title">Zahi W.Khouri</h5>
                      <p className="card-text">Board Member</p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4  col-12 my-4 my-md-0">
                  <div className="card w-100">
                    <Link to="/Bio">
                      <img src={Habib} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body text-center py-4">
                      <h5 className="card-title">Habib Hazzan</h5>
                      <p className="card-text">Managing General Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col col-md-4  col-12 my-4 my-md-0">
                  <div className="card w-100">
                    <Link to="/bio">
                      <img src={Ambar} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body text-center py-4 position-relative">
                      <h5 className="card-title">Ambar Amleh</h5>
                      <p className="card-text">Chief Operating Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4  col-12 my-4 my-md-0">
                  <div className="card w-100">
                    <Link to="/bio">
                      <img
                        src={MarceloDiaz}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body text-center py-4">
                      <h5 className="card-title">Marcelo Diaz Bowen</h5>
                      <p className="card-text">Senior Advisor</p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4  col-12 my-4 my-md-0">
                  <div className="card w-100">
                    <Link to="/bio">
                      <img src={Reem} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body text-center py-4">
                      <h5 className="card-title">Reem Qawsmi</h5>
                      <p className="card-text">CFO-in-Residence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
