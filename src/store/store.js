import { configureStore } from '@reduxjs/toolkit'
import data from "./formdataSlice"
import expend from "./formeSlice"

export const store = configureStore({
  reducer: {
    data,
    expend,
  },
})