import React from "react";

import "./PriceEstematorCard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeOfSpace } from "../../features/priceCalState/typeOfSpaceSlice";
import { setWordDrobeType } from "../../features/priceCalState/stage3Store/WorddrobeTypeSelector";

const PriceEstematorCard = (props) => {
  const dispatch = useDispatch();

  const selectHandler = () => {
    console.log("used for: " + props.usedFor);
    if (props.usedFor == "priceEsetematorType") {
      dispatch(selectTypeOfSpace(props.spaceType));
    } else if (props.usedFor == "worddrobeType") {
      dispatch(setWordDrobeType(props.spaceType));
    }
  };
  const selectedSpace = useSelector(
    (state) => state.typeOfSpaceReduce.typeOfSpace
  );
  const selectedWord = useSelector(
    (state) => state.WorddeobeTypeSelectorReduce.worddrobeType
  );
  var selected;
  if (props.usedFor == "priceEsetematorType") {
    selected = selectedSpace;
  } else if (props.usedFor == "worddrobeType") {
    selected = selectedWord;
  }
  return (
    <div className="price-esteem-parent" onClick={selectHandler}>
      <img src={props.image} alt="" />
      <span>{props.spaceType}</span>
      <span>{props.spaceDesc} </span>
      <div className="price-estem-select-type-btn">
        {selected == props.spaceType ? (
          <div className="inner-circle"></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PriceEstematorCard;
