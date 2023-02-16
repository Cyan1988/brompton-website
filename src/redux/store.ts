import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./feature/filterSlice"

const store = configureStore({
    // 指定reducer
    reducer:{
        // 按模塊管理各個切片
        filter: filterReducer
    } // 這裏使用中間件
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store