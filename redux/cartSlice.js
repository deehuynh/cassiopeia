import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: 'cart',
  initialState: typeof window !== 'undefined' ? localStorage.getItem('cart') : []
})