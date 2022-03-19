import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item, ItemState } from "../types/items.types";

const initialState: ItemState = {
  allValue: [],
  allValueTotalCount: 0,
  filteredValue: [],
  filteredValueTotalCount: 0,
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {
    getAllItems: (state, action) => {},
    getFilteredItems: (state, action) => {},
    setAllItems: (state, action: PayloadAction<Item[]>) => {
      state.allValue = [...action.payload];
    },
    setAllItemsCount: (state, action: PayloadAction<number>) => {
      state.allValueTotalCount = action.payload;
    },
    setFilteredItems: (state, action: PayloadAction<Item[]>) => {
      state.filteredValue = [...action.payload];
    },
    setFilteredItemsCount: (state, action: PayloadAction<number>) => {
      state.filteredValueTotalCount = action.payload;
    },
  },
});

export const {
  getAllItems,
  getFilteredItems,
  setAllItems,
  setAllItemsCount,
  setFilteredItems,
  setFilteredItemsCount,
} = items.actions;
export default items.reducer;
