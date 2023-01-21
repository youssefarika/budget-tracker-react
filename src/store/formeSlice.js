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
        clear: (state, action) => {
          return []
        }
    }
  })

  export const { addexpensing, removeexpensing, clear } = formeSlice.actions

  export default formeSlice.reducer

