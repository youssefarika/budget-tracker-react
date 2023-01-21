import { createSlice } from '@reduxjs/toolkit'



  export const formdataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        adddata: (state, action) => {
          state.push(action.payload)  
        }
    }
  })

  export const { adddata } = formdataSlice.actions

  export default formdataSlice.reducer

