import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"
import searchSlice from "./redux/searchSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSlice
  }
})