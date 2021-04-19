import React, { useState } from "react";
import PressItem from "./PressItem";
import { Link } from "react-router-dom";
import Arrow from "../img/animate_icon/Arrow.svg";
import icon8 from "../img/animate_icon/icon_8.svg";
import icon9 from "../img/animate_icon/icon_9.svg";
import icon4 from "../img/animate_icon/icon_4.png";

const PressSection = () => {
  const newsArray = [
    {
      key: 1,
      lan: "En",
      img: "https://www.thewrap.com/wp-content/uploads/2014/01/cnn-logo.jpg",
      header: "Palestinian Venture Capital Firm Secures Additional Capital",
      article:
        "Palestinian Fund Ibtikar announced it has raised an additional $2.5million from investors for its early stage venture capital fund. Thecapital infusion increases the..."
    },
    {
      key: 2,
      lan: "En",
      img:
        "https://pngimage.net/wp-content/uploads/2018/05/daily-mail-logo-png.png",
      header: "Palestinian Venture Capital Firm Secures Additional Capital",
      article: ""
    },
    {
      key: 3,
      lan: "Ar",
      img:
        "https://pngimage.net/wp-content/uploads/2018/05/daily-mail-logo-png.png",
      header: "صندوق ابتكار يعلن",
      article: ""
    },
    {
      key: 4,
      lan: "En",
      img: "https://www.thewrap.com/wp-content/uploads/2014/01/cnn-logo.jpg",
      header: "Palestinian Venture Capital Firm Secures Additional Capital",
      article: ""
    }
  ];
  const [news, setNews] = useState(newsArray);
  return (
    <section className="py-5">
      <div className="container position-relative">
        <div className="hero-app-12 custom-animation3">
          <img src={icon9} alt="" />
        </div>
        <div className="hero-app-13 custom-animation3">
          <img src={icon8} alt="" />
        </div>
        <div className="hero-app-14 custom-animation">
          <img src={icon4} alt="" />
        </div>
        <div className="text-center text-md-left">
          <h3 className="display-4">Press</h3>
          <h4 className="text-dark  ">Press Releases and Coverage</h4>
        </div>
        <div className="row my-4">
          {news.map(n => (
            <PressItem news={n} key={n.key} />
          ))}
        </div>
        <div className=" position-relative ">
          <Link
            to="/Press"
            className="text-black text-lg-right text-center d-block my-4 text-dark font-weight-bold"
          >
            View More Press
          </Link>
          <div className="icon">
            <div className="">
              <Link to="/Press">
                <img src={Arrow} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
