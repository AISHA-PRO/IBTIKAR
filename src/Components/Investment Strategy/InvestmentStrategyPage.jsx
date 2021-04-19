import React from "react";
import seeds from "../../img/animate_icon/Seeds.svg";
import leaves from "../../img/animate_icon/Leaves.svg";
import Investment1 from "../../img/animate_icon/Investment-1.svg";
import Investment2 from "../../img/animate_icon/Investment-2.svg";
import Investment3 from "../../img/animate_icon/Investment-3.svg";

const InvestmentStrategyPage = () => (
  <div className="investment-strategy-page my-5 overflow-hidden">
    <section className="mt-5  position-relative ">
      <div className="hero-app-19">
        <img src={Investment1} alt="" />
      </div>
      <div className="hero-app-20">
        <img src={Investment2} alt="" />
      </div>
      <div className="hero-app-21">
        <img src={Investment3} alt="" />
      </div>
      <div className="container mw-75 ">
        <div className="row  justify-content-center align-items-center">
          <div className="col-12 col-md-8 text-center my-5 text-md-left">
            <h3 className="display-4 mb-4 my-5">Our Investment Strategy</h3>
            <article className="">
              <p>
                Ibtikar looks for motivated and skilled Palestinian
                entrepreneurs, from both within and outside Palestine, (however,
                we do expect that the majority of the operations of the
                companies we support to be located in Palestine). We look for
                ideas and startups that are scalable and that serve a MENA
                region or global need.
              </p>
              <p className="lead text-dark font-weight-bold py-2 my-5">
                Ibtikar Fund supports companies in <br />
                two stages—seed and early stage
              </p>
            </article>
            <div className="shadow border-black py-4 px-2 px-md-5  my-4 position-relative">
              <div className="seeds-icon">
                <img src={seeds} alt="" />
              </div>

              <h3 className="font-weight-bold ">Seed Stage</h3>
              <p className="">
                Ibtikar invests in good ideas through seed investments in
                partnership with selected accelerators. At this stage, we look
                for highly-motivated, skilled teams, (reflecting a balance
                between managerial and technical skills), that can develop their
                regionally/globally-oriented ideas into scalable businesses.
                Ibtikar provides a seed investment in companies selected through
                our partner accelerators.
              </p>
              <p className="my-4">
                During the acceleration period, teams receive active support
                from Ibtikar’s management team, as well as the services and
                assistance provided by the accelerator staff. At the end of the
                acceleration period, those teams that are able to prove their
                concept are considered for further funding from Ibtikar.
              </p>
            </div>
            <div className="shadow border-black py-4 px-2 px-md-5 my-5 position-relative">
              <div className="leaves-icon">
                <img src={leaves} alt="" />
              </div>
              <h3 className="font-weight-bold  text-center text-md-right">
                Early Stage
              </h3>
              <p className="">
                Ibtikar invests in good ideas through seed investments in
                partnership with selected accelerators. At this stage, we look
                for highly-motivated, skilled teams, (reflecting a balance
                between managerial and technical skills), that can develop their
                regionally/globally-oriented ideas into scalable businesses.
                Ibtikar provides a seed investment in companies selected through
                our partner accelerators.
              </p>
              <p className="my-4">
                During the acceleration period, teams receive active support
                from Ibtikar’s management team, as well as the services and
                assistance provided by the accelerator staff. At the end of the
                acceleration period, those teams that are able to prove their
                concept are considered for further funding from Ibtikar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default InvestmentStrategyPage;
