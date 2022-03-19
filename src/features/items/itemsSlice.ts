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
    fetchItems: (state, action) => {},
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.value = [...action.payload]
    },
  },
});

export const { fetchItems, setItems } = items.actions;
export default items.reducer;
