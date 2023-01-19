import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
  }

  export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addexpense: (state, action) => {
              state.value.push(action.payload)    
            }
    }
  })

  export const { addexpense } = expenseSlice.actions

  export default expenseSlice.reducer

