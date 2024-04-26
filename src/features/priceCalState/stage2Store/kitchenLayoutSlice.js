import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  kitchenType: "L Shaped",
};
const kitchenLayoutSlice = createSlice({
  name: "kitcheLayout type",
  initialState,
  reducers: {
    selectedKitchenType: (state, action) => {
      state.kitchenType = action.payload;
    },
  },
});
export const { selectedKitchenType } = kitchenLayoutSlice.actions;
export default kitchenLayoutSlice.reducer;
