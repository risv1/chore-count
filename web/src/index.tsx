import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Chores from "./pages/Chores";
import NewChore from "./components/chores/NewChore";
import Description from "./components/home/Description";
import { SessionProvider } from "./SessionContext";
import Profile from "./pages/Profile";
import DayChores from "./components/chores/DayChores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Description />},
      {
        path: "/chores",
        element: <Chores />,
        children: [
          {
            path: "new-chore",
            element: <NewChore />,
          },
          {
            path: ":day",
            element: <DayChores />
          }
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </React.StrictMode>
);
