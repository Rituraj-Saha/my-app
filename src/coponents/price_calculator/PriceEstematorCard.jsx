import React from "react";

import "./PriceEstematorCard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeOfSpace } from "../../features/priceCalState/typeOfSpaceSlice";

const PriceEstematorCard = (props) => {
  const dispatch = useDispatch();
  const selectHandler = () => {
    dispatch(selectTypeOfSpace(props.spaceType));
  };
  const selected = useSelector((state) => state.typeOfSpaceReduce.typeOfSpace);
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
