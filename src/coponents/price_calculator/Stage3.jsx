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
  function content() {
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
        return <>kitchen</>;
      }
      case "Wardrobe": {
        return <>worddrobe</>;
      }
    }
  }
  return <>{content()}</>;
};

export default Stage3;
