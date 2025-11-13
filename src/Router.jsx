import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import CreateActivity from "./pages/CreateActivity.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import RedirectToLogin from "./pages/RedirectToLogin.jsx";

const Router = () => {
  const [userObject, setUserObject] = useState(undefined);

  return (
    <Routes>
      {/* Auth */}
      <Route index path="/" element={<RedirectToLogin />} />

      <Route
        path="/login"
        element={<Login onGetLogin={(login) => setUserObject(login)} />}
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
