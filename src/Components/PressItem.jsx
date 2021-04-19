import React from "react";

const PressItem = ({ news: { header, img, article, lan } }) => (
  <div className="col-12 my-2">
    <div className="row  border py-1">
      <div className="col-md-4 col-12 ">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <div
        className={`col-md-8 col-12 align-self-center ${
          lan === "En" ? "" : "text-center text-md-right"
        }`}
      >
        <article>
          <header className="py-4 py-md-0">
            <h4>{header}</h4>
          </header>
          <section className={article === "" ? "d-none" : "d-block"}>
            <p className="">{article}</p>
          </section>
        </article>
      </div>
    </div>
  </div>
);

export default PressItem;
