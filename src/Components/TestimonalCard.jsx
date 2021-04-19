import React, { Fragment } from "react";
import avatarImage from "../img/Ambar.jpg";
const TestimonalCard = () => (
  <Fragment>
    <div className="box bg-white shadow p-1 w-75 mt-4">
      <div className="card-body">
        <q>
          Here is a testimonial about how Ibtikar helped my startup in the seed
          stage and the results that it gleaned!
        </q>
        <div className="avatar mt-3 clearfix ">
          <div className="avatar-img float-left mr-2">
            <img src={avatarImage} alt="" />
          </div>
          <div className="avatar-info float-left">
            <p>
              Startup Susan <br />
              <span className="">Founder and CEO at Startup Co</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default TestimonalCard;
