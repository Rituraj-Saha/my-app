import React from "react";

import "./PriceEstematorCard.css";

const PriceEstematorCard = (props) => {
  return (
    <div className="price-esteem-parent">
      <img src={props.image} alt="" />
      <span>{props.spaceType}</span>
      <span>{props.spaceDesc} </span>
      <div className="price-estem-select-type-btn">{"Calculate >"}</div>
    </div>
  );
};

export default PriceEstematorCard;
