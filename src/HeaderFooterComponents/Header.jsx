import React from "react";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-section  overflow-auto">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <NavLink className="navbar-brand logo" to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-20px" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Portlfolio">
                Portlfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Enterpreneus">
                For Enterpreneus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Pertners">
                Pertners
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Press">
                Press
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Header;
