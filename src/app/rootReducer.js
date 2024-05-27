import { combineReducers } from 'redux';
import priceCalStageReducer from "../features/priceCalState/priceCalStageSlice";
import typeOfSpaceReduce from "../features/priceCalState/typeOfSpaceSlice";
import bhkTypeSliceReduce from "../features/priceCalState/stage2Store/bhkTypeSlice";
import kitchenLayoutSliceReduce from "../features/priceCalState/stage2Store/kitchenLayoutSlice";
import worddrobeHeightReduce from "../features/priceCalState/stage2Store/worddrobeHeightSlice";
import fullHomeReducer from "../features/priceCalState/stage3Store/FullflatSlice";
import KitchenLayoutmeasurementReducer from "../features/priceCalState/stage3Store/KitchenLayoutmeasurementSlice";
import WorddeobeTypeSelectorReduce from "../features/priceCalState/stage3Store/WorddrobeTypeSelector";
import pkgSlectorReduce from "../features/priceCalState/stage4store/PackageSlice";
import personalDetaiRedcer from "../features/getQuoteState/PersonalDetailsSlice";

const appReducer = combineReducers({
   
        // Your reducers go here
        priceCalStageReducer: priceCalStageReducer,
        typeOfSpaceReduce: typeOfSpaceReduce,
        bhkTypeSliceReduce: bhkTypeSliceReduce,
        kitchenLayoutSliceReduce: kitchenLayoutSliceReduce,
        worddrobeHeightReduce: worddrobeHeightReduce,
        KitchenLayoutmeasurementReducer: KitchenLayoutmeasurementReducer,
        fullHomeReducer: fullHomeReducer,
        WorddeobeTypeSelectorReduce: WorddeobeTypeSelectorReduce,
        pkgSlectorReduce: pkgSlectorReduce,
        personalDetaiRedcer: personalDetaiRedcer,
    
  });
  const rootReducer = (state, action) => {
    if (action.type === 'reset') {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
  export default rootReducer;