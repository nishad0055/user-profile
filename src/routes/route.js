import { createBrowserRouter } from "react-router-dom";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
  },
]);
