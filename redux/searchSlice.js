import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    getItems: (state, action) => {
      return action.payload
    }
  }
})

export const { getItems } = searchSlice.actions

export default searchSlice.reducer