import React, { useState } from "react";
import "./Slidecard.css";

const SlideCard = (props) => {
  return (
    <div className="slide-card">
      <img src={props.image} alt="" className="slide-card-img" />
      <div className="slide-card-bottom">
        <div className="slide-card-title">{props.title}</div>
        <div className="slide-card-subtitleSection">
          <div className="slide-card-subtitle">{props.subtitle}</div>
          <div
            className="slide-card-getQuoteButton"
            onClick={props.handleClick}
          >
            <i></i>
            Get Free Quote
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
