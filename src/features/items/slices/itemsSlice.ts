import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/items.types";

export interface ItemState {
  value: Item[];
}

const initialState: ItemState = {
  value: [],
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItems: (state, action) => {},
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.value = [...action.payload];
    },
    filterItemsBySlug: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.slug === action.payload)
    }
  },
});

export const { getItems, setItems, filterItemsBySlug } = items.actions;
export default items.reducer;
