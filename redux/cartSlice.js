import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    name: 'test'
  },
  reducers: {
    addToCart: state => {
      state
    }
  }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer