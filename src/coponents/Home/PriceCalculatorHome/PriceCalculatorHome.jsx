import React from "react";
import { Element } from "react-scroll";
import PriceCalculatorHomeCard from "./PriceCalculatorHomeCard";
import HomeSVGPc from "../../../res/price_calculator_svgs/home-svg-pc.svg";
import "./PriceHomeCalculator.css";
import KitchenSVGPc from "../../../res/price_calculator_svgs/kitchen-svg-pc.svg";
import WorddrobeSvgPc from "../../../res/price_calculator_svgs/wordrobe-svg-pc.svg";
import CalcuteSvgPc from "../../../res/price_calculator_svgs/calculator-svg-pc.svg";

const PriceCalculatorHome = () => {
  return (
    <Element
      name="price-calculator-home"
      className="price-calculator-home"
      id="price-calculator-home"
    >
      <span style={{ fontSize: "30px", marginTop: "55px" }}>
        Get An Approximate Idea For Your Home Make over
      </span>
      <div className="priceCalculatorCards">
        <PriceCalculatorHomeCard
          image={HomeSVGPc}
          imageright={CalcuteSvgPc}
          title={"Full Home"}
          subTitle={"Get an approximate costing to makeover your dream home."}
        ></PriceCalculatorHomeCard>
        <PriceCalculatorHomeCard
          image={KitchenSVGPc}
          imageright={CalcuteSvgPc}
          title={"Kitchen"}
          subTitle={"Get an approximate costing of your luxary Kitchen"}
        ></PriceCalculatorHomeCard>
        <PriceCalculatorHomeCard
          image={WorddrobeSvgPc}
          imageright={CalcuteSvgPc}
          title={"Wardrobe"}
          subTitle={"Get an approximate costing of your utility Wordrobe."}
        ></PriceCalculatorHomeCard>
      </div>
    </Element>
  );
};

export default PriceCalculatorHome;
