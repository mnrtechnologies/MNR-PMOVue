import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authPage/Login";
import ForgotPassword from "./pages/authPage/ForgotPassword";
import VerifyEmail from "./pages/authPage/VerifyEmail";
import UpdatePassword from "./pages/authPage/updatePassword";
import PrivateRoute from "./components/common/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Dashboard/Home";
import Navbar from "./components/Dashboard/Navbar";
import AiInsights from "./pages/Dashboard/AiInsights";
import AiInsights2 from "./pages/Dashboard/AiInsights2";
import ProfileManagement from "./pages/Dashboard/ProfileManagement";
import PasswordAuthentication from "./pages/Dashboard/PasswordAuthentication";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/update-password/:token" element={<UpdatePassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Redirect root to /dashboard
        <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Navbar />
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="projects" element={<AiInsights2/>} />
          <Route path="insights" element={<AiInsights/>} />
          <Route path="settings">
            <Route path="profile" element={<ProfileManagement/>} />
            <Route path="password" element={<PasswordAuthentication/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
