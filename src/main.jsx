import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes } from "react-router";
import Router from "./Router.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

//here is the only place when using ReactDOM.createRoot and wrap providers like the router.
