import {Routes, Route} from 'react-router';
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import CreateActivity from "./pages/CreateActivity.jsx";
import Profile from "./pages/Profile.jsx";
//here we difine routes only


export default function App() {
  return (
    <Routes> 
      {/* Auth */}
      <Route path="/login" element={<Login />} /> 

      {/* Main App */}
      <Route path="/feed" element={<Feed />} />
      <Route path="/activity/:id" element={<ActivityDetail />} />
      <Route path="/create-activity" element={<CreateActivity />} />
      <Route path="/profile/:username" element={<Profile />} />

    </Routes>
  );
}
