import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SiteState } from "../types/site.types";

const initialState: SiteState = {
  page: 1,
  limit: 16,
  sorting: "price",
  ordering: "asc",
  brands: [],
  tags: [],
  showCart: false,
};

const site = createSlice({
  name: "site",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    setOrdering: (state, action: PayloadAction<string>) => {
      state.ordering = action.payload;
    },
    setBrands: (state, action: PayloadAction<string[]>) => {
      state.brands = [...action.payload];
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = [...action.payload];
    },
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
  },
});

export const {
  incrementPage,
  decrementPage,
  setPage,
  setLimit,
  setSorting,
  setOrdering,
  setBrands,
  setTags,
  setShowCart,
} = site.actions;
export default site.reducer;
