import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import HomePage from "./Components/HomePage";

import Header from "./HeaderFooterComponents/Header";
import Footer from "./HeaderFooterComponents/Footer";
import AboutUsPage from "./Components/AboutUs/AboutUsPage";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import ApplyPage from "./Components/ApplyPage";
import InvestmentStrategyPage from "./Components/Investment Strategy/InvestmentStrategyPage";
import Press from "./Press";
import ContactUs from "./Components/ContactUsPage";
import BioPage from "./Components/BioPage/BioPage";

const App = () => (
  <Fragment>
    <Router>
      <div className="overflow-auto">
        <Header />

        <Switch>
          <Route path="/Bio" component={BioPage} />
          <Route path="/Contact" component={ContactUs} />
          <Route path="/Press" component={Press} />
          <Route path="/Pertners" component={InvestmentStrategyPage} />
          <Route path="/Enterpreneus" component={ApplyPage} />
          <Route path="/Portlfolio" component={PortfolioPage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </Router>
    {/* 
    // <HomePage /> */}
  </Fragment>
);

export default App;
