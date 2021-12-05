import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: 'cart',
  initialState: localStorage.getItem('cart') || []
})