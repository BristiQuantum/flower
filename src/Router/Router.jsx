import { createBrowserRouter } from "react-router-dom";
import Home_Page from "../page/Home_Page/Home_Page";
import App from "../App";
import MainCart from "../page/CartPage/MainCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home_Page></Home_Page>,
      },
      {
        path: "/cart",
        element: <MainCart></MainCart>
      },
    ],
  },
]);
