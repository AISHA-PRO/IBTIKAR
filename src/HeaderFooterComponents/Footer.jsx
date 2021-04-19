import React from "react";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <footer className="">
        <div>
          <div className="row border-b">
            <div className="footerelogo col-lg-4">
              <div>
                <img src={Logo} alt="" />
              </div>
              <div>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores autem maiores quis expedita, obcaecati eum aut sequi
                  ratione
                </p>
              </div>
            </div>
            <div className="footerelement col-lg-2 offset-4">
              <ul>
                <li className="elfooter">
                  <NavLink to="">About</NavLink>
                </li>
                <li className="elfooter">
                  <NavLink to="">Portlfolio</NavLink>
                </li>
                <li className="elfooter">
                  <NavLink to="">For</NavLink>
                </li>
                <li className="elfooter">
                  <NavLink to="">Pertners</NavLink>
                </li>
                <li className="elfooter">
                  <NavLink to="">Press</NavLink>
                </li>
                <li className="elfooter">
                  <NavLink to="">contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="footer-bottom  float-md-right">
              <ul>
                <NavLink to="">
                  <li className="elment">
                    <i className="fa fa-twitter"></i>
                  </li>
                </NavLink>
                <NavLink to="">
                  <li className="elment">
                    <i className="fa fa-facebook"></i>
                  </li>
                </NavLink>
                <NavLink to="">
                  <li className="elment">
                    <i className="fa fa-instagram"></i>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
