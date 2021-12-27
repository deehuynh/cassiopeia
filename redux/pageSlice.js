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
      const handledData = handleSelectByPrice(pageName, pageData, optionPrice)
      
      return {...state, [pageName]: handledData}
    },

    selectType: (state, action) => {
      const pageName = action.payload.pageName
      const pageData = action.payload.pageData
      const optionType = action.payload.option
      const endData = []
      pageData.forEach((item) => {
        if (item.type !== "") {
          item.type.forEach(type => {
            if (type === optionType) {
              endData.push(item)
            }
          })
        }
      })
      
      return {...state, [pageName]: endData}
    },

    selectOccasion: (state, action) => {
      const pageName = action.payload.pageName
      const pageData = action.payload.pageData
      const occasion = action.payload.occasion
      const endData = []
      pageData.forEach((item) => {
        if (item.occasion === occasion) {
          endData.push(item)
        }
      })
      
      return {...state, [pageName]: endData}
    }
  }
})

export const { 
  sortBy, selectPrice, selectType, selectOccasion 
} = pageSlice.actions

export default pageSlice.reducer