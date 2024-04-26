import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wordrobeHeight: "4 ft",
};
const worddrobeHeightSlice = createSlice({
  name: "worddrobeHeight",
  initialState,
  reducers: {
    wordDrobeHeightSelector: (state, action) => {
      state.wordrobeHeight = action.payload;
    },
  },
});
export const { wordDrobeHeightSelector } = worddrobeHeightSlice.actions;
export default worddrobeHeightSlice.reducer;
