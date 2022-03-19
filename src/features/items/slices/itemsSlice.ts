import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/items.types";

export interface ItemState {
  allValue: Item[];
  filteredValue: Item[];
}

const initialState: ItemState = {
  allValue: [],
  filteredValue: [],
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
    setFilteredItems: (state, action: PayloadAction<Item[]>) => {
      state.filteredValue = [...action.payload];
    },
  },
});

export const { getAllItems, getFilteredItems, setAllItems, setFilteredItems } = items.actions;
export default items.reducer;
