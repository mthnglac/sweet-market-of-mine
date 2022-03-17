import { combineReducers } from "@reduxjs/toolkit";
import companiesReducer from "../features/companies/companiesSlice";
import itemsReducer from "../features/items/itemsSlice";
import cartReducer from "../features/cart/cartSlice";

const reducers = combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  cart: cartReducer,
});

export default reducers;
