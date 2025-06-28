import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../slices/authSlice';
import { setUser } from '../../slices/profileSlice';
import { Search, Bell, User, ChevronDown, LogOut } from 'lucide-react';
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const handleLogout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#F6FAF9] px-6 py-4 flex justify-between items-center shadow-sm z-10 w-full">
      {/* Left: Logo + Title */}
      <div className="flex items-center ">
        {/* Logo & Tagline */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="PortfolioVue Logo" className="h-16" />
         
        </div>
        {/* Page Title */}
        <h2 className="text-lg ml-20 font-semibold text-[#012950] hidden sm:block">
          Dashboard
        </h2>
      </div>

      {/* Right: Search + Notification + Profile */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search Here......"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Notification Icon with Badge */}
        <div className="relative">
          <Bell className="text-[#012950] w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold px-1.5 rounded-full">
            1
          </span>
        </div>

        {/* Profile Dropdown */}
        {token ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 cursor-pointer p-1 rounded-lg hover:bg-gray-100"
            >
              <div className="w-8 h-8 rounded-full bg-[#012950] flex items-center justify-center text-white font-bold">
                <User className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline font-medium text-[#012950]">
                {user?.name || 'User'}
              </span>
              <ChevronDown className="text-[#012950]" />
            </button>

            {isMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user?.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="bg-[#012950] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#011f3f]">
            Login
          </button>
        )}

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
