import React from "react";
import ContactUsImage from "../img/Ibtikar-Board.svg";
const ContactUs = () => (
  <section className="position-relative">
    <div className="bg-contact py-5"></div>
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-5">
          <img src={ContactUsImage} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-7 text-center text-md-left">
          <h3 className="display-4">Contact Us</h3>
          <p className="text-dark pt-2">
            Get in touch about press, partnerships, or becoming an Ibtikar
            entrepreneur.
          </p>
          <form action="" className="">
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="5"
                className="form-control"
                placeholder="Enter your message here, giving your name, organization and one of our staff members will get back to you shortly."
              ></textarea>
              <br />
            </div>
            <div className="form-row">
              <div className="col-md-8 input-group-lg col-12">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="form-control "
                />
              </div>
              <div className="col-md-4 col-12 my-2 my-md-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg active px-4 shadow rounded"
                >
                  Submit
                </button>
              </div>
              <small className="my-2 text-dark">
                By submitting your email above you grant Ibtikar Fund permission
                to contact you with further communications.{" "}
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default ContactUs;
