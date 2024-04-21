import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  typeOfSpace: "Full Home",
};
export const typeOfSpaceSlice = createSlice({
  name: "typeOfSpace",
  initialState,
  reducers: {
    selectTypeOfSpace: (state, action) => {
      state.typeOfSpace = action.payload;
    },
  },
});
export const { selectTypeOfSpace } = typeOfSpaceSlice.actions;
export default typeOfSpaceSlice.reducer;
