import React, { useState } from 'react';
import lock from "../../assets/lock.png"

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add password change logic
    console.log('Password Change Submitted:', formData);
  };

  return (
    <div className="bg-white p-10 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        <div className="bg-[#f4f8f7] rounded-xl shadow-md p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Panel */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <h2 className="text-[#002544] font-semibold text-lg leading-6">Change Password</h2>
            <p className="text-[#002544] font-semibold text-xs leading-4 mt-1">
              Enter your current and new password
            </p>
            <img
              src={lock}
              alt="Open padlock icon"
              className="mt-8"
              width={150}
              height={150}
            />
          </div>

          {/* Right Form Section */}
          <div className="flex flex-col gap-6 md:w-2/3">
            <div>
              <label htmlFor="old-password" className="text-[#7f7f7f] font-semibold text-sm leading-5">
                Old Password
              </label>
              <input
                id="oldPassword"
                type="password"
                className="mt-2 rounded-xl shadow-[3px_3px_5px_rgba(0,0,0,0.1)] p-3 w-full text-sm"
                value={formData.oldPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="new-password" className="text-[#7f7f7f] font-semibold text-sm leading-5">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                className="mt-2 rounded-xl shadow-[3px_3px_5px_rgba(0,0,0,0.1)] p-3 w-full text-sm"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="text-[#7f7f7f] font-semibold text-sm leading-5">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="mt-2 rounded-xl shadow-[3px_3px_5px_rgba(0,0,0,0.1)] p-3 w-full text-sm"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-[#002544] text-white font-semibold text-sm leading-5 rounded-xl px-6 py-3"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
