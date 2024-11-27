import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Inventory from "./pages/Inventory.jsx";
import Profile from "./pages/Profile.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/inventory/:categoryId",
        element: <CategoryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
