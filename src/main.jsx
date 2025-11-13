import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { BrowserRouter, Routes } from "react-router-dom";
import Router from "./Router.jsx";

import Parse from "./utils/parseConfig"; // now Parse is initialized

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

//here is the only place when using ReactDOM.createRoot and wrap providers like the router.
