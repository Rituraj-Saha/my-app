import { configureStore } from "@reduxjs/toolkit";
import priceCalStageReducer from "../features/priceCalState/priceCalStageSlice";

export const store = configureStore({
  reducer: {
    priceCalStageReducer: priceCalStageReducer,
  },
});
