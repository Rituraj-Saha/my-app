import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  priceCalStage: 2,
};

export const priceCalStageSlice = createSlice({
  name: "priceCalStage",
  initialState,
  reducers: {
    nextStagePriceCal: (state, action) => {
      state.priceCalStage = state.priceCalStage + 1;

      if (state.priceCalStage > 5) {
        state.priceCalStage = 2;
      }
    },
    backStagePriceCal: (state, action) => {
      state.priceCalStage = state.priceCalStage - 1;

      if (state.priceCalStage == 0) {
        state.priceCalStage = 2;
      }
    },
  },
});

export const { nextStagePriceCal, backStagePriceCal } =
  priceCalStageSlice.actions;

export default priceCalStageSlice.reducer;
