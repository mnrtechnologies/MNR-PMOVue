import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authPage/Login";
import ForgotPassword from "./pages/authPage/ForgotPassword";
import VerifyEmail from "./pages/authPage/VerifyEmail";
import UpdatePassword from "./pages/authPage/updatePassword";
import PrivateRoute from "./components/common/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

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
              <Dashboard/>
            </PrivateRoute>
          }
        >
          {/* <Route index element={} />
          <Route path="projects" element={} /> */}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
