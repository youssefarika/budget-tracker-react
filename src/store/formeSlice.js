import { createSlice } from '@reduxjs/toolkit'


  export const formeSlice = createSlice({
    name: "expend",
    initialState: [],
    reducers: {
        addexpensing: (state, action) => {
              state.push(action.payload) 
            },
        removeexpensing: (state, action) => {
              const expenses = state.filter(expense => expense.user !== action.payload.user)
              return expenses
        },
    }
  })

  export const { addexpensing, removeexpensing } = formeSlice.actions

  export default formeSlice.reducer

