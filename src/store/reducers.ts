import { combineReducers } from "@reduxjs/toolkit";
import companiesReducer from "./companies/companiesSlice";
import itemsReducer from "./items/itemsSlice";
//import cartReducer from "./cart/cartSlice";

const reducers = combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  //cart: cartReducer,
});

export default reducers;
