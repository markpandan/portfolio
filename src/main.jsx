import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/home.jsx";
import Root from "./pages/root.jsx";
import "./main.css";
import { NavbarDesignProvider } from "./contexts/NavbarDesignContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarDesignProvider>
      <RouterProvider router={router} />
    </NavbarDesignProvider>
  </StrictMode>
);
