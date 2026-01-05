import React, { useState, useEffect } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.jsx";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const user = await Parse.User.logIn(email, password);

      if (user) {
        setIsAuthenticated(true);

        navigate("/feed");
      } else {
        throw new Error("Email or password are wrong.");
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const handleRegister = async (email, fullname, password) => {
    try {
      const userQuery2 = new Parse.Query("_User");

      userQuery2.equalTo("username", email);

      const userExists = await userQuery2.first();

      if (userExists) {
        throw { message: "Email already exists" };
      }

      const user = new Parse.User();

      user.set("username", email);
      user.set("password", password);
      user.set("fullName", fullname);
      user.set("profilePiture", "defaultAvatar.jpg");

      const result = await user.signUp();

      if (result) {
        setIsAuthenticated(true);
        navigate("/feed");
      }
    } catch (e) {
      throw e.message;
    }
  };

  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      setIsAuthenticated(false);
      sessionStorage.removeItem("lastVisitedRoute");
      navigate("/login");
    } catch (e) {
      console.error("Error logging out:", e);
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  useEffect(() => {
    const hadleUser = async () => {
      setIsLoading(true);
      try {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser) {
          setIsAuthenticated(true);
          const lastVisitedRoute = sessionStorage.getItem("lastVisitedRoute");
          if (lastVisitedRoute) {
            navigate(lastVisitedRoute);
          } else {
            navigate("/feed");
          }
        }
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    hadleUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {isLoading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};
