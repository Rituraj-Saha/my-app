import { useSelector, useDispatch } from "react-redux";
export default function usePriceCalculator() {
  const typeOfSpace = useSelector(
    (state) => state.typeOfSpaceReduce.typeOfSpace
  );
  const shapeOfKitchen = useSelector(
    (state) => state.kitchenLayoutSliceReduce.kitchenType
  );
  const sizeOfKitchenInSides = useSelector(
    (state) => state.KitchenLayoutmeasurementReducer
  );
  const selectedpackage = useSelector(
    (state) => state.pkgSlectorReduce.pkgSelector
  );
  switch (typeOfSpace) {
    case "Full Home": {
      return "Selected Full Home";
    }
    case "Moduler Kitchen": {
      let aSide = parseInt(sizeOfKitchenInSides.a.replace(/\D+/g, ""));
      let bSide = parseInt(sizeOfKitchenInSides.b.replace(/\D+/g, ""));
      let cSide = parseInt(sizeOfKitchenInSides.c.replace(/\D+/g, ""));
      switch (selectedpackage) {
        case "Standard": {
          const lowerCab = (aSide + bSide + cSide) * 3;
          const upperCab = (aSide + bSide + cSide) * 4;
          console.log(
            "lowerCab: " + lowerCab + " upper: " + upperCab + " " + cSide
          );
          const price = (lowerCab + upperCab) * 1900;
          return price;
        }
        case "Premium": {
          const lowerCab = (aSide + bSide + cSide) * 3;
          const upperCab = (aSide + bSide + cSide) * 4;
          const price = (lowerCab + upperCab) * 2400;
          return price;
        }
        case "Lauxary": {
          const lowerCab = (aSide + bSide + cSide) * 3;
          const upperCab = (aSide + bSide + cSide) * 4;
          const price = (lowerCab + upperCab) * 3000;
          return price;
        }
      }
      return aSide + " -- " + bSide + " -- " + cSide + " -- ";
    }
    case "Wardrobe": {
      return "warddrobe";
    }
  }
}
// "Kitcen size => a: " +
//         sizeOfKitchenInSides.a.replace(/^\D+/g, "") +
//         " b:" +
//         sizeOfKitchenInSides.b.replace(/^\D+/g, "") +
//         "c:" +
//         sizeOfKitchenInSides.c.replace(/^\D+/g, "")
