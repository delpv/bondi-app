import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import ScrollToTop from "./pages/ScrollToTop";

import { BrowserRouter, Routes } from "react-router-dom";
import Router from "./Router.jsx";
import "./utils/parseConfig.js";
import { AuthProvider } from "./context/AuthProvider.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <ScrollToTop />
      <Router />
=======
      <ScrollToTop />
>>>>>>> 0a1be3c (fixed conflict in Main, HostCard)
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

//here is the only place when using ReactDOM.createRoot and wrap providers like the router.
