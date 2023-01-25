import { createSlice } from '@reduxjs/toolkit'

let currentState = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : []


  export const formeSlice = createSlice({
    name: "expend",
    initialState: currentState,
    reducers: {
        addexpensing: (state, action) => {
            let expenses = state.find(epxense => epxense.user === action.payload.user && epxense.text === action.payload.text)
            if(expenses) {
              return 
            }
            else {
              state.push(action.payload)
              localStorage.setItem("expense", JSON.stringify(state))
            }
            },
        removeexpensing: (state, action) => {
              state = state.filter(expense => expense.text !== action.payload.text)
              localStorage.setItem("expense", JSON.stringify(state)) 
              return state
        },
    }
  })

  export const { addexpensing, removeexpensing } = formeSlice.actions

  export default formeSlice.reducer

