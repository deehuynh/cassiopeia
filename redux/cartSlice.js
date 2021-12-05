import { createSlice } from "@reduxjs/toolkit"

// get localStorage
const cartData = typeof window !== 'undefined' && localStorage.getItem('cart') ?
  JSON.parse(localStorage.getItem('cart')) : []

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartData,
  reducers: {
    addToCart: (state, action) => {
      if (typeof window !== 'undefined') {
        state.push(action.payload)
        localStorage.setItem('cart', JSON.stringify(state))
      }
    }
  }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer