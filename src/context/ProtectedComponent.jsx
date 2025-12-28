import React, { useContext } from "react";
import Parse from "parse";
import { AuthContext } from "./AuthContext";
import RedirectToLogin from "../pages/RedirectToLogin";

export const ProtectedComponent = ({ originalRoute }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    sessionStorage.setItem("lastVisitedRoute", window.location.pathname);
  }
  return isAuthenticated ? originalRoute : <RedirectToLogin />;
};
