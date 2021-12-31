import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    name: '',
    phone: '',
    gender: ''
  },
  reducers: {
    onChangeName: (state, action) => {
      state.name = action.payload.value
    },

    onChangePhone: (state, action) => {
      state.phone = action.payload.value
    }
  }
})

export const { onChangeName, onChangePhone } = checkoutSlice.actions

export default checkoutSlice.reducer