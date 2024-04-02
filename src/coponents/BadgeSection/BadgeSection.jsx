import React from "react";
import WarentyImg from "../../res/warrenty.avif";
import Personalized from "../../res/personalized.avif";
import Transparentprice from "../../res/transparentprice.avif";
const BadgeSection = () => {
  return (
    <div>
      <img src={WarentyImg} alt="" />
      <img src={Personalized} alt="" />
      <img src={Transparentprice} alt="" />
    </div>
  );
};

export default BadgeSection;
