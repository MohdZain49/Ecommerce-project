import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "home",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
