import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../../types";

export interface CartState {
  value: Item[];
}

const initialState: CartState = {
  value: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItems: () => {},
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.value = [...action.payload]
    },
  },
});

export const { getItems, setItems } = cart.actions;
export default cart.reducer;
