import React from "react";
import { Element } from "react-scroll";
import "./PriceCal.css";
import PriceCalSpaceType from "./PriceCalSpaceType";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import {
  nextStagePriceCal,
  backStagePriceCal,
} from "../../features/priceCalState/priceCalStageSlice";
import { useSelector } from "react-redux";
import PriceCalPkgSelector from "./PriceCalPkgSelector";
const PriceCal = () => {
  const dispatch = useDispatch();

  const priceCalStage = useSelector(
    (state) => state.priceCalStageReducer.priceCalStage
  );
  const nextButtonHandler = () => {
    dispatch(nextStagePriceCal());
    console.log("priceCal on Next:" + JSON.stringify(priceCalStage));
  };
  const backButtonHandler = () => {
    dispatch(backStagePriceCal());
    console.log("priceCal on Back:" + priceCalStage);
  };
  function test() {
    console.log("inside switch:");
    switch (priceCalStage) {
      case 1:
        return <PriceCalSpaceType />;

      case 2:
        // code block
        return <PriceCalPkgSelector />;
      default:
        return <PriceCalSpaceType />;
    }
  }

  return (
    <Element name="priceCal" className="priceCal" id="priceCal">
      <div className="priceCalParent">
        <div className="price-cal-top">
          <div className="price-cal-step">
            <div className="price-cal-step-circle"></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div className="price-cal-step-circle"></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div className="price-cal-step-circle"></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div className="price-cal-step-circle"></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div className="price-cal-step-circle"></div>
          </div>
        </div>
        <Divider></Divider>
        <div className="priceCalContent">{test()}</div>
        <div className="price-cal-button">
          <div className="price-cal-back" onClick={backButtonHandler}>
            Back
          </div>
          <div className="price-cal-next" onClick={nextButtonHandler}>
            Next
          </div>
        </div>
      </div>
    </Element>
  );
};

export default PriceCal;
