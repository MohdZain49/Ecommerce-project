import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data";

const { homeItems } = data;

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    placedOrders: (state, action) => {
      const newState = [...action.payload, ...state];
      return newState;
    },
    cancelOrder: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const ordersSliceActions = ordersSlice.actions;
export default ordersSlice;
