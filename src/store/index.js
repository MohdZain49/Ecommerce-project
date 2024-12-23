import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Main/homeSlice";
import cartSlice from "./Main/cartSlice";
import dashboardSlice from "./Admin/dashboardSlice";
import productsSlice from "./Admin/productsSlice";
import transactionsSlice from "./Admin/transactionsSlice";
import ordersSlice from "./Main/ordersSlice";

const appStore = configureStore({
  reducer: {
    home: homeSlice.reducer,
    cart: cartSlice.reducer,
    dashboard: dashboardSlice.reducer,
    products: productsSlice.reducer,
    transactions: transactionsSlice.reducer,
    orders: ordersSlice.reducer,
  },
});

export default appStore;
