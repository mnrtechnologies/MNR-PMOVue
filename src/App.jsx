import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
import JiraSummaryPage from "./pages/Dashboard/jiraSummaryPage";
import { useDispatch } from "react-redux";
import { getUserDetails } from "./services/oprations/authAPI";
import Notifications from "./pages/Dashboard/Notification";
import UserManagement from "./pages/Dashboard/Admin/UserManagement";
import AddUserForm from "./pages/Dashboard/Admin/AddUserForm";

const RedirectIfLoggedIn = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" replace /> : children;
};

const App = () => {

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Auth-related routes */}
        <Route
          path="/"
          element={
            <RedirectIfLoggedIn>
              <Login />
            </RedirectIfLoggedIn>
          }
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password/:token" element={<UpdatePassword />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Dashboard />
              </>
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="notification" element={<Notifications/>} />
          <Route path="insights" element={<AiInsights />} />
          <Route path="settings">
            <Route path="profile" element={<ProfileManagement />} />
            <Route path="password" element={<PasswordAuthentication />} />
            <Route path="user-management" element={<UserManagement/>} />
            <Route path="user-management/add-user" element={<AddUserForm/>} />
          </Route>
        </Route>

        {/* Public Pages */}
        <Route path="/jira-summary/:projectSlug" element={<JiraSummaryPage />} />
        <Route path="/ai-insights/:projectSlug" element={<JiraSummaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
