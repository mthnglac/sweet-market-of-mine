import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Company } from "../../types";

export interface CompanyState {
  value: Company[];
}

const initialState: CompanyState = {
  value: [],
};

const companies = createSlice({
  name: "companies",
  initialState,
  reducers: {
    getCompanies: () => {},
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.value = [...action.payload];
    },
  },
});

export const { getCompanies, setCompanies } = companies.actions;
export default companies.reducer;
