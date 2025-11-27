import React, { useState, useEffect } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const hadleUser = async () => {
    setIsLoading(true);
    try {
      const storageUserid = localStorage.getItem("parseUserId");
      if (storageUserid) {
        const userQuery = new Parse.Query("USER");

        const userGet = await userQuery.get(storageUserid);
        const hostJson = await userGet.toJSON();

        if (hostJson) {
          setUser(hostJson);
          setIsAuthenticated(true);
          navigate("/feed");
        }
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const userQuery = new Parse.Query("USER");

      userQuery.equalTo("email", email);
      userQuery.equalTo("password", password);

      const user = await userQuery.first();
      const userJson = await user.toJSON();

      if (userJson) {
        setUser(userJson);
        localStorage.setItem("parseUserId", userJson.objectId);
        setIsAuthenticated(true);

        navigate("/feed");
      } else {
        throw new Error("Email or password are wrong.");
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const handleRegister = async (email, fullname, username, password) => {
    try {
      const userQuery1 = new Parse.Query("USER");
      const userQuery2 = new Parse.Query("USER");

      userQuery1.equalTo("email", email);
      userQuery2.equalTo("username", username);

      const user = await Parse.Query.or(userQuery1, userQuery2).first();

      if (user) {
        throw "Email or username already exists";
      }

      const userObj = new Parse.Object("USER");

      userObj.set("email", email);
      userObj.set("fullName", fullname);
      userObj.set("username", username);
      userObj.set("password", password);

      const result = await userObj.save();
      const resultJson = await result.toJSON();
      if (resultJson) {
        setUser(resultJson);
        localStorage.setItem("parseUserId", resultJson.objectId);
        setIsAuthenticated(true);
        navigate("/feed");
      }
    } catch (e) {
      throw e.message;
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("parseUserId");
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    hadleUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        setUser,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {isLoading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};
