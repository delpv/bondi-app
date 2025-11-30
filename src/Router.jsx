import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Feed from "./pages/Feed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import CreateActivity from "./pages/CreateActivity.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import RedirectToLogin from "./pages/RedirectToLogin.jsx";
import { ProtectedComponent } from "./context/ProtectedComponent";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<RedirectToLogin />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Register />} />

      {/* Main App */}
      <Route
        path="/feed"
        element={<ProtectedComponent originalRoute={<Feed />} />}
      />

      <Route
        path="/activity/:id"
        element={<ProtectedComponent originalRoute={<ActivityDetail />} />}
      />
      <Route
        path="/create-activity"
        element={<ProtectedComponent originalRoute={<CreateActivity />} />}
      />
      <Route
        path="/profile"
        element={<ProtectedComponent originalRoute={<Profile />} />}
      />
      <Route
        path="/profile/:username"
        element={<ProtectedComponent originalRoute={<Profile />} />}
      />
<<<<<<< HEAD
=======
      {/* Main App */}
      <Route path="/feed" element={<Feed userObject={userObject} />} />
      <Route path="/activity/:slug" element={<ActivityDetail />} />
      <Route path="/create-activity" element={<CreateActivity />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:username" element={<Profile />} />
>>>>>>> 0a1be3c (fixed conflict in Main, HostCard)
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
