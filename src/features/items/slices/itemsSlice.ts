import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item, ItemState } from "../types/items.types";

const initialState: ItemState = {
  allValue: [],
  allValueTotalCount: 0,
  filteredValue: [],
  filteredValueTotalCount: 0,
  typeToggle: "mug",
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
    setItemTypeToggle: (state, action: PayloadAction<"mug" | "shirt">) => {
      state.typeToggle = action.payload;
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
  setItemTypeToggle,
} = items.actions;
export default items.reducer;
