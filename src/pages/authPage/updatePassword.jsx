import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLeftPanel from "../../components/Auth/AuthLeftPanel";
import AuthRightPanel from "../../components/Auth/AuthRightPanel";
import { resetPassword } from "../../services/oprations/authAPI";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams(); 

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      toast.error("Please fill out both fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!token) {
      toast.error("Invalid or expired token");
      return;
    }

    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <AuthLeftPanel />
      <AuthRightPanel>
        <h2 className="text-center text-xl font-semibold mb-4">
          Reset your Password
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full border px-4 py-2 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              className="w-full border px-4 py-2 rounded-md shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#04254d] text-white py-2 rounded-full font-semibold hover:bg-[#0c1c5c]"
          >
            Update Password
          </button>
        </form>
      </AuthRightPanel>
    </div>
  );
};

export default UpdatePassword;
