import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Stage3.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  incLiv,
  incKitchen,
  incBedroom,
  incBathroom,
  incDining,
  decLiv,
  decKitchen,
  decBedroom,
  decBathroom,
  decDining,
  manualQuantitySelector,
} from "../../features/priceCalState/stage3Store/FullflatSlice";
import {
  kitcheMeasurementseta,
  kitcheMeasurementsetb,
  kitcheMeasurementsetc,
} from "../../features/priceCalState/stage3Store/KitchenLayoutmeasurementSlice";
import LshapedKitchenMes from "../../res/Lshapedmes.png";
import ushapedKitchenMes from "../../res/ushapedmes.png";
import streightKitchenMes from "../../res/streightMes.png";
import parallelKitchenMes from "../../res/parelledMes.png";
import PriceEstematorCard from "./PriceEstematorCard";
import SlidingType from "../../res/slidingWordrobe.png";
import SwingType from "../../res/swing.jpg";
import useIsMobile from "../../util/useIsMobile";
const Stage3 = () => {
  const livRoomDispatch = useDispatch();
  const kitchenDispatch = useDispatch();
  const bedroomDispatch = useDispatch();
  const bathroomDispatch = useDispatch();
  const diningDispatch = useDispatch();
  const livRoomdecDispatch = useDispatch();
  const kitchendecDispatch = useDispatch();
  const bedroomdecDispatch = useDispatch();
  const bathroomdecDispatch = useDispatch();
  const diningdecDispatch = useDispatch();
  const manualQuantitySelectorDispatch = useDispatch();
  const kitcheMeasurementsetaDispatch = useDispatch();

  const typeOfSpace = useSelector(
    (state) => state.typeOfSpaceReduce.typeOfSpace
  );
  const currentBhk = useSelector((state) => state.bhkTypeSliceReduce.bhkType);
  useEffect(() => {
    //Runs only on the first render
    if (currentBhk == "2 BHK") {
      console.log(currentBhk);
      const defaultStateOfFullFlat = {
        livingroom: 1,
        Kitchen: 1,
        Bedroom: 2,
        Bathroom: 2,
        Dining: 1,
      };
      manualQuantitySelectorDispatch(
        manualQuantitySelector(defaultStateOfFullFlat)
      );
    }
    if (currentBhk == "3 BHK") {
      console.log(currentBhk);
      const defaultStateOfFullFlat = {
        livingroom: 1,
        Kitchen: 1,
        Bedroom: 3,
        Bathroom: 3,
        Dining: 1,
      };
      manualQuantitySelectorDispatch(
        manualQuantitySelector(defaultStateOfFullFlat)
      );
    }
    if (currentBhk == "4 BHK") {
      console.log(currentBhk);
      const defaultStateOfFullFlat = {
        livingroom: 1,
        Kitchen: 1,
        Bedroom: 4,
        Bathroom: 4,
        Dining: 1,
      };
      manualQuantitySelectorDispatch(
        manualQuantitySelector(defaultStateOfFullFlat)
      );
    }
    if (currentBhk == "5 BHK") {
      console.log(currentBhk);
      const defaultStateOfFullFlat = {
        livingroom: 2,
        Kitchen: 1,
        Bedroom: 5,
        Bathroom: 5,
        Dining: 1,
      };
      manualQuantitySelectorDispatch(
        manualQuantitySelector(defaultStateOfFullFlat)
      );
    }
    if (currentKitchenType == "L Shaped") {
      kitcheMeasurementsetaDispatch(kitcheMeasurementseta("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetb("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetc("0 ft"));
    } else if (currentKitchenType == "U Shaped") {
      kitcheMeasurementsetaDispatch(kitcheMeasurementseta("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetb("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetc("6 ft"));
    } else if (currentKitchenType == "Streight") {
      kitcheMeasurementsetaDispatch(kitcheMeasurementseta("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetb("0 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetc("0 ft"));
    } else if (currentKitchenType == "Parallel") {
      kitcheMeasurementsetaDispatch(kitcheMeasurementseta("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetb("6 ft"));
      kitcheMeasurementsetaDispatch(kitcheMeasurementsetc("0 ft"));
    }
  }, []);
  const currentLivingroom = useSelector(
    (state) => state.fullHomeReducer.livingroom
  );
  const currentKitchen = useSelector((state) => state.fullHomeReducer.Kitchen);
  const currentBedroom = useSelector((state) => state.fullHomeReducer.Bedroom);
  const currentBathroom = useSelector(
    (state) => state.fullHomeReducer.Bathroom
  );
  const currentDinning = useSelector((state) => state.fullHomeReducer.Dining);

  const currentKitchenType = useSelector(
    (state) => state.kitchenLayoutSliceReduce.kitchenType
  );

  function incrFun(homeType) {
    switch (homeType) {
      case "livingroom": {
        livRoomDispatch(incLiv());
        break;
      }
      case "kitchen": {
        kitchenDispatch(incKitchen());
        break;
      }
      case "bedroom": {
        bedroomDispatch(incBedroom());
        break;
      }
      case "bathroom": {
        bathroomDispatch(incBathroom());
        break;
      }
      case "dining": {
        diningDispatch(incDining());
        break;
      }
    }
  }
  function decFun(homeType) {
    switch (homeType) {
      case "livingroom": {
        livRoomdecDispatch(decLiv());
        break;
      }
      case "kitchen": {
        kitchendecDispatch(decKitchen());
        break;
      }
      case "bedroom": {
        bedroomdecDispatch(decBedroom());
        break;
      }
      case "bathroom": {
        bathroomdecDispatch(decBathroom());
        break;
      }
      case "dining": {
        diningdecDispatch(decDining());
        break;
      }
    }
  }
  const onOptionChangeHandlerForA = (event) => {
    // setData(event.target.value);
    kitcheMeasurementsetaDispatch(kitcheMeasurementseta(event.target.value));
    console.log("User Selected Value - ");
  };
  const onOptionChangeHandlerForB = (event) => {
    // setData(event.target.value);
    kitcheMeasurementsetaDispatch(kitcheMeasurementsetb(event.target.value));
    console.log("User Selected Value - ");
  };
  const onOptionChangeHandlerForC = (event) => {
    // setData(event.target.value);
    kitcheMeasurementsetaDispatch(kitcheMeasurementsetc(event.target.value));
    console.log("User Selected Value - ");
  };
  function kitchenMeasurement() {
    // console.log("called" + currentKitchenType);
    if (currentKitchenType == "L Shaped") {
      return (
        <div className="kitchen-measurement-parent">
          <img src={LshapedKitchenMes} alt="" />
          <div className="kit-mes-selector">
            <span>A: </span>
            <select onChange={onOptionChangeHandlerForA}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
          <div className="kit-mes-selector">
            <span>B: </span>
            <select onChange={onOptionChangeHandlerForB}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
        </div>
      );
    } else if (currentKitchenType == "U Shaped") {
      return (
        <div className="kitchen-measurement-parent">
          <img src={ushapedKitchenMes} alt="" />
          <div className="kit-mes-selector">
            <span>A: </span>
            <select onChange={onOptionChangeHandlerForA}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
          <div className="kit-mes-selector">
            <span>B: </span>
            <select onChange={onOptionChangeHandlerForB}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
          <div className="kit-mes-selector">
            <span>C: </span>
            <select onChange={onOptionChangeHandlerForC}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
        </div>
      );
    } else if (currentKitchenType == "Streight") {
      return (
        <div className="kitchen-measurement-parent">
          <img src={streightKitchenMes} alt="" />
          <div className="kit-mes-selector">
            <span>A: </span>
            <select onChange={onOptionChangeHandlerForA}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
        </div>
      );
    } else if (currentKitchenType == "Parallel") {
      return (
        <div className="kitchen-measurement-parent">
          <img src={parallelKitchenMes} alt="" />
          <div className="kit-mes-selector">
            <span>A: </span>
            <select onChange={onOptionChangeHandlerForA}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
          <div className="kit-mes-selector">
            <span>B: </span>
            <select onChange={onOptionChangeHandlerForB}>
              <option value="6 ft">6 ft</option>
              <option value="7 ft">7 ft</option>
              <option value="8 ft">8 ft</option>
              <option value="9 ft">9 ft</option>
              <option value="10 ft">10 ft</option>
            </select>
          </div>
        </div>
      );
    }
  }
  function wordrobeTypeProvider(parentClassBaesedOnView) {
    return (
      <div className={parentClassBaesedOnView}>
        <PriceEstematorCard
          image={SlidingType}
          spaceType="sliding"
          spaceDesc="Get an approximate Costing for your custom wardrobe"
          usedFor="worddrobeType"
        />
        <PriceEstematorCard
          image={SwingType}
          spaceType="swing"
          spaceDesc="Get an approximate Costing for your custom wardrobe"
          usedFor="worddrobeType"
        />
      </div>
    );
  }

  function content(parentClassBaesedOnView) {
    switch (typeOfSpace) {
      case "Full Home": {
        return (
          <>
            <div className="roomSelector">
              <div className="roomTypeChipParent">
                <span>livingroom</span>
                <RemoveCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    decFun("livingroom");
                  }}
                />
                <span>{currentLivingroom}</span>

                <AddCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    incrFun("livingroom");
                  }}
                />
              </div>

              <div className="roomTypeChipParent">
                <span>Kitchen</span>
                <RemoveCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    decFun("kitchen");
                  }}
                />
                <span>{currentKitchen}</span>

                <AddCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    incrFun("kitchen");
                  }}
                />
              </div>

              <div className="roomTypeChipParent">
                <span>Bedroom</span>
                <RemoveCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    decFun("bedroom");
                  }}
                />
                <span>{currentBedroom}</span>

                <AddCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    incrFun("bedroom");
                  }}
                />
              </div>

              <div className="roomTypeChipParent">
                <span>Bathroom</span>
                <RemoveCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    decFun("bathroom");
                  }}
                />
                <span>{currentBathroom}</span>

                <AddCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    incrFun("bathroom");
                  }}
                />
              </div>

              <div className="roomTypeChipParent">
                <span>Dining</span>
                <RemoveCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    decFun("dining");
                  }}
                />
                <span>{currentDinning}</span>

                <AddCircleIcon
                  sx={{ color: "red", background: "white", fontSize: 30 }}
                  className="roomTypeChipParent-plus-minus-btn"
                  onClick={() => {
                    incrFun("dining");
                  }}
                />
              </div>
            </div>
          </>
        );
      }
      case "Moduler Kitchen": {
        return (
          <>
            <div className="kitchen-mes-st3-parent">{kitchenMeasurement()}</div>
          </>
        );
      }
      case "Wardrobe": {
        return <>{wordrobeTypeProvider(parentClassBaesedOnView)}</>;
      }
    }
  }
  return (
    <>
      {content(
        useIsMobile()
          ? "worddrobe-type-provider-mobile"
          : "worddrobe-type-provider"
      )}
    </>
  );
};

export default Stage3;
