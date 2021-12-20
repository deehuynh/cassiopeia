import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    searchKey: '',
    typingTimeout: null,
    data: []
  },
  reducers: {
    getItems: (state, action) => {
      state.data = action.payload
    },

    setValue: (state, action) => {
      // get input value
      state.value = action.payload
    },

    setSearchKey: (state, action) => {
      state.searchKey = action.payload
    }
  }
})

export const { getItems, setValue, setSearchKey } = searchSlice.actions

export default searchSlice.reducer