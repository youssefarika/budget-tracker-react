import { createSlice } from '@reduxjs/toolkit'

let currentState = localStorage.getItem("budget") ? JSON.parse(localStorage.getItem("budget")) : []


export const formdataSlice = createSlice({
  name: "data",
  initialState: currentState,
  reducers: {
      adddata: (state, action) => {
          state.push(action.payload)
          localStorage.setItem("budget", JSON.stringify(state))
      },
      clearing: (state, action) => {
        state = state.filter(person => person.text !== action.payload.text)
        localStorage.setItem("budget", JSON.stringify(state))
        return state
      }
  }
});

  export const { adddata, clearing } = formdataSlice.actions

  export default formdataSlice.reducer

