import { configureStore } from '@reduxjs/toolkit'
import expense from "./expenseSlice"
import data from "./formdataSlice"
import expend from "./formeSlice"

export const store = configureStore({
  reducer: {
    expense,
    data,
    expend,
  },
})