import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/dashboard/dashboard";
import Home from "./pages/home";
import Landing from "./pages/landing";
import LogIn from "./pages/logIn";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile";
import SignUp from "./pages/signUp";
import Statistics from "./pages/statistics";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/home" element={<Home />} />

        <Route path="/user" element={<Dashboard />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="Statistics" element={<Statistics />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
