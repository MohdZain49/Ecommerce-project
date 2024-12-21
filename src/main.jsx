import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import {
  Home,
  Cart,
  Orders,
  Admin,
  Dashboard,
  Products,
  Transactions,
  Customers,
  AddProduct,
  ManageProduct,
  ManageTransaction,
  Login,
  Signup,
  CompletedTransactions,
  InProgressTransactions,
  PendingTransactions,
  CancelledTransactions,
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
        path: "orders",
        element: <Orders />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <Signup />,
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
            children: [
              {
                index: true,
                element: <CompletedTransactions />,
              },
              {
                path: "completed-transactions",
                element: <CompletedTransactions />,
              },
              {
                path: "in-progress-transactions",
                element: <InProgressTransactions />,
              },
              {
                path: "pending-transactions",
                element: <PendingTransactions />,
              },
              {
                path: "cancelled-transactions",
                element: <CancelledTransactions />,
              },
              {
                path: ":transaction-type/manage/:id",
                element: <ManageTransaction />,
              },
            ],
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
