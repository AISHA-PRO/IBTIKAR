import React from "react";

const ContactUs = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row  justify-content-center align-items-center">
          <div className="col-12  text-center my-5">
            <h3 className="display-4 my-5">Contact Us</h3>
            <p className="text-dark pt-2 text-center w-50 m-auto my-5 ">
              Get in touch about press, partnerships, or becoming an Ibtikar
              entrepreneur.
            </p>
          </div>
          <form action="" className="w-50 ">
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
                  class="btn btn-primary btn-lg active px-5 my-md-0 my-3 shadow rounded"
                >
                  Submit
                </button>
              </div>
              <small className="text-muted my-2">
                By submitting your email above you grant Ibtikar Fund permission
                to contact you with further communications.
              </small>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
