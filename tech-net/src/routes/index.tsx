import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import NotFount from "../pages/NotFount";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFount />,
  },
]);
