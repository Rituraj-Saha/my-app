import React, { useState } from "react";
import "./Slidecard.css";
import CustomButton from "../../../ReusableComponents/CustomButton/CustomButton";

const SlideCard = (props) => {
  return (
    <div className="slide-card">
      <img src={props.image} alt="" className="slide-card-img" />
      <div className="slide-card-bottom">
        <div className="slide-card-title">{props.title}</div>
        <div className="slide-card-subtitleSection">
          <div className="slide-card-subtitle">{props.subtitle}</div>
        </div>
        {/* <div className="slide-card-getQuoteButton" onClick={props.handleClick}>
          Raise A Query
        </div> */}
        <CustomButton title={"Raise A Query"} handleClick={props.handleClick} />
      </div>
    </div>
  );
};

export default SlideCard;
