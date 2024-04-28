import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  livingroom: 1,
  Kitchen: 1,
  Bedroom: 1,
  Bathroom: 1,
  Dining: 1,
};
const fullHomeSlice = createSlice({
  name: "fullHomeStage3",
  initialState,
  reducers: {
    incLiv: (state, action) => {
      if (state.livingroom < 6) {
        state.livingroom = state.livingroom + 1;
      }
    },
    incKitchen: (state, action) => {
      if (state.Kitchen < 6) {
        state.Kitchen = state.Kitchen + 1;
      }
    },
    incBedroom: (state, action) => {
      if (state.Bedroom < 6) {
        state.Bedroom = state.Bedroom + 1;
      }
    },
    incBathroom: (state, action) => {
      if (state.Bathroom < 6) {
        state.Bathroom = state.Bathroom + 1;
      }
    },
    incDining: (state, action) => {
      if (state.Dining < 6) {
        state.Dining = state.Dining + 1;
      }
    },

    decLiv: (state, action) => {
      if (state.livingroom > 0) {
        state.livingroom = state.livingroom - 1;
      }
    },
    decKitchen: (state, action) => {
      if (state.Kitchen > 0) {
        state.Kitchen = state.Kitchen - 1;
      }
    },
    decBedroom: (state, action) => {
      if (state.Bedroom > 0) {
        state.Bedroom = state.Bedroom - 1;
      }
    },
    decBathroom: (state, action) => {
      if (state.Bathroom > 0) {
        state.Bathroom = state.Bathroom - 1;
      }
    },
    decDining: (state, action) => {
      if (state.Dining > 0) {
        state.Dining = state.Dining - 1;
      }
    },
    manualQuantitySelector: (state, action) => {
      console.log(JSON.stringify(action.payload));
      state.livingroom = action.payload.livingroom;
      state.Kitchen = action.payload.Kitchen;
      state.Bedroom = action.payload.Bedroom;
      state.Bathroom = action.payload.Bathroom;
      state.Dining = action.payload.Dining;
    },
  },
});

export const {
  incLiv,
  incKitchen,
  incBedroom,
  incBathroom,
  incDining,
  decLiv,
  decKitchen,
  decBedroom,
  decBathroom,
  decDining,
  manualQuantitySelector,
} = fullHomeSlice.actions;
export default fullHomeSlice.reducer;
