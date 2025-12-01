import React, { useContext } from "react";
import Parse from "parse";
import { AuthContext } from "./AuthContext";
import RedirectToLogin from "../pages/RedirectToLogin";

export const ProtectedComponent = ({ originalRoute }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? originalRoute : <RedirectToLogin />;
};
