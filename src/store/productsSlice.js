import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS_DEFAULT_DATA from "../assets/data/productsData";

const productsSlice = createSlice({
  name: "products",
  initialState: PRODUCTS_DEFAULT_DATA,
  reducers: {
    addProduct: (state, action) => {
      return [action.payload, ...state];
    },
  },
});

export const productsSliceActions = productsSlice.actions;
export default productsSlice;
