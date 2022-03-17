import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../../types";

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
    getItems: () => {},
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.value = [...action.payload]
    },
  },
});

export const { getItems, setItems } = items.actions;
export default items.reducer;
