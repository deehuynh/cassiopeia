// redux toolkit
import { createSlice } from "@reduxjs/toolkit"
// handle logic functions
import handleSortBy from "./pure_functions/handleSortBy"
import handleSelectByPrice from "./pure_functions/handleSelectByPrice"

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    flowers: [],
    plants: [],
    gifts: []
  },
  reducers: {
    sortBy: (state, action) => {
      const pageName = action.payload.pageName
      const pageData = action.payload.pageData
      const sortBy = action.payload.sortBy
      const handledData = handleSortBy(pageData, sortBy)

      return {...state, [pageName]: handledData}
    },

    selectPrice: (state, action) => {
      const pageName = action.payload.pageName
      const pageData = action.payload.pageData
      const optionPrice = action.payload.option
      const handledData = handleSelectByPrice(pageData, optionPrice)

      return {...state, [pageName]: handledData}
    }
  }
})

export const { sortBy, selectPrice } = pageSlice.actions

export default pageSlice.reducer