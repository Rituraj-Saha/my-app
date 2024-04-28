import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  worddrobeType: "sliding",
};
const worddrobeSlice = createSlice({
  name: "worddrobeType",
  initialState,
  reducers: {
    setWordDrobeType: (state, action) => {
      state.worddrobeType = action.payload;
    },
  },
});
export const { setWordDrobeType } = worddrobeSlice.actions;
export default worddrobeSlice.reducer;
