import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "./cart.types";
import _ from "lodash";

const initialState: CartState = {
  items: [],
  total: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      state.items = [...state.items, action.payload];
    },
    popItemFromCart: (state, action: PayloadAction<CartItem>) => {
      _.remove(state.items, (cartItem: CartItem) => {
        return cartItem.item.name === action.payload.item.name;
      });
    },
    incrementCartItemCount: (state, action: PayloadAction<CartItem>) => {
      const foundItemIndex = state.items.findIndex(
        (cartItem: CartItem) => cartItem.item.name === action.payload.item.name
      );

      state.items[foundItemIndex].count++;
    },
    decrementCartItemCount: (state, action: PayloadAction<CartItem>) => {
      const foundItemIndex = state.items.findIndex(
        (cartItem: CartItem) => cartItem.item.name === action.payload.item.name
      );

      state.items[foundItemIndex].count--;
    },
    reCalculateCartTotal: (state) => {
      state.total = 0;
      state.items.forEach((cartItem: CartItem) => {
        state.total = parseFloat(
          (state.total + cartItem.item.price * cartItem.count).toFixed(2)
        );
      });
    },
  },
});

export const {
  addItemToCart,
  popItemFromCart,
  incrementCartItemCount,
  decrementCartItemCount,
  reCalculateCartTotal,
} = cart.actions;
export default cart.reducer;
