import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrders: [],
  savedOrders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state) => {
      state.currentOrders = [];
    },
    addToCart: (state, action) => {
      state.currentOrders = [...state.currentOrders, action.payload];
    },
    removeFromCart: (state, action) => {
      state.currentOrders = state.currentOrders.filter(
        (item) => item.id !== action.payload
      );
    },
    saveOrder: (state, action) => {
      state.savedOrders.push(action.payload);
    },
    removeSavedOrder: (state, action) => {
      state.savedOrders = state.savedOrders.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
