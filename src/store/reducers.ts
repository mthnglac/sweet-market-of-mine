import { combineReducers } from "@reduxjs/toolkit";
import companiesReducer from "../features/companies/companiesSlice";
import itemsReducer from "../features/items/itemsSlice";
import cartReducer from "../features/cart/cartSlice";
import siteReducer from '../features/site/siteSlice'

const reducers = combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  cart: cartReducer,
  site: siteReducer,
});

export default reducers;
