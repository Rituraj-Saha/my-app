import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  phone: "",
};
const personalDetailSlice = createSlice({
  name: "personalDetailSlice",
  initialState,
  reducers: {
    storePersonalDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});
export const { storePersonalDetails } = personalDetailSlice.actions;
export default personalDetailSlice.reducer;
