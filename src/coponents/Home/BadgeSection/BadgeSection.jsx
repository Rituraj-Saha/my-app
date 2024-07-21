import React from "react";
import WarentyImg from "../../../res/badgeSvgs/warrenty-design.svg";
import Personalized from "../../../res/badgeSvgs/unique-design.svg";
import Transparentprice from "../../../res/badgeSvgs/comp-pricing.svg";
import "./Badgesection.css";
const BadgeSection = () => {
  return (
    <div className="badgesection">
      <div className="img-text">
        {" "}
        <img
          src={WarentyImg}
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        <span>10 Year Service Warranty</span>
      </div>
      <div className="img-text">
        {" "}
        <img
          src={Personalized}
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        <span>Unique designs</span>
      </div>
      <div className="img-text">
        {" "}
        <img
          src={Transparentprice}
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        <span>Competitive Pricing</span>
      </div>
    </div>
  );
};

export default BadgeSection;
