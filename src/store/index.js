import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import cartSlice from "./cartSlice";
import dashboardSlice from "./dashboardSlice";
import productsSlice from "./productsSlice";
import transactionsSlice from "./Admin/transactionsSlice";
import ordersSlice from "./ordersSlice";

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
