import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Feed from "./pages/Feed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import CreateActivity from "./pages/CreateActivity.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import RedirectToLogin from "./pages/RedirectToLogin.jsx";
import Parse from "parse";

const Router = () => {
  const [userObject, setUserObject] = useState(undefined);

  const handleUserObject = (localUserObject) => {
    sessionStorage.setItem("userId", localUserObject.id);
    setUserObject(localUserObject);
  };

  useEffect(() => {
    const savedItemSession = sessionStorage.getItem("userId");
    if (savedItemSession) {
      const getUser = async () => {
        const userQuery = new Parse.Query("USER");

        userQuery.equalTo("objectId", savedItemSession);

        const user = await userQuery.first();
        console.log("user", user.toJSON());
        setUserObject(user.toJSON());
      };

      getUser();
    }
  }, []);

  return (
    <Routes>
      {/* Auth */}
      <Route index path="/" element={<RedirectToLogin />} />

      <Route
        path="/login"
        element={<Login onGetLogin={(login) => handleUserObject(login)} />}
      />

      <Route
        path="/signup"
        element={<Register onRegister={(login) => handleUserObject(login)} />}
      />

      {/* Main App */}
      <Route path="/feed" element={<Feed userObject={userObject} />} />
      <Route path="/activity/:id" element={<ActivityDetail />} />
      <Route path="/create-activity" element={<CreateActivity />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
