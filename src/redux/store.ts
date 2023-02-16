import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./feature/filterSlice"

const store = configureStore({
    reducer:{
        filterList: filterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store