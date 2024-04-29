import React from "react";
import WarentyImg from "../../../res/warrenty.avif";
import Personalized from "../../../res/personalized.avif";
import Transparentprice from "../../../res/transparentprice.avif";
import "./BadgeSectionMobile.css";
const BadgeSctionMobile = () => {
  return (
    <div className="badgesection-mobile">
      <div className="img-text">
        {" "}
        <img src={WarentyImg} alt="" />
        <span>FLat 10-year warrenty</span>
      </div>
      <div className="img-text">
        {" "}
        <img src={Personalized} alt="" />
        <span>Personalized designs</span>
      </div>
      <div className="img-text">
        {" "}
        <img src={Transparentprice} alt="" />
        <span>Transparent pricing</span>
      </div>
    </div>
  );
};

export default BadgeSctionMobile;
