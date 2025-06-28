import React, { useState } from "react";
import hand from "../../assets/Hand.png";
import Eclipse from "../../assets/Ellipse.png";
import Profile from "../../assets/Profile.png";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    jiraEmail: "",
    jiraSite: "",
    jiraApiKey: "",
  });

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSave = () => {
    // TODO: Save changes logic
    console.log("Saved profile:", profile);
  };

  return (
    <div className="bg-white font-sans p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top container */}
        <div className="bg-[#f3f7f6] rounded-xl p-8 flex flex-col md:flex-row md:space-x-12 shadow-md">
          {/* Avatar section */}
          <div className="flex flex-col items-center space-y-3 md:w-1/3">
            <div className="relative w-32 h-32">
              {/* Circle Background */}
              <img
                src={Eclipse}
                alt="Eclipse Background"
                className="w-32 h-32 rounded-full"
              />

              {/* Profile Photo on top */}
              <img
                src={Profile}
                alt="Profile"
                className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <p className="text-center text-sm text-[#001f3f] font-normal leading-tight">
              Allowed *.jpeg, *.jpg, *.png
              <br />
              Max size of 3MB
            </p>
            <button
              type="button"
              className="bg-[#001f3f] text-white font-semibold rounded-full px-8 py-2 shadow-md hover:shadow-lg transition-shadow"
            >
              Upload Avatar
            </button>
          </div>

          {/* Profile form */}
          <form className="flex-1 space-y-6 mt-6 md:mt-0">
            <div>
              <label
                htmlFor="name"
                className="block text-[#6b6b6b] font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Smith John"
                className="w-full rounded-xl py-3 px-4 text-gray-400 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[#6b6b6b] font-semibold mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="demo@gmail.com"
                className="w-full rounded-xl py-3 px-4 text-gray-400 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-[#6b6b6b] font-semibold mb-1"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                value={profile.contact}
                onChange={handleChange}
                placeholder="9034663321"
                className="w-full rounded-xl py-3 px-4 text-gray-400 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
              />
            </div>
          </form>
        </div>

        {/* Connections Section */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Google Sheet */}
          <div className="bg-[#f3f7f6] rounded-xl p-6 flex flex-col items-center space-y-6 flex-1 shadow-md">
            <p className="self-start text-[#001f3f] font-semibold text-sm">
              Google sheet connection
            </p>
            <img
              src={hand}
              alt="Google Sheet Connection"
              className="w-60 h-40 object-contain"
            />
            <button
              type="button"
              className="bg-[#001f3f] text-white font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-shadow"
            >
              Connect to Google Sheet
            </button>
          </div>

          {/* Jira Connection */}
          <form className="bg-[#f3f7f6] rounded-xl p-6 flex flex-col space-y-4 flex-1 shadow-md">
            <p className="text-[#001f3f] font-semibold text-sm">
              Jira connection
            </p>
            <div>
              <label
                htmlFor="jiraEmail"
                className="block text-[#6b6b6b] font-semibold mb-1"
              >
                Jira Email Address
              </label>
              <input
                type="email"
                id="jiraEmail"
                value={profile.jiraEmail}
                onChange={handleChange}
                placeholder="demo@gmail.com"
                className="w-full rounded-xl py-3 px-4 text-gray-400 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
              />
            </div>
            <div>
              <label
                htmlFor="jiraSite"
                className="block text-[#6b6b6b] font-semibold mb-1"
              >
                Jira Site URL
              </label>
              <input
                type="text"
                id="jiraSite"
                value={profile.jiraSite}
                onChange={handleChange}
                placeholder="https://yoursite.atlassian.net"
                className="w-full rounded-xl py-3 px-4 text-gray-400 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
              />
            </div>
            <div>
              <label
                htmlFor="jiraApiKey"
                className="block text-[#6b6b6b] font-semibold mb-1"
              >
                Jira API Key
              </label>
              <input
                type="text"
                id="jiraApiKey"
                value={profile.jiraApiKey}
                onChange={handleChange}
                placeholder="your-api-key"
                className="w-full rounded-xl py-3 px-4 text-gray-400 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#001f3f]"
              />
            </div>
          </form>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="bg-[#001f3f] text-white font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-shadow"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
