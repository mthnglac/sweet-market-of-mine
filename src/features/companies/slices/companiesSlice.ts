import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Company } from "../types/companies.types";

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
    getCompanies: (state, action) => {},
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.value = [...action.payload];
    },
  },
});

export const { getCompanies, setCompanies } = companies.actions;
export default companies.reducer;
