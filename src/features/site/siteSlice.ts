import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Site } from "./site.types";

const initialState: Site = {
  page: 1,
  limit: 16,
  sorting: "price",
  ordering: "asc",
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
  },
});

export const {
  incrementPage,
  decrementPage,
  setPage,
  setLimit,
  setSorting,
  setOrdering,
} = site.actions;
export default site.reducer;
