import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    data: []
  },
  reducers: {
    getItems: (state, action) => {
      state.data = action.payload
    },

    setValue: (state, action) => {
      // get input value
      state.value = action.payload
    }
  }
})

export const { getItems, setValue } = searchSlice.actions

export default searchSlice.reducer