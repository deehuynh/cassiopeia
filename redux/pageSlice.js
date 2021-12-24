import { createSlice } from "@reduxjs/toolkit"

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    flowers: [],
    plants: [],
    gifts: []
  },
  reducers: {
    orderBy: (state, action) => {
      switch (action.payload.orderBy) {
        case 'priceLowToHigh':
          return state
      }
    }
  }
})

export const { orderBy } = pageSlice.actions

export default pageSlice.reducer