import { createBrowserRouter } from "react-router-dom";

import UserDetails from "../components/UserDetails";
import Main from "../layout/Main";
import Home from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
