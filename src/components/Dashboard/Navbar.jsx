import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, Bell, User, LogOut } from "lucide-react";
import logo from "../../assets/logo.png";
import { logout } from "../../services/oprations/authAPI";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  // 🔁 Define the links before using them in useMemo
  const mainLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/insights", label: "AI Insights" },
    { to: "/dashboard/projects", label: "Projects" },
  ];

  const settingsLinks = [
    { to: "/dashboard/settings/profile", label: "Profile Management" },
    { to: "/dashboard/settings/password", label: "Password & Authentication" },
  ];

  const activeLabel = useMemo(() => {
    const allLinks = [...mainLinks, ...settingsLinks];

    // Find the longest matching prefix
    const found = allLinks
      .filter((link) => pathname.startsWith(link.to))
      .sort((a, b) => b.to.length - a.to.length)[0];

    return found ? found.label : "Dashboard";
  }, [pathname]);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <header className="bg-[#F6FAF9] px-6 py-4 flex justify-between items-center shadow-sm z-10 w-full">
      {/* Left: Logo + Title */}
      <div className="flex items-center ">
        {/* Logo & Tagline */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="PortfolioVue Logo" className="h-16 rounded-md" />
        </div>
        {/* Page Title */}
        <h2 className="text-lg ml-20 font-semibold text-[#012950] hidden sm:block">
          {activeLabel}
        </h2>
      </div>

      {/* Right: Search + Notification + Profile */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        {/* Search Bar Styled Like Image */}
        <div className="relative hidden md:block mr-5">
          <input
            type="text"
            placeholder="Search Here......"
            className="pl-5 pr-10 py-2 rounded-full w-80 bg-white text-[#002E5D] placeholder:text-[#002E5D] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#002E5D]">
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* Notification Icon with Badge */}
        <div className="relative">
          <Bell className="text-[#012950] w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold px-1.5 rounded-full">
            1
          </span>
        </div>

        {/* user*/}

        <button className="flex items-center space-x-2 cursor-pointer p-1 rounded-lg hover:bg-gray-100">
          <div className="w-8 h-8 rounded-full bg-[#012950] flex items-center justify-center text-white font-bold">
            <User className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline font-medium text-[#012950]">
            {user?.firstName || "User"}
          </span>
        </button>

        {/* Optional: Logout icon on far right */}
        {token && (
          <button onClick={handleLogout} className="ml-2 hover:text-red-500">
            <LogOut className="w-5 h-5 text-[#012950]" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
