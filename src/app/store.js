import { configureStore } from "@reduxjs/toolkit";
import priceCalStageReducer from "../features/priceCalState/priceCalStageSlice";
import typeOfSpaceReduce from "../features/priceCalState/typeOfSpaceSlice";
export const store = configureStore({
  reducer: {
    priceCalStageReducer: priceCalStageReducer,
    typeOfSpaceReduce: typeOfSpaceReduce,
  },
});
