import React, { useState } from "react";
import addUser from "../../../assets/Add.png";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-blue-900">Add New User</h2>
        <p className="text-gray-500 text-md font-semibold mt-1">
          Create new user and to this Portal
        </p>
        <div className="h-[2px] w-full bg-blue-500 mt-2" />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Left Icon */}
        <img src={addUser} alt="addUser icon" />

        {/* Form */}
        <div className="bg-gray-100 rounded-xl shadow-md p-8 w-full max-w-md">
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                User Name
              </label>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Role
              </label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter role"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Enter password"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate("/dashboard/settings/user-management")}
                className="border border-blue-900 text-blue-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => navigate("/dashboard/settings/user-management")}
                className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
