import React from "react";
import ReactDOM from "react-dom/client";
import Feed from"./pages/Feed";
import Login from"./pages/Login"
import ActivityDetail from "./pages/ActivityDetail";
import CreateActivity from "./pages/CreateActivity";
import Profile from"./pages/Profile"
import { createBrowserRouter, RouterProvider } from "react-router";



const root = document.getElementById("root");
const router = createBrowserRouter([
  { path: "/feed", element: <Feed />, errorElement: <div>Something went wrong!</div>, },
  { path: "/login", element: <Login />, errorElement: <div>Something went wrong!</div>, },
  { path: "/activity/:id", element: <ActivityDetail />, errorElement: <div>Something went wrong!</div>, },
  { path: "/create-activity", element: <CreateActivity />, errorElement: <div>Something went wrong!</div>, },
  { path: "/profile/:username", element: <Profile />, errorElement: <div>Something went wrong!</div>, },
]);


ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <RouterProvider router={router} />  
  </React.StrictMode>,
);

//here is the only place when using ReactDOM.createRoot and wrap providers like the router.
