import React, { useState, useRef, useEffect } from "react";
import NotificationPopup from "./NotificationPopup";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import logo from "../../assets/logo.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/drop-down";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/Avatar";
import { logout } from "../../services/oprations/authAPI";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef();

  const handleClickOutside = (e) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const mainLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/insights", label: "AI Insights" },
    { to: "/dashboard/projects", label: "Projects" },
  ];

  const settingsLinks = [
    {
      to: "/dashboard/settings/profile",
      label: "Profile Management",
      icon: UserCircle,
    },
    {
      to: "/dashboard/settings/password",
      label: "Password & Authentication",
      icon: Settings,
    },
  ];

  const activeLabel = React.useMemo(() => {
    const allLinks = [...mainLinks, ...settingsLinks];
    const found = allLinks
      .filter((link) => pathname.startsWith(link.to))
      .sort((a, b) => b.to.length - a.to.length)[0];
    return found ? found.label : "Dashboard";
  }, [pathname, mainLinks, settingsLinks]);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  return (
    <header className="bg-white px-6 py-3 flex justify-between items-center shadow-sm z-10 w-full">
      {/* Left: Logo + Title */}
      <div className="flex items-center">
        <div className="flex items-center ">
          <img src={logo} alt="PortfolioVue Logo" className="h-14 rounded-md" />
        </div>
        <h2 className="text-xl ml-20 font-semibold text-[#012950] hidden sm:block">
          {activeLabel}
        </h2>
      </div>

      {/* Right: Search + Notification + Profile + Logout */}
      <div className="flex items-center space-x-2">
        {/* Search */}
        <div className="relative hidden md:block mr-3">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search Here......"
            className="pl-10 pr-4 py-2 rounded-full border bg-gray-50 w-64 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Notification Icon with Badge */}
        {/* Notification Icon with Popup */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Bell className="text-[#012950] w-6 h-6" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </button>

          {/* Notification Popup */}
          {showNotifications && (
            <div ref={notificationRef} className="absolute right-0 mt-2 z-50">
              <NotificationPopup onClose={() => setShowNotifications(false)} />
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        {token ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user?.image} alt={user?.name} />
                    <AvatarFallback className="bg-[#012950] text-white">
                      {getInitials(user?.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline font-semibold text-sm text-[#012950]">
                    {user?.name || "User"}
                  </span>
                  <ChevronDown className="text-[#012950] w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end">
                <DropdownMenuLabel>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.role}
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {settingsLinks.map((link) => (
                  <Link to={link.to} key={link.to}>
                    <DropdownMenuItem className="cursor-pointer">
                      <link.icon className="mr-2 h-4 w-4" />
                      <span>{link.label}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 cursor-pointer focus:bg-red-50 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Separate Logout Icon (Exit Icon) */}
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-red-50 text-red-600 transition-colors"
            >
              <LogOut className="w-6 h-6 text-[#012950] hover:text-red-500" />
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-[#012950] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#011f3f]">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
