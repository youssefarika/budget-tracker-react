import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
  }

  export const formeSlice = createSlice({
    name: "expend",
    initialState,
    reducers: {
        addexpensing: (state, action) => {
              state.value.push(action.payload)   
            }
    }
  })

  export const { addexpensing } = formeSlice.actions

  export default formeSlice.reducer

