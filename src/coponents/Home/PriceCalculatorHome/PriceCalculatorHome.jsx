import { React, useState } from "react";
import { Element } from "react-scroll";
import PriceCalculatorHomeCard from "./PriceCalculatorHomeCard";
import HomeSVGPc from "../../../res/price_calculator_svgs/home-svg-pc.svg";
import "./PriceHomeCalculator.css";
import KitchenSVGPc from "../../../res/price_calculator_svgs/kitchen-svg-pc.svg";
import WorddrobeSvgPc from "../../../res/price_calculator_svgs/wordrobe-svg-pc.svg";
import CalcuteSvgPc from "../../../res/price_calculator_svgs/calculator-svg-pc.svg";
import PriceCalculatorAlertDialog from "./PriceCalculatorAlertDialog";
import { resetStore } from "../../../app/action";
import { useDispatch } from "react-redux";
const PriceCalculatorHome = () => {
  const questions = {
    fullHome: {
      bhkType: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"],
    },
    kitchen: {},
    wordDrobe: {},
  };
  const resetDispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseClick = () => {
    resetDispatch(resetStore());
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <Element
      name="price-calculator-home"
      className="price-calculator-home"
      id="price-calculator-home"
    >
      <span style={{ fontSize: "30px", marginTop: "55px" }}>
        Get An Approximate Idea For Your Home Make over
      </span>

      {openDialog && (
        <PriceCalculatorAlertDialog handleCloseClick={handleCloseClick} />
      )}
      <div className="priceCalculatorCards">
        <PriceCalculatorHomeCard
          image={HomeSVGPc}
          imageright={CalcuteSvgPc}
          title={"Full Home"}
          subTitle={"Get an approximate costing to makeover your dream home."}
          handleOpenDialog={handleOpenDialog}
        ></PriceCalculatorHomeCard>
        <PriceCalculatorHomeCard
          image={KitchenSVGPc}
          imageright={CalcuteSvgPc}
          title={"Modular Kitchen"}
          subTitle={"Get an approximate costing of your luxary Kitchen"}
          handleOpenDialog={handleOpenDialog}
        ></PriceCalculatorHomeCard>
        <PriceCalculatorHomeCard
          image={WorddrobeSvgPc}
          imageright={CalcuteSvgPc}
          title={"Wardrobe"}
          subTitle={"Get an approximate costing of your utility Wordrobe."}
          handleOpenDialog={handleOpenDialog}
        ></PriceCalculatorHomeCard>
      </div>
    </Element>
  );
};

export default PriceCalculatorHome;
