import React from "react";
import { Routes, Route } from "react-router";
import Login from "./Pages/Login.jsx";
import Feed from "./Pages/Feed.jsx";
import ActivityDetail from "./Pages/ActivityDetail.jsx";
import CreateActivity from "./Pages/CreateActivity.jsx";
import Profile from "./Pages/Profile.jsx";
import NotFound from "./Pages/NotFound.jsx";
import RedirectToLogin from "./Pages/RedirectToLogin.jsx";

const Router = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route index path="/" element={<RedirectToLogin />} />
      <Route path="/login" element={<Login />} />

      {/* Main App */}
      <Route path="/feed" element={<Feed />} />
      <Route path="/activity/:id" element={<ActivityDetail />} />
      <Route path="/create-activity" element={<CreateActivity />} />
      <Route path="/profile/:username" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
