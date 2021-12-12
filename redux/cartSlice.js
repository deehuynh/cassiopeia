import { createSlice } from "@reduxjs/toolkit"

// check localStorage after ssr
const isWindow = typeof window !== 'undefined'

// get localStorage
const cartData = typeof window !== 'undefined' && localStorage.getItem('cart') ?
  JSON.parse(localStorage.getItem('cart')) : []

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartData,
  reducers: {
    // add a product to cart
    addToCart: (state, action) => {
      if (typeof window !== 'undefined') {
        // check duplicate item condition
        const duplicateItem = state.find(
          item => (item.id === action.payload.id) && (item.page === action.payload.page))

        // don't add duplicate item
        if (!duplicateItem) {
          state.push(action.payload)
          localStorage.setItem('cart', JSON.stringify(state))
        }
      }
    },

    // add promocode
    addPromocode: (state, action) => {
      console.log(state)
    },

    // increase the number of product
    increasePrQuantity: (state, action) => {
      if (isWindow) {
        state.forEach((item) => {
          if (item.id === action.payload.id) {
            if (item.amount < 10) {
              item.amount += 1
            }
          }
        })
      }
    },

    // decrease the number of product
    decreasePrQuantity: (state, action) => {
      if (isWindow) {
        state.forEach((item) => {
          if (item.id === action.payload.id) {
            if (item.amount > 1) {
              item.amount -= 1
            }
          }
        })
      }
    },

    removePr: (state, action) => {
      if (isWindow) {
        state.forEach((item, index) => {
          if (item.id === action.payload.id) {
            // if matching item is found then create a new array without it
            const newState = state.splice(index, 1);
            // set localStorage
            if (index === 0) {
              // get bug: if delete item have index = 0 first, all will be delete
              localStorage.removeItem('cart')
            } else {
              localStorage.setItem('cart', JSON.stringify(newState))
            }
            // return and break loop
            return newState
          }
        })
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

export const {
  addToCart, increasePrQuantity, decreasePrQuantity, removeAll, removePr,
  addPromocode
} = cartSlice.actions

export default cartSlice.reducer