import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
  }

  export const formdataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        adddata: (state, action) => {
              state.value.push(action.payload)   
            }
    }
  })

  export const { adddata } = formdataSlice.actions

  export default formdataSlice.reducer

