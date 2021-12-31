import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    name: '',
    phone: ''
  },
  reducers: {
    onChangeName: (state, action) => {
      state.name = action.payload.value
    }
  }
})

export const { onChangeName } = checkoutSlice.actions

export default checkoutSlice.reducer