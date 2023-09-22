// src/App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
