import { createSlice } from "@reduxjs/toolkit"

// check localStorage after ssr
const isWindow = typeof window !== 'undefined'

// get localStorage
const cartData = isWindow && localStorage.getItem('cassiopeia-cart') ?
  JSON.parse(localStorage.getItem('cassiopeia-cart')) : null

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartData,
  reducers: {
    // add a product to cart
    addToCart: (state, action) => {
      if (isWindow) {
        // first item
        if (state === null) {
          localStorage.setItem('cassiopeia-cart', JSON.stringify({items: [action.payload]}))
          return {items: [action.payload]}
        } else {
          // check duplicate item condition
          const duplicateItem = state["items"].find(
            item => (item.id === action.payload.id) && (item.page === action.payload.page))

          // don't add duplicate item
          if (!duplicateItem) {
            state["items"].push(action.payload)
            localStorage.setItem('cassiopeia-cart', JSON.stringify(state))
          }
        }
      }
    },

    // add promocode
    addPromocode: (state, action) => {
      if (isWindow) {
        if (!state["promocode"]) {
          localStorage.setItem('cassiopeia-cart', JSON.stringify({...state, promocode: action.payload}))
          return {...state, promocode: action.payload}
        }
      }
    },

    // increase the number of product
    increasePrQuantity: (state, action) => {
      if (isWindow) {
        state["items"].forEach((item) => {
          if (item.id === action.payload.id) {
            if (item.amount < 10) {
              item.amount += 1
            }
          }
        })

        localStorage.setItem('cassiopeia-cart', JSON.stringify(state))
      }
    },

    // decrease the number of product
    decreasePrQuantity: (state, action) => {
      if (isWindow) {
        state["items"].forEach((item) => {
          if (item.id === action.payload.id) {
            if (item.amount > 1) {
              item.amount -= 1
            }
          }
        })

        localStorage.setItem('cassiopeia-cart', JSON.stringify(state))
      }
    },

    removePr: (state, action) => {
      if (isWindow) {
        state["items"].forEach((item, index) => {
          if ((item.id === action.payload.id) && (item.page === action.payload.page)) {
            // if matching item is found then create a new array without it
            state["items"].splice(index, 1)
            // set localStorage
            localStorage.setItem('cassiopeia-cart', JSON.stringify(state))
          }
        })
      }
    },

    removeAll: () => {
      if (typeof window !== 'undefined') {
        // remove cart localStorage
        localStorage.removeItem('cassiopeia-cart')

        return null
      }
    }
  }
})

export const {
  addToCart, increasePrQuantity, decreasePrQuantity, removeAll, removePr,
  addPromocode
} = cartSlice.actions

export default cartSlice.reducer