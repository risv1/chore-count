import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Chores from "./pages/Chores";
import NewChore from "./components/NewChore";
import Home from "./pages/Home";
import Description from "./components/home/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Description />
          }
        ]
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chores",
        element: <Chores />,
        children: [
          {
            path: "new-chore",
            element: <NewChore />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
