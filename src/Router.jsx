import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import CreateActivity from "./pages/CreateActivity.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import RedirectToLogin from "./pages/RedirectToLogin.jsx";

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
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
