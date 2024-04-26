import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bhkType: "1 BHK",
};
const bhkTypeSlice = createSlice({
  name: "BHK Type",
  initialState,
  reducers: {
    selectedBHK: (state, action) => {
      state.bhkType = action.payload;
    },
  },
});
export const { selectedBHK } = bhkTypeSlice.actions;
export default bhkTypeSlice.reducer;
