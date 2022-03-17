import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./items.types";

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
    fetchItemsByPage: (state, action) => {},
    setItemsByPage: (state, action: PayloadAction<Item[]>) => {
      state.value = [...action.payload]
    },
  },
});

export const { fetchItemsByPage, setItemsByPage } = items.actions;
export default items.reducer;
