import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Stage2.css";
import { selectedBHK } from "../../features/priceCalState/stage2Store/bhkTypeSlice";
import { selectedKitchenType } from "../../features/priceCalState/stage2Store/kitchenLayoutSlice";
import { wordDrobeHeightSelector } from "../../features/priceCalState/stage2Store/worddrobeHeightSlice";
import LShapedKitchen from "../../res/Lshaped.png";
import ParallelKitchenTemp from "../../res/parallel.png";
import StreightKitchenTemp from "../../res/streight.png";
import UshapedKitchenTemp from "../../res/ushaped.png";
const Stage2 = () => {
  const dispatch = useDispatch();
  const dispatchKitchen = useDispatch();
  const dispatchWorddrobe = useDispatch();
  const typeOfSpace = useSelector(
    (state) => state.typeOfSpaceReduce.typeOfSpace
  );
  const selctedBhkType = useSelector(
    (state) => state.bhkTypeSliceReduce.bhkType
  );
  const mselectedKitchenType = useSelector(
    (state) => state.kitchenLayoutSliceReduce.kitchenType
  );
  const selectedWorddrobeHeight = useSelector(
    (state) => state.worddrobeHeightReduce.wordrobeHeight
  );
  function handleBHKSelector(bhkType) {
    // console.log(bhkType);
    dispatch(selectedBHK(bhkType));
  }
  function handleKitchenSelector(kitchenShape) {
    // console.log(bhkType);
    dispatchKitchen(selectedKitchenType(kitchenShape));
  }
  function handleWordDrobeSelector(worddrobeHeight) {
    dispatchWorddrobe(wordDrobeHeightSelector(worddrobeHeight));
  }
  function content() {
    switch (typeOfSpace) {
      case "Full Home": {
        return (
          <>
            <div className="fullHome-parent">
              <span>Select your BHK type</span>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleBHKSelector("1 BHK");
                }}
              >
                <div className="selector">
                  <div
                    className={selctedBhkType == "1 BHK" ? "inner-circle" : ""}
                  ></div>
                </div>
                <span>1 BHK</span>
              </div>

              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleBHKSelector("2 BHK");
                }}
              >
                <div className="selector">
                  <div
                    className={selctedBhkType == "2 BHK" ? "inner-circle" : ""}
                  ></div>
                </div>
                <span>2 BHK</span>
              </div>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleBHKSelector("3 BHK");
                }}
              >
                <div className="selector">
                  <div
                    className={selctedBhkType == "3 BHK" ? "inner-circle" : ""}
                  ></div>
                </div>
                <span>3 BHK</span>
              </div>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleBHKSelector("4 BHK");
                }}
              >
                <div className="selector">
                  <div
                    className={selctedBhkType == "4 BHK" ? "inner-circle" : ""}
                  ></div>
                </div>
                <span>4 BHK</span>
              </div>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleBHKSelector("5 BHK");
                }}
              >
                <div className="selector">
                  <div
                    className={selctedBhkType == "5 BHK" ? "inner-circle" : ""}
                  ></div>
                </div>
                <span>5 BHK</span>
              </div>
            </div>
          </>
        );
      }
      case "Moduler Kitchen": {
        return (
          <div className="kitchen-type-selector-wrapper">
            <span>Select your Kitchen type</span>
            <div className="kitchen-parent">
              <div className="kitchenTypeParent">
                <div className="selector">
                  <div
                    className={
                      mselectedKitchenType == "L Shaped" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <div
                  className="kitchenType"
                  onClick={() => {
                    handleKitchenSelector("L Shaped");
                  }}
                >
                  <img src={LShapedKitchen} alt="" />

                  <span>L Shaped</span>
                </div>
              </div>
              <div className="kitchenTypeParent">
                <div className="selector">
                  <div
                    className={
                      mselectedKitchenType == "Streight" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <div
                  className="kitchenType"
                  onClick={() => {
                    handleKitchenSelector("Streight");
                  }}
                >
                  <img src={StreightKitchenTemp} alt="" />

                  <span>Streight</span>
                </div>
              </div>
              <div className="kitchenTypeParent">
                <div className="selector">
                  <div
                    className={
                      mselectedKitchenType == "U Shaped" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <div
                  className="kitchenType"
                  onClick={() => {
                    handleKitchenSelector("U Shaped");
                  }}
                >
                  <img src={UshapedKitchenTemp} alt="" />

                  <span>U Shaped</span>
                </div>
              </div>
              <div className="kitchenTypeParent">
                <div className="selector">
                  <div
                    className={
                      mselectedKitchenType == "Parallel" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <div
                  className="kitchenType"
                  onClick={() => {
                    handleKitchenSelector("Parallel");
                  }}
                >
                  <img src={ParallelKitchenTemp} alt="" />

                  <span>Parallel</span>
                </div>
              </div>
            </div>
          </div>
        );
      }
      case "Wardrobe": {
        return (
          <>
            <div className="fullHome-parent">
              <span>Select your Worddrobe Height</span>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleWordDrobeSelector("4 ft");
                }}
              >
                <div className="selector">
                  <div
                    className={
                      selectedWorddrobeHeight == "4 ft" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <span>4 ft</span>
              </div>

              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleWordDrobeSelector("6 ft");
                }}
              >
                <div className="selector">
                  <div
                    className={
                      selectedWorddrobeHeight == "6 ft" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <span>6 ft</span>
              </div>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleWordDrobeSelector("7 ft");
                }}
              >
                <div className="selector">
                  <div
                    className={
                      selectedWorddrobeHeight == "7 ft" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <span>7 ft</span>
              </div>
              <div
                className="fullHome-bhk"
                onClick={() => {
                  handleWordDrobeSelector("9 ft");
                }}
              >
                <div className="selector">
                  <div
                    className={
                      selectedWorddrobeHeight == "9 ft" ? "inner-circle" : ""
                    }
                  ></div>
                </div>
                <span>9 ft</span>
              </div>
            </div>
          </>
        );
      }
    }
  }
  return <div className="stage2-parent">{content()}</div>;
};

export default Stage2;
