import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pkgSelector: "Standard",
};
const pkgSlectorSlice = createSlice({
  name: "pkgSelector",
  initialState,
  reducers: {
    setPkg: (state, action) => {
      state.pkgSelector = action.payload;
    },
  },
});
export const { setPkg } = pkgSlectorSlice.actions;
export default pkgSlectorSlice.reducer;
