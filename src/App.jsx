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

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./services/oprations/authAPI";
import Notifications from "./pages/Dashboard/Notification";
import UserManagement from "./pages/Dashboard/Admin/UserManagement";
import AddUserForm from "./pages/Dashboard/Admin/AddUserForm";
import JiraDetails from "./pages/Dashboard/jiraDetails";
import GoogleSummaryPage from "./pages/Dashboard/GoogleSummaryPage";
import JiraSummary from "./pages/Dashboard/JiraSummary";
import GoogleDetails from "./pages/Dashboard/googleDetails"
const RedirectIfLoggedIn = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" replace /> : children;
};

const App = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

    useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

      useEffect(() => {
   
  }, [user?.image]);

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
          <Route path="insights/google-summary/:projectSlug" element={<GoogleSummaryPage/>} />
          <Route path="insights/jira-summary/:projectSlug" element={<JiraSummary/>} />
          <Route path="insights" element={<AiInsights />} />
          <Route path="insights/jira-details/:id" element={<JiraDetails/>} />
          <Route path="insights/google-details" element={<GoogleDetails/>} />
          <Route path="settings">
            <Route path="profile" element={<ProfileManagement />} />
            <Route path="password" element={<PasswordAuthentication />} />
            <Route path="user-management" element={<UserManagement/>} />
            <Route path="user-management/add-user" element={<AddUserForm/>} />
          </Route>
        </Route>

        {/* Public Pages */}
        

      </Routes>
    </Router>
  );
};

export default App;
