import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  a: "0 ft",
  b: "0 ft",
  c: "0 ft",
};
const kitchenLayoutMeasurementSlice = createSlice({
  name: "kitchenLayoutMeasurementSlice",
  initialState,
  reducers: {
    kitcheMeasurementseta: (state, action) => {
      state.a = action.payload;
    },
    kitcheMeasurementsetb: (state, action) => {
      state.b = action.payload;
    },
    kitcheMeasurementsetc: (state, action) => {
      state.c = action.payload;
    },
  },
});
export const {
  kitcheMeasurementseta,
  kitcheMeasurementsetb,
  kitcheMeasurementsetc,
} = kitchenLayoutMeasurementSlice.actions;
export default kitchenLayoutMeasurementSlice.reducer;
