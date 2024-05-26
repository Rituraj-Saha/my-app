import React from "react";
import { Element } from "react-scroll";
import "./PriceCal.css";
import PriceCalSpaceType from "./PriceCalSpaceType";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";

import {
  nextStagePriceCal,
  backStagePriceCal,
} from "../../features/priceCalState/priceCalStageSlice";

import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import Stage5 from "./Stage5";
import Stage6 from "./Stage6";
import useContactValidator from "../../util/useContactValidator";
const PriceCal = () => {
  const dispatch = useDispatch();

  const priceCalStage = useSelector(
    (state) => state.priceCalStageReducer.priceCalStage
  );
  const nextButtonHandler = () => {
    dispatch(nextStagePriceCal());
    // console.log("priceCal on Next:" + JSON.stringify(priceCalStage));
  };
  const backButtonHandler = () => {
    dispatch(backStagePriceCal());
    // console.log("priceCal on Back:" + priceCalStage);
  };
  var validate = useContactValidator();
  function stageSelctor() {
    switch (priceCalStage) {
      case 1:
        return <PriceCalSpaceType />;

      case 2:
        // code block
        return <Stage2 />;
      case 3:
        return <Stage3 />;
      case 4:
        return <Stage4 />;
      case 5:
        return <Stage5 />;
      case 6:
        return (
          <>{validate ? <Stage6 /> : <span>Please check the fields</span>}</>
        );
      default:
        return <PriceCalSpaceType />;
    }
  }

  return (
    <Element name="priceCal" className="priceCal" id="priceCal">
      <span>Get an approximate Budget to make your dream home</span>
      <div className="priceCalParent">
        <div className="price-cal-top">
          <div className="price-cal-step">
            <div
              className={
                "price-cal-step-circle" +
                (priceCalStage == 1 ? " price-cal-step-circle-completed" : "")
              }
            ></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div
              className={
                "price-cal-step-circle" +
                (priceCalStage == 2 ? " price-cal-step-circle-completed" : "")
              }
            ></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div
              className={
                "price-cal-step-circle" +
                (priceCalStage == 3 ? " price-cal-step-circle-completed" : "")
              }
            ></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div
              className={
                "price-cal-step-circle" +
                (priceCalStage == 4 ? " price-cal-step-circle-completed" : "")
              }
            ></div>
          </div>
          <div className="price-cal-step-line"></div>
          <div className="price-cal-step">
            <div
              className={
                "price-cal-step-circle" +
                (priceCalStage == 5 ? " price-cal-step-circle-completed" : "")
              }
            ></div>
          </div>
        </div>
        <Divider></Divider>
        <div className="priceCalContent">{stageSelctor()}</div>
        <div className="price-cal-button">
          <div
            className={
              priceCalStage == 5 ? "price-cal-back-none" : "price-cal-back"
            }
            onClick={backButtonHandler}
          >
            Back
          </div>
          <div
            className={
              priceCalStage == 5 ? "price-cal-next-none" : "price-cal-next"
            }
            onClick={nextButtonHandler}
          >
            Next
          </div>
        </div>
      </div>
    </Element>
  );
};

export default PriceCal;
