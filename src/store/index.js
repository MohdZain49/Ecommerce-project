import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import cartSlice from "./cartSlice";
import dashboardSlice from "./dashboardSlice";
import productsSlice from "./productsSlice";

const appStore = configureStore({
  reducer: {
    home: homeSlice.reducer,
    cart: cartSlice.reducer,
    dashboard: dashboardSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default appStore;
