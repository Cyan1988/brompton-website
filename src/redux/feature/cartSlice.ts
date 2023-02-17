import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: 0,
  reducers: {
    countAdd: (state, action) => {
      state++;
    },
    countRemove: (state, action) => {
      state--;
    },
  },
});
