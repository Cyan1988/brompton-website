import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./feature/filterSlice";
import cartReducer from "./feature/cartSlice";
/* import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer); */

const store = configureStore({
  // 指定reducer
  reducer: {
    // 按模塊管理各個切片
    filter: filterReducer,
    cart: cartReducer,
  }, // 這裏使用中間件
 /*  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), */
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export const persistor = persistStore(store);

export default store;
