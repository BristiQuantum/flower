import { createBrowserRouter } from "react-router-dom";
import Home_Page from "../page/Home_Page/Home_Page";
import App from "../App";
import MainCart from "../page/CartPage/MainCart";
import AllFlowerPage from "../page/AllFlowerPage/AllFlowerPage";

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
      {
        path: "/all-flower",
        element: <AllFlowerPage></AllFlowerPage>
      },
    ],
  },
]);
