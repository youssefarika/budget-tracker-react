import { createSlice } from '@reduxjs/toolkit'



  export const formdataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        adddata: (state, action) => {
          state.push(action.payload)  
        },
        clearing: (state, action) => {
          return state.filter(person => person.text !== action.payload.text)
        }
    }
  })

  export const { adddata, clearing } = formdataSlice.actions

  export default formdataSlice.reducer

