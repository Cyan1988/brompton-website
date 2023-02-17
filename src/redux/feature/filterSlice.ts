import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsList from "../../data/products_list.json";

const initialState: {
  title: string;
  img_url: string;
  price: string;
  weight: string;
  text: string;
  series: string;
  details: string;
  logo: string;
  id: string;
}[] = productsList;

const filterSlice = createSlice({
  // 命名空間，name值作爲action type的前綴
  name: "filter",
  initialState,
  // 編寫不同邏輯下，對公共狀態的更改
  reducers: {
    result: (state, action: PayloadAction<string>) => {
      state = initialState;
      return state.filter((item) =>
        item.title.toUpperCase().includes(action.payload.toUpperCase())
      );
    },
  },
});

// 從切片中獲取actionCreator
export const { result } = filterSlice.actions;

// 從切片中獲取reducer
export default filterSlice.reducer;
