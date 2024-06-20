import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboarding from "./Components/Onboarding";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Menus from "./Components/Menu";
import Followers from "./Components/Followers";
import Chat from "./Components/Chat";
import Profile from "./Components/Profile";
import Notifications from "./Components/Notifications";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/menus" element={<Menus/>} />
        <Route path="/followers" element={<Followers/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/notifications" element={<Notifications/>} />
      </Routes>
    </Router>
  );
};

export default App;
