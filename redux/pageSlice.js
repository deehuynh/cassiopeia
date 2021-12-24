import { createSlice } from "@reduxjs/toolkit"

// pure functions
const sortByPrice = (pageData, type) => {
  if (type === 'priceLowToHigh') {
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
    return pageData
  }
}

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
          const handledData = sortByPrice(pageData, sortBy)
        return {...state, [pageName]: handledData}
      }
    }
  }
})

export const { sortBy } = pageSlice.actions

export default pageSlice.reducer