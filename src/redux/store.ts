// toolkit 的新寫法
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./feature/filterSlice";
import cartReducer from "./feature/cartSlice";
// redux persist 數據持久化
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    filter: filterReducer,
    cart: cartReducer,
  })
);

export const store = configureStore({
  // 指定reducer
  reducer: persistedReducer,
  // 這裏使用中間件
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// 類型定義
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
