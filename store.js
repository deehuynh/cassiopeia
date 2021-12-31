import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"
import searchSlice from "./redux/searchSlice";
import pageSlice from "./redux/pageSlice";
import checkoutSlice from "./redux/checkoutSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSlice,
    pages: pageSlice,
    checkout: checkoutSlice
  }
})