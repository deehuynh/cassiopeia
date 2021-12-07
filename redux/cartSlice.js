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
        // check duplicate item condition
        const duplicateItem = state.find(item => item.id === action.payload.id)

        // don't add duplicate item
        if (!duplicateItem) {
          state.push(action.payload)
          localStorage.setItem('cart', JSON.stringify(state))
        }
      }
    },

    removeAll: (state) => {
      if (typeof window !== 'undefined') {
        // remove array without creating a new array
        state.length = 0
        // remove cart localStorage
        localStorage.removeItem('cart')
      }
    }
  }
})

export const {addToCart, removeAll} = cartSlice.actions

export default cartSlice.reducer