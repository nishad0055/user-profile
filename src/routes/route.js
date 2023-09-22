import { createBrowserRouter } from "react-router-dom";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import Main from "../layout/Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
