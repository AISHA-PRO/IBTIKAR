import React from "react";
import bioImg from "../../img/Group-6.svg";
import Icon from "../../img/animate_icon/Investment-1.svg";

const BioPage = () => (
  <div className="bio-page">
    <section className="mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100 position-relative">
          <div className="col-12 col-md-4 text-center text-md-left">
            <h3 className="display-4">Hashim Sawa</h3>
            <h6>Board Chair</h6>
          </div>
          <div className="col-12 col-md-8 position-relative ">
            <div className="bio-img">
              <img src={bioImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="position-relative">
      <div className="hero-app-23">
        <img src={Icon} alt="" />
      </div>
      <div className="container-fluid container row ">
        <div className="col-12 col-md-11 bg-pink p-5">
          <div className="bio-text mw-75 m-auto lead">
            <p>
              Hashim Shawa joined Bank of Palestine as Chairman and General
              Manager (GM) in 2007; and has maintained the bank’s strategic
              direction of sustained growth and expansion. During his tenure as
              Chairman and GM he helped in the institutionalization of the bank;
              bringing forth a value based approach to banking. The bank today
              has an active financial inclusion program focusing on providing
              banking services and financial awareness to women, Small Medium
              Enterprises and Youth. As a result, the bank has expanded its
              network and operating indicators becoming effectively the largest
              financial institution in Palestine. Today, with a focus on core
              banking services and innovative electronic solutions; Bank of
              Palestine is engaged in retail, corporate, SME & Micro, and
              Diaspora banking operations. In 2017 and in an effort to enhance
              the bank’s international expansion and in order to focus on the
              entire performance of the Bank’s group of companies, Hashim Shawa
              became Chairman of Bank of Palestine Group and is no longer
              overseeing the Bank’s operation as GM. Today the Bank of Palestine
              Groups consists of Arab Islamic Bank, the group’s Islamic Banking
              arm, PalPay, the Groups Fintech and E payments solutions provider,
              and Al Wasata, the group’s brokerage and portfolio investments
              arm. The Bank of Palestine Group role in developing the financial
              industry in Palestine was recognized by several key Banking Awards
              and memberships including membership in the Global Alliance for
              Banking on Values –GABV.
            </p>
            <p>
              After obtaining his BSc (Hons) from University College London,
              Shawa began his banking career at Citigroup in 1997 where he held
              various management positions in Corporate and Private Banking
              working in the UK, Italy, Spain, and Switzerland. In Italy at
              Citigroup Shawa was in charge of the team responsible for helping
              in the country’s transition from the Lira to the Euro. In 2005 he
              joined HSBC in Switzerland as a director of the group’s Middle
              East and North Africa business. His role was to develop the
              company’s Private Banking business in the Gulf and establish
              HSBC’s onshore presence in Kuwait.
            </p>
            <p>
              Shawa is also the Chairman of the boards of directors of Al-Wasata
              Securities Company; PalPay E-Payment Solutions Company and Ibtikar
              Innovation Fund. Shawa is a member of the Emerging Markets
              Advisory Council at the International Institute of Finance
              Washington DC, Association of Banks in Palestine, and the board of
              Pharmacare Pharmaceuticals PLC. Shawa is a member of the board of
              trustees of Bethlehem University;the Palestine Studies Institute
              and the World Economic Forum in Geneva.
            </p>
            <p>
              He was recognized as one of the 50 most influential leaders in
              finance and banking according the Global Finance Magazine in 2015;
              in addition to best CEO in the Middle East by EMEA Finance for the
              year 2014.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default BioPage;
