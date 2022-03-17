import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "./cart.types";

export interface CartState {
  value: Cart;
}

const initialState: CartState = {
  value: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItems: () => {},
    setItems: (state, action: PayloadAction<Cart>) => {
      state.value = [...action.payload]
    },
  },
});

export const { getItems, setItems } = cart.actions;
export default cart.reducer;
