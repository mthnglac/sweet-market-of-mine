import { combineReducers } from "@reduxjs/toolkit";
import companiesReducer from "../features/companies/slices/companiesSlice";
import itemsReducer from "../features/items/slices/itemsSlice";
import cartReducer from "../features/items/components/cart/cartSlice";
import brandsReducer from "../features/items/components/brands/brandsSlice";
import siteReducer from "../features/site/slices/siteSlice";

const reducers = combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  cart: cartReducer,
  site: siteReducer,
  brands: brandsReducer,
});

export default reducers;
