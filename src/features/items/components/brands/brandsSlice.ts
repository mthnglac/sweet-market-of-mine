import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Company } from "../../../companies/types/companies.types";
import type { Brands } from "./brands.types";

const initialState: Brands = {
  selections: [],
};

const brands = createSlice({
  name: "brands",
  initialState,
  reducers: {
    pushSelection: (state, action: PayloadAction<Company>) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action: PayloadAction<number>) => {
      state.selections.splice(action.payload, 1);
    },
  },
});

export const { pushSelection, removeSelection } = brands.actions;
export default brands.reducer;
