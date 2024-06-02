import { createBrowserRouter } from "react-router-dom";
import Home_Page from "../page/Home_Page/Home_Page";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home_Page></Home_Page>,
      },
    ],
  },
]);
