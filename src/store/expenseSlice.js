import { createSlice } from '@reduxjs/toolkit'


  export const expenseSlice = createSlice({
    name: "expense",
    initialState: [],
    reducers: {
        addexpense: (state, action) => {
          state.push(action.payload)    
        }
    }
  })

  export const { addexpense } = expenseSlice.actions

  export default expenseSlice.reducer

