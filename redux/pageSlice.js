import { createSlice } from "@reduxjs/toolkit"

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
      switch (sortBy) {
        case 'priceLowToHigh':
          let swap = false
          let tmp
          for (let i = 0; i < pageData.length - 1; i++) {
            swap = false
            for (let j = i + 1; j < pageData.length; j++) {
              if (Number(pageData[i].price) > Number(pageData[j].price)) {
                tmp = pageData[i]
                pageData[i] = pageData[j]
                pageData[j] = tmp
                swap = true
              }
            }
          }
        return {...state, [pageName]: pageData}
      }
    }
  }
})

export const { sortBy } = pageSlice.actions

export default pageSlice.reducer