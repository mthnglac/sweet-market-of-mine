import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Brands } from "./brands.types";

const initialState: Brands = {
  selections: [],
};

const brands = createSlice({
  name: "brands",
  initialState,
  reducers: {
    pushSelection: (state, action: PayloadAction<string>) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action: PayloadAction<number>) => {
      state.selections.splice(action.payload, 1);
    },
    resetSelections: () => initialState,
  },
});

export const { pushSelection, removeSelection, resetSelections } = brands.actions;
export default brands.reducer;
