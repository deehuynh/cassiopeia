import { createSlice } from "@reduxjs/toolkit"

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    flowers: [],
    plants: [],
    gifts: []
  },
})

export default pageSlice.reducer