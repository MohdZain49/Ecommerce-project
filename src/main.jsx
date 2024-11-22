import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import {
  Home,
  Cart,
  Admin,
  Dashboard,
  Products,
  Transactions,
  Customers,
  AddProduct,
  ManageProduct,
  ManageTransaction,
  Login,
} from "./index.js";
import appStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "products/new-product",
            element: <AddProduct />,
          },
          {
            path: "products/manage/:id",
            element: <ManageProduct />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },
          {
            path: "transaction/manage/:id",
            element: <ManageTransaction />,
          },
          {
            path: "customers",
            element: <Customers />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);